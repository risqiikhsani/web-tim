import {
  DeleteItemCommand,
  GetItemCommand,
  UpdateItemCommand,
  type AttributeValue
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";
import { client } from "@/lib/aws";

const TABLE_NAME = process.env.TABLE_NAME!;
const NEWS_TYPE = "news";

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
  { params }: { params: { slug: string } }
) {
  const slug = (await params).slug;

  if (!slug) {
    return createErrorResponse("Slug is required", 400);
  }

  try {
    const { Item } = await client.send(
      new GetItemCommand({
        TableName: TABLE_NAME,
        Key: {
          id: { S: slug },
          type: { S: NEWS_TYPE },
        },
      })
    );

    if (!Item) {
      return createErrorResponse("Item not found", 404);
    }

    return Response.json(unmarshall(Item));
  } catch (error) {
    console.error('Fetch Item Error:', error);
    return createErrorResponse("Failed to fetch item");
  }
}

// Update an existing item
export async function PUT(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = (await params).slug;

  if (!slug) {
    return createErrorResponse("Slug is required", 400);
  }

  try {
    const body = await request.json();

    if (!body || Object.keys(body).length === 0) {
      return createErrorResponse("No update data provided", 400);
    }

    const { 
      updateExpression, 
      expressionAttributeNames, 
      expressionAttributeValues 
    } = buildUpdateExpression(body);

    if (updateExpression.length === 0) {
      return createErrorResponse("No valid fields to update", 400);
    }

    const updateCommand = new UpdateItemCommand({
      TableName: TABLE_NAME,
      Key: {
        id: { S: slug },
        type: { S: NEWS_TYPE },
      },
      UpdateExpression: `SET ${updateExpression.join(', ')}`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW',
    });

    const { Attributes } = await client.send(updateCommand);

    if (!Attributes) {
      return createErrorResponse("Item not found or no changes made", 404);
    }

    return Response.json(unmarshall(Attributes));
  } catch (error) {
    console.error('Update Error:', error);
    return createErrorResponse(
      error instanceof Error ? error.message : 'Failed to update item'
    );
  }
}

// Build dynamic update expression
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

// Delete an item
export async function DELETE(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = (await params).slug;

  if (!slug) {
    return createErrorResponse("Slug is required", 400);
  }

  try {
    // First, verify item exists
    const { Item } = await client.send(
      new GetItemCommand({
        TableName: TABLE_NAME,
        Key: {
          id: { S: slug },
          type: { S: NEWS_TYPE },
        },
      })
    );

    if (!Item) {
      return createErrorResponse("Item not found", 404);
    }

    // Delete the item
    const deleteCommand = new DeleteItemCommand({
      TableName: TABLE_NAME,
      Key: {
        id: { S: slug },
        type: { S: NEWS_TYPE },
      },
      ConditionExpression: 'attribute_exists(id)',
    });

    await client.send(deleteCommand);

    return new Response(JSON.stringify({ 
      message: 'Item deleted successfully',
      id: slug 
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error('Delete Error:', error);
    
    // Handle specific error cases
    if (error instanceof Error) {
      switch (error.name) {
        case 'ConditionalCheckFailedException':
          return createErrorResponse('Item not found or already deleted', 404);
        default:
          return createErrorResponse(
            error.message || 'Failed to delete item'
          );
      }
    }

    return createErrorResponse('An unexpected error occurred');
  }
}