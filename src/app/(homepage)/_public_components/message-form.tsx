"use client";
import FormSubmitButton from "@/components/form-submit-button";
import { H3 } from "@/components/typography/Typography";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { instance } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

const formSchema = z.object({
  email: z.string(),
  name: z.string(),
  message: z.string(),
});

export default function MessageForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues:{
        email:"",
        name:"",
        message:""
    }
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Use the Axios instance to send a POST request
      await instance.post("/api/messages", {
        email: values.email,
        name: values.name,
        message: values.message,
      });
      // Display a success toast with the response message
      toast.success(
        "Thank you, Message sent to us. We will reach back to you soon."
      );
      form.reset();
    } catch (error) {
      // Explicitly assert the type of the error
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message ||
          "Something went wrong. Please try again.";
        toast.error(errorMessage);
      } else {
        // Handle any other unexpected error types
        toast.error("An unexpected error occurred.");
      }
    }
  }

  return (
    <div className="mt-10 md:mt-0 border-t-2 border-primary md:border-t-0 pt-4">
      <H3>Send us your message</H3>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 max-w-3xl mx-auto py-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="yourmail@gmail.com" type="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="your name" type="" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Send us your message to discuss"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormSubmitButton loading={form.formState.isSubmitting} />
        </form>
      </Form>
    </div>
  );
}
