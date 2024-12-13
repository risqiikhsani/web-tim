import { queryByType } from "@/lib/functions";

export async function GET(){
    const response = await queryByType("user")
    return Response.json(response)
}