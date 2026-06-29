import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  businessQuery: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      businessQuery: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    submitContact.mutate(
      { data },
      {
        onSuccess: (res) => {
          if (res.success) {
            setIsSuccess(true);
            toast({
              title: "Inquiry Submitted",
              description: "Our enterprise team will review your message shortly.",
            });
            form.reset();
          } else {
            toast({
              variant: "destructive",
              title: "Submission Failed",
              description: res.message || "Please try again later.",
            });
          }
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "System Error",
            description: "An unexpected error occurred. Please contact support@habinix.com directly.",
          });
        },
      }
    );
  }

  return (
    <div className="w-full min-h-screen bg-background py-24">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold text-foreground mb-6">Partner With Us</h1>
            <p className="text-lg text-muted-foreground mb-12">
              Habinix LLC provides enterprise-grade infrastructure and consulting for complex ventures. 
              Initiate a dialogue to discover how our operational frameworks can support your objectives.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Corporate Headquarters</h3>
                <p className="text-foreground font-medium">Wyoming, USA</p>
                <p className="text-sm text-muted-foreground">Registered NAICS 541 Provider</p>
              </div>
              
              <div>
                <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">Direct Inquiries</h3>
                <p className="text-foreground font-medium">support@habinix.com</p>
                <p className="text-foreground font-medium">+1-307-555-0190</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border p-8 shadow-sm"
          >
            {isSuccess ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-full mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Message Received</h3>
                <p className="text-muted-foreground mb-8">
                  Your inquiry has been routed to the appropriate department. We aim to respond to all enterprise requests within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setIsSuccess(false)}>Submit Another Inquiry</Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name / Organization</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Corporate Email</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="businessQuery"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inquiry Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select purpose of inquiry" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="consulting">IT Consulting Services</SelectItem>
                            <SelectItem value="managed">Managed Operations</SelectItem>
                            <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                            <SelectItem value="portfolio">Portfolio Investment/Partnership</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
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
                            placeholder="Detail your operational requirements..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={submitContact.isPending}
                  >
                    {submitContact.isPending ? "Transmitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}