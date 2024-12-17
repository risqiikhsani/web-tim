"use client"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"
import Chatbot from "./chatbot"
import { MessageCircle } from "lucide-react"

export default function ChatbotButton() {
  return (
    <Sheet>
      <SheetTrigger asChild>
      <button
        className="flex gap-2 items-center text-xl fixed bottom-4 right-4 z-50 bg-primary hover:bg-yellow-300 rounded-full p-4 shadow-lg "
      >
        <MessageCircle/> Ask AI
      </button>
      </SheetTrigger>
      <SheetContent className="min-w-full md:min-w-[50%] max-w-7xl h-screen overflow-y-scroll">
        <SheetHeader className="fixed top-0 p-4 bg-white dark:bg-black border-b-2 border-primary">
          <SheetTitle>ChatTIM AI</SheetTitle>
          <SheetDescription>
            Ask anything with our AI Powered Chat
          </SheetDescription>
        </SheetHeader>
        <div className="my-20">
        <Chatbot/>
        </div>

      </SheetContent>
    </Sheet>
  )
}


