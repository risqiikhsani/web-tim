"use client"

import { CopyIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner"; // Install sonner if you haven't: npm install sonner
import { Button } from "@/components/ui/button";

export default function CopyTextButton({ text }: { text: string }) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text); // Copy the text to clipboard
      toast.success("Text copied to clipboard!"); // Show success toast
    } catch (error) {
      toast.error("Failed to copy text."); // Handle error
      console.error("Error copying text:", error);
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant="ghost"
      className="flex items-center gap-2 p-4 ml-4"
      aria-label="Copy to clipboard"
    >
      <CopyIcon className="h-4 w-4" />
      <span>Copy</span>
    </Button>
  );
}
