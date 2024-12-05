"use server";
import { client } from "@/lib/aws";
import {
  PutItemCommand,
  DeleteItemCommand,
  GetItemCommand,
  UpdateItemCommand,
  type AttributeValue
} from "@aws-sdk/client-dynamodb";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const TABLE_NAME = process.env.TABLE_NAME!;
// const INDEX_NAME = process.env.INDEX_NAME!;


export async function CreateData(formData: FormData) {
  // Validate input
  const title = formData.get("title");
  const text = formData.get("text");
  const type = formData.get("type");
  //   const files = formData.getAll("files") as File[];

  // Input validation
  if (!title || !text || !type) {
    return { success: false, message: "Input not filled." };
  }

  try {
    // File handling (optional)
    // let fileUrls: string[] = [];
    // if (files && files.length > 0) {
    //   // Implement file upload logic here (e.g., to S3)
    //   // Example:
    //   // fileUrls = await uploadFilesToS3(files);
    // }

    // Prepare item for DynamoDB
    const item = {
      id: { S: uuidv4() },
      type: { S: type.toString() },
      title: { S: title.toString() },
      text: { S: text.toString() },
      createdAt: { S: new Date().toISOString() },
      // Optional: Add file URLs if uploaded
      //   ...(fileUrls.length > 0 && { files: { L: fileUrls.map(url => ({ S: url })) } }),
    };

    // Send item to DynamoDB
    const command = new PutItemCommand({
      TableName: TABLE_NAME,
      Item: item,
      ConditionExpression: "attribute_not_exists(id)",
    });

    await client.send(command);
    revalidatePath("/dashboard/blogs"); // Update cached posts
    return {
      success:true
    }
  } catch (error) {
    // Comprehensive error handling
    // console.error("Error in CreateData:", error);
    // Throw a new error with a more informative message
    // return { message: "Failed to create news/blogs" };
    return {
      success: false,
      message: "Failed to create news/blogs",
      error: error instanceof Error ? error.message : String(error),
    };
  }

  // redirect function in server action will throw error NEXT_REDIRECT
  
  // revalidatePath("/dashboard/blogs"); // Update cached posts
  // redirect(`/dashboard`); // Navigate to the new post page

}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildUpdateExpression(body: Record<string, any>) {
  const updateExpression: string[] = [];
  const expressionAttributeNames: Record<string, string> = {};
  const expressionAttributeValues: Record<string, AttributeValue> = {};

  // Dynamically build update expression
  for (const [key, value] of Object.entries(body)) {
    // Prevent updating key attributes
    if (key === 'id' || key === 'type') continue;

    updateExpression.push(`#${key} = :${key}`);
    expressionAttributeNames[`#${key}`] = key;
    expressionAttributeValues[`:${key}`] = { S: value as string };
  }

  // Add last updated timestamp
  updateExpression.push('#updatedAt = :updatedAt');
  expressionAttributeNames['#updatedAt'] = 'updatedAt';
  expressionAttributeValues[':updatedAt'] = { 
    S: new Date().toISOString() 
  };

  return { 
    updateExpression, 
    expressionAttributeNames, 
    expressionAttributeValues 
  };
}

export async function UpdateData(slug:string,formData:FormData){
  const title = formData.get("title");
  const text = formData.get("text");
  const type = formData.get("type");
  //   const files = formData.getAll("files") as File[];

  // Input validation
  if (!title || !text || !type) {
    return { success: false, message: "Input not filled." };
  }

  const data = {
    title,text,type
  }

  try {

    const { 
      updateExpression, 
      expressionAttributeNames, 
      expressionAttributeValues 
    } = buildUpdateExpression(data);

    if (updateExpression.length === 0) {
      return {success:false, message:"No valid field to update"}
    }

    const updateCommand = new UpdateItemCommand({
      TableName: TABLE_NAME,
      Key: {
        id: { S: slug },
        type: { S: type.toString() },
      },
      UpdateExpression: `SET ${updateExpression.join(', ')}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW',
    });

    const { Attributes } = await client.send(updateCommand);

    if (!Attributes) {
      return {success:false,message:"Item not found or no changes made"}
    }
    revalidatePath("/dashboard/blogs");
    return {success:true,data:unmarshall(Attributes)}
  } catch (error) {
    console.error('Update Error:', error);
    return {
      success: false,
      message: "Failed to update news/blogs",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

export async function DeleteData(slug:string,type:string){

  // Input validation
  if (!slug || !type) {
    return { success: false, message: "Input not filled." };
  }

  try {
    // First, verify item exists
    const { Item } = await client.send(
      new GetItemCommand({
        TableName: TABLE_NAME,
        Key: {
          id: { S: slug },
          type: { S: type },
        },
      })
    );

    if (!Item) {
      return {success:false,message:"Item not found"}
    }

    // Delete the item
    const deleteCommand = new DeleteItemCommand({
      TableName: TABLE_NAME,
      Key: {
        id: { S: slug },
        type: { S: type.toString() },
      },
      ConditionExpression: 'attribute_exists(id)',
    });

    await client.send(deleteCommand);
    revalidatePath("/dashboard/blogs");
    return {success:true,message:"Deleted successfully"}
  } catch (error) {
    console.error('Delete Error:', error);
    return {
      success: false,
      message: "Failed to delete news/blogs",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

