import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function MuftiyaanSupport() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  function onSubmit(data: FormValues) {
    submitContact.mutate(
      { data: { ...data, businessQuery: "muftiyaan-support" } },
      {
        onSuccess: (res) => {
          if (res.success) {
            setIsSuccess(true);
            toast({ title: "Support Ticket Created", description: "Our technical team will investigate the issue." });
            form.reset();
          } else {
            toast({ variant: "destructive", title: "Submission Failed", description: res.message });
          }
        },
        onError: () => toast({ variant: "destructive", title: "Error", description: "Failed to submit request." }),
      }
    );
  }

  return (
    <div className="w-full min-h-screen bg-background py-16">
      <div className="container px-4 mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold font-serif mb-2">App Support</h1>
        <p className="text-muted-foreground mb-12">Technical assistance for the Muftiyaan application.</p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>I forgot my password, how do I reset it?</AccordionTrigger>
                <AccordionContent>Use the "Forgot Password" link on the login screen. An email with reset instructions will be sent to your registered address.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How long does it take for a scholar to reply?</AccordionTrigger>
                <AccordionContent>Response times vary depending on the complexity of the inquiry and the volume of requests. Average turnaround is 48-72 hours.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>The app crashes on launch</AccordionTrigger>
                <AccordionContent>Please ensure you are running the latest version from the App Store or Google Play. If the issue persists, submit a support ticket using the form on this page with your device model and OS version.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="bg-card border border-border p-8">
            <h2 className="text-2xl font-bold mb-6">Contact Technical Support</h2>
            {isSuccess ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-bold text-primary mb-2">Ticket Submitted</h3>
                <p className="text-muted-foreground mb-6">Our engineers have received your request.</p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>Submit Another Ticket</Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl><Input {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Account Email</FormLabel>
                        <FormControl><Input type="email" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Issue Description</FormLabel>
                        <FormControl><Textarea className="min-h-[120px]" {...field} /></FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={submitContact.isPending}>
                    {submitContact.isPending ? "Submitting..." : "Submit Ticket"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}