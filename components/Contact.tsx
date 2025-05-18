"use client";

import { useState } from "react";
import { Section } from "@/components/Section";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";
import data from "@/constants/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
    alert(
      "Thank you for your message! This is a demo form. will update it soon.."
    );
  };

  return (
    <Section
      id="contact"
      title={data.title}
      subTitle={data.subTitle}
      className="bg-gradient-to-br from-sky-400 to-blue-600 text-white"
    >
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div className="space-y-6">
          <h3 className="text-2xl font-medium">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 mt-0.5" />
              <p>{data.adress}</p>
            </div>
            <div className="flex items-start">
              <Phone className="w-5 h-5 mr-3 mt-0.5" />
              <p>{data.phone}</p>
            </div>
            <div className="flex items-start">
              <Mail className="w-5 h-5 mr-3 mt-0.5" />
              <p>{data.email}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-medium mb-6">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="bg-white/90 border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="bg-white/90 border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                required
                className="min-h-[150px] bg-white/90 border-transparent"
              />
            </div>
            <Button
              type="submit"
              className="bg-white text-blue-600 hover:bg-white/90"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}
