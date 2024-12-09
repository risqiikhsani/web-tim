import {
  AttributeValue,
  DeleteItemCommand,
  DeleteItemCommandOutput,
  GetItemCommand,
  GetItemCommandInput,
  GetItemCommandOutput,
  PutItemCommand,
  PutItemCommandInput,
  PutItemCommandOutput,
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput,
  UpdateItemCommand,
  UpdateItemCommandOutput,
} from "@aws-sdk/client-dynamodb";
import {
  DeleteObjectCommand,
  DeleteObjectCommandOutput,
  ListObjectsV2Command,
  ListObjectsV2CommandOutput,
  PutObjectCommand
} from "@aws-sdk/client-s3";
import { marshall, unmarshall } from "@aws-sdk/util-dynamodb";
import { client, clients3 } from "./aws";

const BUCKET = process.env.AWS_S3_BUCKET!;
const TABLE_NAME = process.env.TABLE_NAME!;
// const INDEX_NAME = process.env.INDEX_NAME!;

function logError(context: string, error: unknown) {
  console.error(`${context}:`, error instanceof Error ? error.message : error);
}


async function executeAwsCommand<T>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  command: any,
  context: string
): Promise<T | null> {
  try {
    const response = await client.send(command);
    return response as T;
  } catch (error) {
    logError(context, error);
    return null;
  }
}

interface S3File {
  key: string;
  buffer: Buffer;
}

export async function UploadFileToS3(file: S3File) {
  const command = new PutObjectCommand({
    Bucket: BUCKET,
    Key: file.key,
    Body: file.buffer,
  });

  try {
    const response = await clients3.send(command);
    console.log("File uploaded successfully", response);
    return file.key;
  } catch (error) {
    logError("S3 Upload Error", error);
    throw error;
  }
}

export async function ListFilesS3() {
  const command = new ListObjectsV2Command({
    Bucket: BUCKET,
  });
  try {
    const response : ListObjectsV2CommandOutput= await clients3.send(command);
    return response
  } catch (error) {
    logError("S3 Upload Error", error);
    throw error;
  }
}

export async function DeleteFileS3(key: string) {
  const command = new DeleteObjectCommand({
    Bucket: BUCKET,
    Key: key,
  });
  try {
    const response : DeleteObjectCommandOutput = await clients3.send(command);
    return response.$metadata
  } catch (error) {
    logError("S3 Upload Error", error);
    throw error;
  }
}

// Search news by title
export async function queryByType(type: string) {
  const queryParams: QueryCommandInput = {
    TableName: TABLE_NAME,
    KeyConditionExpression: "#type = :type",
    ExpressionAttributeNames: {
      "#type": "type",
    },
    ExpressionAttributeValues: {
      ":type": { S: type },
    },
  };
  const command = new QueryCommand(queryParams);
  const response: QueryCommandOutput = await client.send(command);
  return response.Items?.map((item) => unmarshall(item)) || [];
}

interface KeyType {
  type: string;
  id: string;
}

export async function GetItemByKeys(
  key: KeyType
): Promise<Record<string, unknown> | null> {
  const queryParams: GetItemCommandInput = {
    TableName: TABLE_NAME,
    Key: {
      type: { S: key.type },
      id: { S: key.id },
    },
  };

  const command = new GetItemCommand(queryParams);
  const response: GetItemCommandOutput = await client.send(command);
  return response?.Item ? unmarshall(response.Item) : null;
}

export async function CreateItem(
  data: Record<string, unknown>
): Promise<PutItemCommandOutput | null> {
  const item = marshall(data, {
    removeUndefinedValues: true,
    convertEmptyValues: true,
  });

  // Send item to DynamoDB
  const queryParams: PutItemCommandInput = {
    TableName: TABLE_NAME,
    Item: item,
    ConditionExpression: "attribute_not_exists(id)",
  };

  const command = new PutItemCommand(queryParams);

  return executeAwsCommand<PutItemCommandOutput>(command, "Create Item");
}

export async function UpdateItem(
  key: KeyType,
  data: Record<string, unknown>
): Promise<UpdateItemCommandOutput | null> {
  const {
    updateExpression,
    expressionAttributeNames,
    expressionAttributeValues,
  } = buildUpdateExpression(data);

  if (!updateExpression.length) {
    console.warn("No fields to update.");
    return null;
  }

  const command = new UpdateItemCommand({
    TableName: TABLE_NAME,
    Key: {
      id: { S: key.id },
      type: { S: key.type },
    },
    UpdateExpression: `SET ${updateExpression.join(", ")}`,
    ExpressionAttributeNames: expressionAttributeNames,
    ExpressionAttributeValues: expressionAttributeValues,
    ReturnValues: "ALL_NEW",
  });

  return executeAwsCommand<UpdateItemCommandOutput>(command, "Update Item");
}

function buildUpdateExpression(body: Record<string, unknown>) {
  const updateExpression: string[] = [];
  const expressionAttributeNames: Record<string, string> = {};
  const expressionAttributeValues: Record<string, AttributeValue> = {};

  // Dynamically build update expression
  for (const [key, value] of Object.entries(body)) {
    // Prevent updating key attributes
    if (key === "id" || key === "type") continue;

    // If value is an array, 
    if (Array.isArray(value)) {
      // append to the existing list using list_append
      // updateExpression.push(`#${key} = list_append(if_not_exists(#${key}, :empty_list), :${key})`);
      // OR
      // use this to replace instead of append the list
      updateExpression.push(`#${key} = :${key}`);
      expressionAttributeNames[`#${key}`] = key;
      expressionAttributeValues[`:${key}`] = { L: value.map((item) => ({ S: item as string })) };
      // expressionAttributeValues[":empty_list"] = { L: [] }; // Initialize list if it doesn't exist
    } else {
      // Handle other data types (strings, numbers)
      updateExpression.push(`#${key} = :${key}`);
      expressionAttributeNames[`#${key}`] = key;
      expressionAttributeValues[`:${key}`] =
        typeof value === "string"
          ? { S: value }
          : { N: value?.toString() ?? "0" };
    }
  }

  // Add last updated timestamp
  updateExpression.push("#updatedAt = :updatedAt");
  expressionAttributeNames["#updatedAt"] = "updatedAt";
  expressionAttributeValues[":updatedAt"] = {
    S: new Date().toISOString(),
  };

  return {
    updateExpression,
    expressionAttributeNames,
    expressionAttributeValues,
  };
}

export async function DeleteItem(
  key: KeyType
): Promise<DeleteItemCommandOutput | null> {
  // Delete the item
  const command = new DeleteItemCommand({
    TableName: TABLE_NAME,
    Key: {
      id: { S: key.id },
      type: { S: key.type },
    },
    ConditionExpression: "attribute_exists(id)",
  });

  return executeAwsCommand<DeleteItemCommandOutput>(command, "Delete Item");
}
