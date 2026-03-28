"use client"
import React, { useRef } from "react";
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

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm<FormData>();
  const { handleSubmit, reset, control, formState: { errors } } = methods;

  const onSubmit = () => {
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_rkphjop",
        "template_4l91qkb",
        formRef.current,
        "_iD0HqlLU_Te5smnH"
      )
      .then(
        () => {
          alert("تم إرسال الرسالة بنجاح ✅");
          reset();
        },
        (error) => {
          alert("حصل خطأ ❌: " + error.text);
        }
      );
  };

  return (
<div className="py-8 px-3 md:px-0">
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
                <Input {...field} placeholder="Your Name" />
              </FormControl>
              <FormMessage>{errors.name?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* الإيميل */}
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} type="email" placeholder="Your Account" />
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
                <Textarea {...field} placeholder="Write Your Message" rows={4} />
              </FormControl>
              <FormMessage>{errors.message?.message}</FormMessage>
            </FormItem>
          )}
        />

        {/* زر الإرسال */}
        <Button type="submit" className="w-full">
          Send
        </Button>
      </form>
    </FormProvider>
</div>
  );
};