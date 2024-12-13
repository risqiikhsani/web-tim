"use server"

import { UpdateItem } from "@/lib/functions"
import { revalidatePath } from "next/cache"

export async function UpdateRole(user_id:string,user_role:string){

    try {
        await UpdateItem({type:"user",id:user_id},{role:user_role})
        revalidatePath("/dashboard/users")
        return {success:true}
    } catch (error) {
        console.error("Error updating role",error)
        return {success:false}
    }

}