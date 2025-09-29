"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import GoogleMap from "./google-map";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Thành công!",
          description:
            "Tin nhắn của bạn đã được gửi. Chúng tôi sẽ liên hệ lại trong 24h.",
        });
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          message: "",
        });
      } else {
        toast({
          title: "Lỗi!",
          description: result.error || "Có lỗi xảy ra khi gửi tin nhắn.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Lỗi!",
        description: "Không thể gửi tin nhắn. Vui lòng thử lại sau.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const officeAddress =
    "38 Lane 378 My Dinh Street, My Dinh Ward, Hanoi, Vietnam";

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Ready to transform your business?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Let's discuss how our AI, blockchain, and Web3 solutions can drive
            your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>
                Fill out the form and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="firstName"
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      name="lastName"
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <Input
                    name="company"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project requirements..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    autoComplete="off"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Contact Information</h3>
                <p className="text-muted-foreground">
                  Reach out to us through any of these channels.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📧</span>
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">
                      lyndomicx@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📱</span>
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-muted-foreground">(+84)929862699</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary">📍</span>
                  </div>
                  <div>
                    <div className="font-medium">Office</div>
                    <div className="text-muted-foreground">{officeAddress}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg border border-border/30 bg-card/20 backdrop-blur-sm">
              {/* <h4 className="font-semibold mb-2">Why Choose Lynx AI?</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Industry-leading expertise in AI & blockchain</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>Proven track record with 50+ successful projects</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>End-to-end solutions from concept to deployment</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span>24/7 support and maintenance</span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="mt-16">
          <GoogleMap address={officeAddress} />
        </div>
      </div>
    </section>
  );
}
