"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { DeleteFile } from "./action";
import { P } from "@/components/typography/Typography";

export default function DeleteForm({ file_key }: { file_key: string }) {
  const deleteButton = async () => {
    const response = await DeleteFile(file_key);
    if (!response.success) {
      toast("Error delete file");
    } else {
      toast("Successfully deleted file");
    }
  };
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Delete</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete File</DialogTitle>
          </DialogHeader>
          Are you sure to delete this file ?
          <P className="font-bold">{`${file_key}`}</P>
          <DialogClose asChild>
            <Button onClick={deleteButton}>Delete</Button>
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
}
