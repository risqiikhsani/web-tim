"use client";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import FormSubmitButton from "@/components/form-submit-button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { UserType } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { redirect } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { UpdateRole } from "./action";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  role: z.string(),
});

export default function UpdateForm({initial_data}:{initial_data:UserType}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: initial_data.role
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await UpdateRole(initial_data.id, values.role);
    if (!res?.success) {
      toast.info("Error");
    } else {
      toast.info("Updated successfully");
      redirect("/dashboard/users");
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Role</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Role</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-3xl mx-auto py-10"
          >
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select role of user" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="user">user</SelectItem>
                      <SelectItem value="admin">admin</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>You can manage user role</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormSubmitButton loading={form.formState.isSubmitting}/>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
