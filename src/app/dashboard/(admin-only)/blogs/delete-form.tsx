"use client";

import { P } from "@/components/typography/Typography";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { NewsBlogsType } from "@/types/types";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { DeleteData } from "./action";


export default function DeleteForm({
  initial_data,
}: {
  initial_data: NewsBlogsType;
}) {
  const deleteButton = async () => {
    const key = {
      type:  initial_data.type,
      id: initial_data.id,
    }
    const response = await DeleteData(key);
    if (!response.success) {
      toast.error("Error deleting data");
    } else {
      toast.info("Deleted successfully");
      redirect("/dashboard/blogs");
    }
  };

  return (
    <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline">Delete</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Delete data</DialogTitle>
      </DialogHeader>
      Are you sure to delete this data ?
      <P className="font-bold">{`${initial_data.id}`}</P>
      <DialogClose asChild>
        <Button onClick={deleteButton}>Delete</Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
  );
}
