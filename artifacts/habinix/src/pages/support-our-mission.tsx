import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useGetPaymentStatus, useSubscribeEmail } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
  email: z.string().email("Please provide a valid email address"),
});

type FormValues = z.infer<typeof formSchema>;

export default function SupportOurMission() {
  const { data: paymentStatus, isLoading: statusLoading } = useGetPaymentStatus();
  const subscribeEmail = useSubscribeEmail();
  const { toast } = useToast();
  const [subscribed, setSubscribed] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  function onSubmit(data: FormValues) {
    subscribeEmail.mutate(
      { data },
      {
        onSuccess: (res) => {
          if (res.success) {
            setSubscribed(true);
            toast({
              title: "Subscription Confirmed",
              description: "You have been registered for gateway launch notifications.",
            });
          } else {
            toast({
              variant: "destructive",
              title: "Subscription Failed",
              description: res.message || "Please try again later.",
            });
          }
        },
        onError: () => {
          toast({
            variant: "destructive",
            title: "System Error",
            description: "Failed to connect to the subscription server.",
          });
        },
      }
    );
  }

  return (
    <div className="w-full min-h-screen bg-background py-24 flex items-center justify-center">
      <div className="container px-4 mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="w-16 h-16 bg-primary text-primary-foreground mx-auto flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Project Sponsorship</h1>
          
          <div className="text-lg text-muted-foreground max-w-xl mx-auto space-y-4">
            <p>
              Habinix LLC underwrites global digital welfare structures and scholarly operations. 
              We invite enterprise partners and individuals to contribute to operations.
            </p>
          </div>

          <div className="mt-12 bg-card border border-border p-8 md:p-12 shadow-sm text-left">
            {statusLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-6 w-3/4 mx-auto" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-12 w-full mt-6" />
              </div>
            ) : paymentStatus?.live ? (
              <div className="text-center">
                <h3 className="text-xl font-bold mb-4">Financial Gateway Active</h3>
                <p className="text-muted-foreground mb-6">Our secure corporate gateway is ready to process your sponsorship.</p>
                <Button size="lg" className="w-full max-w-xs">Proceed to Payment</Button>
              </div>
            ) : (
              <div className="text-center space-y-6">
                <div className="inline-block px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold uppercase tracking-wider mb-2">
                  System Status: Propagating
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Global Financial Gateway is Propagating.</h3>
                <p className="text-muted-foreground">
                  If you wish to back our technical and scholarly operations, please submit your email below to be notified upon live launch.
                </p>
                
                {subscribed ? (
                  <div className="p-4 bg-muted/50 border border-border text-foreground font-medium mt-6">
                    Your contact coordinates have been secured in our registry.
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 max-w-sm mx-auto flex flex-col gap-4">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input 
                                placeholder="Enter corporate or personal email" 
                                className="text-center h-12"
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        size="lg"
                        className="w-full"
                        disabled={subscribeEmail.isPending}
                      >
                        {subscribeEmail.isPending ? "Registering..." : "Notify Me"}
                      </Button>
                    </form>
                  </Form>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}