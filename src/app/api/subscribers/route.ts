import { CreateItem, queryByType } from "@/lib/functions";


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
  try {
    const result = await queryByType("subscribers")
    return Response.json(result);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return createErrorResponse("Failed to fetch items");
  }
}

export async function POST(request:Request) {
  const body = await request.json()
  if(!body.email){
    return createErrorResponse("Email is required",400)
  }

  const data = {
    type:"subscribers",
    id:body.email,
    createdAt: new Date().toISOString(),
  }
  try {
    const response = await CreateItem(data)
    return Response.json(response)
  } catch (error) {
    console.error("Failed to create a subscribers.",error)
    return createErrorResponse("Something went wrong.")
  }
}

