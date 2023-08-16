"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const formSchema = z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(10).max(500),
});

export default function ContactPage() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <div className="flex justify-center w-full">
        <Card className="max-w-4xl w-full p-8">
          <CardHeader>
            <CardTitle>Contact Me</CardTitle>
          </CardHeader>
          <CardContent className="flex space-x-20">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="username" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter your discord username
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter your email address
                      </FormDescription>
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
                        <Textarea placeholder="message" {...field} />
                      </FormControl>
                      <FormDescription>Enter your message</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit">Submit</Button>
              </form>
            </Form>

            <div>
              <iframe
                className="focus:outline-none rounded-sm bg-inherit"
                src="https://discord.com/widget?id=1139558352007995545&theme=dark"
                width="350"
                height="500"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>

              {/* Link if above is not working */}
              <a
                href="https://discord.gg/3YzKb2X"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 mt-1"
              >
                Join the discord
              </a>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-8"></CardFooter>
        </Card>
      </div>
    </div>
  );
}
