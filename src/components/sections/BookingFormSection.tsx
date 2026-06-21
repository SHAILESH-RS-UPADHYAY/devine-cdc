"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CONTACT, ADDRESS, THERAPIES } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  childName: z.string().min(2, "Child's name is required"),
  parentName: z.string().min(2, "Parent name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export function BookingFormSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      
      if (!formspreeId) {
        console.warn("Formspree ID is missing in environment variables. Simulating submission.");
        // Fallback to simulate API call if no ID is provided
        await new Promise((resolve) => setTimeout(resolve, 1500));
      } else {
        const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        });
        
        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
      }

      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting your request. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="pt-12 pb-24 bg-white relative" id="book-appointment">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row"
        >
          
          {/* Contact Information Side */}
          <div className="w-full lg:w-5/12 bg-[url('https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?auto=format&fit=crop&q=80')] bg-cover bg-center relative overflow-hidden text-white p-10 md:p-14">
            <div className="absolute inset-0 bg-devine-orange/85 backdrop-blur-[2px] z-0"></div>
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-devine-peach/20 rounded-full blur-2xl translate-y-1/4 -translate-x-1/4" />
            
            <div className="relative z-10 h-full flex flex-col">
              <h3 className="font-heading text-3xl font-bold mb-4">Get in Touch</h3>
              <p className="text-white/80 mb-12">
                Every child deserves the best start. Reach out to schedule a comprehensive assessment with our expert team.
              </p>

              <div className="space-y-8 flex-1">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-devine-peach" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                    <p className="text-white/80 leading-relaxed">{ADDRESS.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-devine-peach" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-white/80">{CONTACT.phoneDisplay}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-devine-peach" size={24} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-white/80 break-all md:break-normal">{CONTACT.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-7/12 p-10 md:p-14 bg-gray-50/50">
            <h3 className="font-heading text-3xl font-extrabold text-gray-900 mb-2">Book Your Appointment</h3>
            <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you shortly.</p>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-bold text-xl text-green-800 mb-2">Request Received!</h4>
                <p className="text-green-700">Thank you for reaching out. Our team will contact you within 24 hours to schedule the assessment.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="childName">Child's Name *</Label>
                    <Input 
                      id="childName" 
                      placeholder="e.g. Rahul" 
                      className={`bg-white ${errors.childName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      {...register("childName")}
                    />
                    {errors.childName && <p className="text-sm text-red-500">{errors.childName.message}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="parentName">Parent's Name *</Label>
                    <Input 
                      id="parentName" 
                      placeholder="e.g. John Doe" 
                      className={`bg-white ${errors.parentName ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      {...register("parentName")}
                    />
                    {errors.parentName && <p className="text-sm text-red-500">{errors.parentName.message}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      placeholder="+91 XXXXXXXXXX" 
                      className={`bg-white ${errors.phone ? "border-red-500 focus-visible:ring-red-500" : ""}`}
                      {...register("phone")}
                    />
                    {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In *</Label>
                  <Select onValueChange={(val) => setValue("service", val)}>
                    <SelectTrigger className={`bg-white ${errors.service ? "border-red-500 focus-visible:ring-red-500" : ""}`}>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="assessment">General Assessment</SelectItem>
                      {THERAPIES.map(t => (
                        <SelectItem key={t.id} value={t.id}>{t.title}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && <p className="text-sm text-red-500">{errors.service.message}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Additional Notes (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us a little about your child..." 
                    className="bg-white min-h-[120px]"
                    {...register("message")}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg h-14"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                        <span className="block w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                      </motion.div>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Submit Request <Send size={18} />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
