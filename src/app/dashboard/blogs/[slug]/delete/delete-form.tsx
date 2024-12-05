"use client";

import { NewsBlogsType } from "@/types/types";
import { Button } from "@/components/ui/button";
import React from "react";
import { DeleteData } from "../../action";
import { toast } from "sonner";
import { redirect } from "next/navigation";

export default function DeleteForm({
  initial_data,
}: {
  initial_data: NewsBlogsType;
}) {
  const deleteButton = async () => {
    const response = await DeleteData(initial_data.id, initial_data.type);
    if (!response.success) {
      toast.error("Error deleting data");
    } else {
      toast.info("Deleted successfully");
      redirect("/dashboard/blogs");
    }
  };

  return (
    <div>
      <Button onClick={deleteButton}>
        Are you sure to delete this data ?{" "}
      </Button>
    </div>
  );
}
