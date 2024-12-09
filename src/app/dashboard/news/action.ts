"use server";
import { CreateItem, DeleteItem, UpdateItem, UploadFileToS3 } from "@/lib/functions";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

// const INDEX_NAME = process.env.INDEX_NAME!;


export async function CreateData(formData: FormData) {
  // Validate input
  const title = formData.get("title");
  const text = formData.get("text");
  const type = formData.get("type");

  // Input validation
  if (!title || !text || !type) {
    return { success: false, message: "Input not filled." };
  }

  // files handler
  const files = formData.getAll("files") as File[];
  const uploadedFiles = [];
  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = file.name;
    const data = {
      key: filename,
      buffer: buffer
    }
    const result = await UploadFileToS3(data);
    uploadedFiles.push(result);
  }

  try {

    const data = {
      id: uuidv4(),
      type: type,
      title: title,
      text: text,
      createdAt: new Date().toISOString(),
      files: uploadedFiles
    }

    const response = await CreateItem(data)
    revalidatePath("/dashboard/news"); // Update cached posts
    return {
      success:true,
      data:response
    }
  } catch (error) {
    console.error("Error in CreateData:", error);
    return {
      success: false,
      message: "Failed to create news/blogs",
      error: error instanceof Error ? error.message : String(error),
    };
  }

  // redirect function in server action will throw error NEXT_REDIRECT
  
  // revalidatePath("/dashboard/news"); // Update cached posts
  // redirect(`/dashboard`); // Navigate to the new post page

}


export async function UpdateData(slug:string,formData:FormData){
  const title = formData.get("title");
  const text = formData.get("text");
  const type = formData.get("type");

  // Input validation
  if (!title || !text || !type) {
    return { success: false, message: "Input not filled." };
  }

  // files handler
  const files = formData.getAll("files") as File[];
  const uploadedFiles = [];
  // Handle new files upload
  for (const file of files) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filename = file.name;

    try {
      const result = await UploadFileToS3({ key: filename, buffer });
      uploadedFiles.push(result); // Assuming `result` is the S3 key or URL
    } catch (error) {
      console.error(`Failed to upload file ${filename}:`, error);
      throw new Error(`File upload failed for ${filename}`);
    }
  }

  // Handle existing files that user didn't delete or replace in the form
  const existing_string_files = formData.getAll("existing_string_files") as string[];
  uploadedFiles.push(...existing_string_files); // Append existing files
  console.log(uploadedFiles)

  try {
    const key = {
      type:type.toString(),
      id:slug
    }
  
    const data = {
      title: title,
      text: text,
      files: uploadedFiles
    }

   const response = await UpdateItem(key,data)
    revalidatePath("/dashboard/news");
    return {success:true,data:response}
  } catch (error) {
    console.error('Update Error:', error);
    return {
      success: false,
      message: "Failed to update news/blogs",
      error: error,
    };
  }
}

interface KeyType {
  id : string;
  type : string;
}

export async function DeleteData(key:KeyType){

  // Input validation
  if (!key.id || !key.type) {
    return { success: false, message: "Input not filled." };
  }

  try {
    const key_data = {
      type:key.type,
      id:key.id
    }
    const response = await DeleteItem(key_data)
    revalidatePath("/dashboard/news");
    return {success:true,message:"Deleted successfully",data:response}
  } catch (error) {
    console.error('Delete Error:', error);
    return {
      success: false,
      message: "Failed to delete news/blogs",
      error: error instanceof Error ? error.message : String(error),
    };
  }
}

