import { DeleteObjectCommand, ListObjectsCommand, PutObjectCommand,S3ServiceException } from "@aws-sdk/client-s3";
import { clients3 } from "./aws";

const BUCKET = process.env.AWS_S3_BUCKET!

export async function UploadFileToS3(
  key: string,
  file: Buffer,
) {

  const command = new PutObjectCommand({
    Bucket:BUCKET,
    Key: key,
    Body: file,
  });

  try {
    const response = await clients3.send(command);
    console.log("File uploaded successfully",response);
    return key;
  } catch (caught) {
    if (
      caught instanceof S3ServiceException &&
      caught.name === "EntityTooLarge"
    ) {
      console.error(
        `Error from S3 while uploading object to ${BUCKET}. \
    The object was too large. To upload objects larger than 5GB, use the S3 console (160GB max) \
    or the multipart upload API (5TB max).`
      );
    } else if (caught instanceof S3ServiceException) {
      console.error(
        `Error from S3 while uploading object to ${BUCKET}.  ${caught.name}: ${caught.message}`
      );
    } else {
      throw caught;
    }
  }
}


export async function ListFilesS3(){
    const command = new ListObjectsCommand({
        Bucket:BUCKET
    })
    try {
        const response = clients3.send(command)
        return response;
    } catch (error) {
        console.error(error)
    }
}

export async function DeleteFileS3(key:string){
    const command = new DeleteObjectCommand({
        Bucket:BUCKET,
        Key:key
    })
    try {
        const response = clients3.send(command)
        return response
    } catch (error) {
        console.error(error)
    }
}