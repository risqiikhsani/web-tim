"use client";

import ChatbotLoader from "@/components/chatbot-loader";
import MarkdownDisplay from "@/components/markdown-display";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { P } from "./typography/Typography";

export default function Chatbot() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    stop,
    error,
    reload,
    append,
  } = useChat({
    maxSteps: 5,
    onFinish: () => {
      toast.success("Message sent!");
    },
    onError: (error) => {
      toast.error("An error occurred: " + JSON.stringify(error));
    },
    onResponse: () => {
      toast.success("Message received!");
    },
  });

  const messageEndRef = useRef<HTMLDivElement | null>(null); // Ref for the message container

  // Function to scroll to bottom of messages
  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to the bottom every time messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addUserMessage = (message: string) => {
    append({
      role: "user",
      content: message,
    });
  };

  return (
    <div className="flex flex-col">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {error && (
          <div className="text-red-500 bg-red-100 p-3 rounded-md">
            <p>An error occurred. Please try again.</p>
            <Button variant="outline" onClick={() => reload}>
              Retry
            </Button>
          </div>
        )}

        {messages.map((m) => (
          <div
            key={m.id}
            className={`p-3 rounded-md ${
              m.role === "user"
                ? "bg-orange-100 text-orange-800 self-end"
                : "bg-gray-100 text-gray-800 self-start"
            }`}
          >
            <p className="font-medium">{m.role === "user" ? "You:" : "TIM:"}</p>
            {m.toolInvocations ? (
              <pre className="text-sm">
                {JSON.stringify(m.toolInvocations, null, 2)}
              </pre>
            ) : (
              <MarkdownDisplay text={m.content} />
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex items-center space-x-3">
            <ChatbotLoader />
            <Button variant="outline" size="sm" onClick={stop}>
              Stop
            </Button>
          </div>
        )}
        {/* This div helps to scroll to the bottom */}
        <div ref={messageEndRef} />
      </div>

      <div className="flex-1"></div>

      {/* Input */}
      <div className="flex flex-col gap-4">
        <P>Related questions : </P>
        <div className="grid grid-cols-2 gap-2">
          <Button
            variant="outline"
            onClick={() => addUserMessage("What is TIMCorp ?")}
          >
            What is TIMCorp ?
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              addUserMessage("What services does TIMCorp provide ?")
            }
          >
            What services does TIMCorp provide ?
          </Button>
          <Button
            variant="outline"
            onClick={() => addUserMessage("What are the TIMCorp partners ?")}
          >
            What are the TIMCorp partners ?
          </Button>
          <Button
            variant="outline"
            onClick={() => addUserMessage("How do I send email to TIMCorp ?")}
          >
            How do I send email to TIMCorp ?
          </Button>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2">
          <Input
            className="flex-1 border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500"
            value={input}
            placeholder="Type your message..."
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            className="bg-orange-500 text-white hover:bg-orange-600"
          >
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}
