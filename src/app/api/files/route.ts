import { ListFilesS3 } from "@/lib/functions";

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

export async function GET(){
    try {
        const response = await ListFilesS3()
        return Response.json(response)        
    } catch (error) {
        console.error(error)
        return createErrorResponse("Failed to fetch items");
    }
}