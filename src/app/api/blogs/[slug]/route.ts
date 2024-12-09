import { GetItemByKeys } from "@/lib/functions";


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
    const key = {
      type:"blogs",
      id:slug
    }
    const result = await GetItemByKeys(key)
    return Response.json(result)
  } catch (error) {
    console.error("Fetch Item Error:", error);
    return createErrorResponse("Failed to fetch item");
  }
}



