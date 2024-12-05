"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { CloudUpload, Paperclip } from "lucide-react";
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload";
import { UploadFile } from "./action";
import { Accept } from "react-dropzone";

// Define acceptable file types
const ACCEPTED_FILE_TYPES = [
  "application/msword", // .doc
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // .docx
  "text/plain", // .txt
  "video/mp4", // .mp4
  "audio/mpeg",
  "audio/wav",
  "audio/webm",
  "audio/flac",
  "image/jpeg", // .jpg
  "image/png", // .png
  "image/gif", // .gif
  "application/pdf", // .pdf
];

const formSchema = z.object({
  files: z
    .array(
      z
        .instanceof(File)
        .refine((file) => ACCEPTED_FILE_TYPES.includes(file.type), {
          message:
            "Invalid file type. Allowed types: .doc, .docx, .txt, .mp4, .jpg, .png, .gif, .pdf",
        })
        .refine((file) => file.size <= 1024 * 1024 * 4, {
          message: "File size must be less than 4MB",
        })
    )
    .optional(),
});

export default function CreateForm() {
  const [files, setFiles] = useState<File[] | null>(null);

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4, // 4MB
    multiple: true,
    accept: {
      "image/*": [".jpg", ".jpeg", ".png", ".gif"],
      "application/msword": [".doc", ".docx"],
      "text/plain": [".txt"],
      "video/mp4": [".mp4"],
      "application/pdf": [".pdf"],
      "audio/mpeg": [".mp3"],
      "audio/wav": [".wav"],
      "audio/webm": [".webm"],
      "audio/flac": [".flac"],
    } as Accept,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      files: [],
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Validate files before upload
      if (files) {
        const validationResult = formSchema.safeParse({ files });
        if (!validationResult.success) {
          toast.error(validationResult.error.errors[0].message);
          return;
        }
      }

      // Create FormData
      const formData = new FormData();
      if (files && files.length > 0) {
        files.forEach((file) => {
          formData.append("files", file);
        });
      }

      const response = await UploadFile(formData);
      if (!response.success) {
        toast.error("Error uploading files");
      } else {
        toast.success("Successfully uploaded files");
        setFiles(null);
        form.reset(); // Reset the form
      }
    } catch (error) {
      console.error("Form submission error", error);
      toast.error("Failed to submit the form. Please try again.");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Upload Files</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload Files</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            <FormField
              control={form.control}
              name="files"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select File</FormLabel>
                  <FormControl>
                    <FileUploader
                      value={files}
                      onValueChange={setFiles}
                      dropzoneOptions={dropZoneConfig}
                      className="relative bg-background rounded-lg p-2"
                    >
                      <FileInput
                        id="fileInput"
                        className="outline-dashed outline-1 outline-slate-500"
                      >
                        <div className="flex items-center justify-center flex-col p-8 w-full ">
                          <CloudUpload className="text-gray-500 w-10 h-10" />
                          <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">
                              Click to upload
                            </span>
                            &nbsp; or drag and drop
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            Allowed: .doc, .docx, .txt, .mp4, .jpg, .png, .gif,
                            .pdf (max 4MB)
                          </p>
                        </div>
                      </FileInput>
                      <FileUploaderContent>
                        {files &&
                          files.length > 0 &&
                          files.map((file, i) => (
                            <FileUploaderItem key={i} index={i}>
                              <Paperclip className="h-4 w-4 stroke-current" />
                              <span>{file.name}</span>
                            </FileUploaderItem>
                          ))}
                      </FileUploaderContent>
                    </FileUploader>
                  </FormControl>
                  <FormDescription>
                    Select files to upload (max 5 files, 4MB each)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
            <Button type="submit">Submit</Button>
            </DialogClose>       
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
