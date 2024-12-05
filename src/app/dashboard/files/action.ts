"use server";
import { DeleteFileS3, UploadFileToS3 } from "@/lib/functions";
import { revalidatePath } from "next/cache";
import { v4 as uuidv4 } from "uuid";

export async function UploadFile(formData: FormData) {
  try {
    const files = formData.getAll("files") as File[];
    console.log(files);
    const uploadedFiles = [];

    for (const file of files) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = file.name;
      const result = await UploadFileToS3(filename, buffer);
      uploadedFiles.push(result);
    }

    console.log("all files have been uploaded successfully. ", uploadedFiles);
    revalidatePath("/dashboard/files");
    return {
      success: true,
      message: "File has been uploaded",
      data: uploadedFiles,
    };
  } catch (error) {
    console.error(error);
    return { success: false, message: String(error) };
  }
}

export async function DeleteFile(file_id: string) {
  try {
    const response = await DeleteFileS3(file_id);
    console.log("all files have been uploaded successfully. ", response);
    revalidatePath("/dashboard/files");
    return { success: true, message: "File has been uploaded", data: response };
  } catch (error) {
    console.error(error);
    return { success: false, message: String(error) };
  }
}
