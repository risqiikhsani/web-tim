import { client } from "@/lib/aws";
import {
  PutItemCommand,
  ScanCommand,
  QueryCommand,
  type QueryCommandInput
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { v4 as uuidv4 } from "uuid";
import { type NextRequest } from "next/server";

const TABLE_NAME = process.env.TABLE_NAME!;
const INDEX_NAME = process.env.INDEX_NAME!;
const NEWS_TYPE = "news";

// Common error response handler
function createErrorResponse(message: string, status: number = 500) {
  return new Response(
    JSON.stringify({
      error: message,
    }),
    {
      status,
      headers: { "Content-Type": "application/json" },
    }
  );
}

// Fetch all items or search by title
export async function GET(request: NextRequest) {
  const title = request.nextUrl.searchParams.get("title");

  try {
    const result = title 
      ? await searchNewsByTitle(title)
      : await fetchAllNews();

    return Response.json(result);
  } catch (error) {
    console.error("Error fetching items:", error);
    return createErrorResponse("Failed to fetch items");
  }
}

// Fetch all news items
async function fetchAllNews() {
  const { Items } = await client.send(
    new ScanCommand({ TableName: TABLE_NAME })
  );
  return Items?.map((item) => unmarshall(item)) || [];
}

// Search news by title
export async function searchNewsByTitle(title: string) {
  const queryParams: QueryCommandInput = {
    TableName: TABLE_NAME,
    IndexName: INDEX_NAME,
    KeyConditionExpression: "#title = :title AND #type = :type",
    ExpressionAttributeNames: {
      "#title": "title",
      "#type": "type"
    },
    ExpressionAttributeValues: {
      ":title": { S: title },
      ":type": { S: NEWS_TYPE },
    },
  };

  const { Items } = await client.send(new QueryCommand(queryParams));
  return Items?.map((item) => unmarshall(item)) || [];
}

// Create new item
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.title || !body.text) {
      return createErrorResponse("Title and text are required", 400);
    }

    // Prepare item for DynamoDB
    const item = {
      id: { S: uuidv4() },
      type: { S: NEWS_TYPE },
      title: { S: body.title },
      text: { S: body.text },
      createdAt: { S: new Date().toISOString() },
    };

    // Send item to DynamoDB
    const command = new PutItemCommand({
      TableName: TABLE_NAME,
      Item: item,
      ConditionExpression: "attribute_not_exists(id)",
    });

    await client.send(command);

    // Return the created item
    return Response.json(
      {
        message: "Item created successfully",
        item: unmarshall(item),
      },
      { status: 201 }
    );
  } catch (error) {
    // Handle specific error cases
    if (error instanceof Error) {
      switch (error.name) {
        case "ConditionalCheckFailedException":
          return createErrorResponse("An item with this ID already exists", 409);
        default:
          console.error("Error creating item:", error);
          return createErrorResponse("Failed to create item");
      }
    }

    return createErrorResponse("An unexpected error occurred");
  }
}