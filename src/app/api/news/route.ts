import { CreateItem, queryByType } from "@/lib/functions";
import { v4 as uuidv4 } from "uuid";

// const TABLE_NAME = process.env.TABLE_NAME!;
// const INDEX_NAME = process.env.INDEX_NAME!;

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
    const result = await queryByType("news");
    return Response.json(result);
  } catch (error) {
    console.error("Error fetching items:", error);
    return createErrorResponse("Failed to fetch items");
  }
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
    const data = {
      id: uuidv4(),
      type: "news",
      title: body.title,
      text: body.text,
      createdAt: new Date().toISOString(),
    };

    const response = await CreateItem(data);

    // Return the created item
    return Response.json(
      {
        message: "Item created successfully",
        data: response,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return createErrorResponse("An unexpected error occurred");
  }
}
