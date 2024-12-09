"use client";

import { instance } from "@/lib/axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Balancer from "react-wrap-balancer";
import * as z from "zod";
import FormSubmitButton from "@/components/form-submit-button";
import { H2, P } from "@/components/typography/Typography";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export function SubscribeForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  // Define a submit handler
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Use the Axios instance to send a POST request
      const response = await instance.post("/api/subscribers", {
        email: values.email,
      });
      // Display a success toast with the response message
      toast.success(
        "Subscription successful! Check your email for confirmation."
      );
      form.reset()
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
  };

  return (

      <div className="flex flex-col items-center gap-6">
        <H2 className="!my-0">
          Subscribe to <span className="text-orange-400">TIMCorp</span>
        </H2>
        <P className="text-lg opacity-70 md:text-2xl">
          <Balancer>Get our up-to-date news and offers.</Balancer>
        </P>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-6 flex h-fit items-center justify-center gap-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Email</FormLabel>
                  <FormControl>
                    <Input
                      className="!mt-0 md:w-64"
                      placeholder="Your email address"
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

export default SubscribeForm;
