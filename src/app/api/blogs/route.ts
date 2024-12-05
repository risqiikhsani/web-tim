import { client } from "@/lib/aws";
import {
    QueryCommand,
    type QueryCommandInput
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const TABLE_NAME = process.env.TABLE_NAME!;
// const INDEX_NAME = process.env.INDEX_NAME!;
// const NEWS_TYPE = "blogs";




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

// Fetch all items 
export async function GET() {
    // const title = request.nextUrl.searchParams.get("title");
  
    try {
      // const result = title 
      //   ? await searchNewsByTitle(title)
      //   : await fetchAllNews();
      const result = await searchByType("blogs")
  
      return Response.json(result);
    } catch (error) {
      console.error("Error fetching items:", error);
      return createErrorResponse("Failed to fetch items");
    }
  }
  
  // Search news by title
  async function searchByType(type: string) {
    const queryParams: QueryCommandInput = {
      TableName: TABLE_NAME,
      KeyConditionExpression: "#type = :type",
      ExpressionAttributeNames: {
        "#type": "type"
      },
      ExpressionAttributeValues: {
        ":type": { S: type },
      },
    };
  
    const { Items } = await client.send(new QueryCommand(queryParams));
    console.log(Items)
    return Items?.map((item) => unmarshall(item)) || [];
  }

// Fetch all news items
// async function fetchAllNews() {
//   const { Items } = await client.send(
//     new ScanCommand({ TableName: TABLE_NAME })
//   );
//   return Items?.map((item) => unmarshall(item)) || [];
// }

// Search news by title
// async function searchNewsByTitle(title: string) {
//   const queryParams: QueryCommandInput = {
//     TableName: TABLE_NAME,
//     IndexName: INDEX_NAME,
//     KeyConditionExpression: "#title = :title AND #type = :type",
//     ExpressionAttributeNames: {
//       "#title": "title",
//       "#type": "type"
//     },
//     ExpressionAttributeValues: {
//       ":title": { S: title },
//       ":type": { S: NEWS_TYPE },
//     },
//   };

//   const { Items } = await client.send(new QueryCommand(queryParams));
//   return Items?.map((item) => unmarshall(item)) || [];
// }

