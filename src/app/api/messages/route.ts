import { CreateItem, queryByType } from "@/lib/functions";

export async function GET() {
    try {
        const response = await queryByType("messages")
        return Response.json(response)
    } catch (error) {
        console.error("Error fetching messages.",error)
        return createErrorResponse("Something went wrong")
    }
}

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

export async function POST(request: Request) {
  const body = await request.json();
  // Validate required fields
  if (!body.email || !body.message) {
    return createErrorResponse("Email and message are required", 400);
  }

  const data = {
    type: "messages",
    id:body.email,
    name:body.name,
    message:body.message,
    createdAt: new Date().toISOString(),
  }


  try {
    const response = await CreateItem(data)

    return Response.json(response);
  } catch (error) {
    console.error("Error creating message.",error)
    return createErrorResponse("Something went wrong",400)
  }
}
