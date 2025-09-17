"use client";

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
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values);
}
export const SignupSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex w-[407px] h-[256px] flex-col items-start rounded-lg">
        <div className="flex w-full h-[106px] flex-col items-start p-6 gap-1.5">
          <h3 className="text-2xl font-semibold text-[#09090B]">
            Create Your Account
          </h3>
          <p className="text-[14px] font-normal text-[#71717A]">
            Choose a username for your page
          </p>
        </div>
        <div className="flex px-4  w-full h-[86px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter username here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-[359px] h-10">
                Continue
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};
