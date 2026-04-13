"use client"
import React, { useRef, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import emailjs from "@emailjs/browser";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const [loading, setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm<FormData>();
  const { handleSubmit, reset, control, formState: { errors } } = methods;

  const onSubmit = () => {
    if (!formRef.current) return;
    setLoading(true)

    emailjs
      .sendForm(
        "service_rkphjop",
        "template_4l91qkb",
        formRef.current,
        "_iD0HqlLU_Te5smnH"
      )
      .then(
        () => {
          reset({
            name: "",
            email: "",
            message: ""
          });
          toast.success("Message sent successfully ✅", {
            position: "top-center",
            duration: 3000,
          });
          setLoading(false)
        },
        (error) => {

          toast.error("Failed to send message ❌", {
            position: "top-center",
            duration: 3000,
          });
          setLoading(false)
        }
      );
  };

  return (
    <div className="py-8 px-3 md:px-0">
      <h1 className="text-center font-bold text-3xl py-8 ">Contact Me</h1>

      <FormProvider {...methods}>
        <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto">
          {/* الاسم */}
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input className="bg-gray-300" {...field} placeholder="Your Name" />
                </FormControl>
                <FormMessage>{errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* الإيميل */}
          <FormField
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@gmail\.com$/,
                message: "Email must be a Gmail account",
              },
            }}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input className="bg-gray-300" {...field} type="email" placeholder="Your Account" />
                </FormControl>
                <FormMessage>{errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* الرسالة */}
          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea className="bg-gray-300" {...field} placeholder="Write Your Message" rows={4} />
                </FormControl>
                <FormMessage>{errors.message?.message}</FormMessage>
              </FormItem>
            )}
          />

          {/* زر الإرسال */}
          <Button type="submit" className="w-full">
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </FormProvider>
    </div>
  );
};