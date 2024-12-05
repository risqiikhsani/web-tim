import { client } from "@/lib/aws";
import { GetItemCommand, GetItemCommandInput } from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const TABLE_NAME = process.env.TABLE_NAME!;
// const NEWS_TYPE = "blogs";

// Utility function for creating error responses
function createErrorResponse(message: string, status: number = 500) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// Fetch a single item by ID
export async function GET(
  request: Request,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  const slug = (await params).slug;

  if (!slug) {
    return createErrorResponse("Slug is required", 400);
  }

  try {
    const result = await GetItemByTypeAndId("blogs", slug);
    return Response.json(result);
  } catch (error) {
    console.error("Fetch Item Error:", error);
    return createErrorResponse("Failed to fetch item");
  }
}

async function GetItemByTypeAndId(type: string, id: string) {
  const queryParams: GetItemCommandInput = {
    TableName: TABLE_NAME,
    Key: {
      type: { S: type },
      id: { S: id },
    },
  };

  const { Item } = await client.send(new GetItemCommand(queryParams));
  if (!Item) {
    return null;
  }
  return unmarshall(Item);
}
