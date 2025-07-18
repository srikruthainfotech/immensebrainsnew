"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Zap } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    service: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      contact: "HR@immensebrains.com",
      action: "mailto:HR@immensebrains.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      contact: "(719) 555-0123",
      action: "tel:+17195550123",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come to our office",
      contact: "6760 Corporate Drive, Suite 100, Colorado Springs, CO 80919",
      action: "#",
    },
  ]

  const services = [
    "Software Development",
    "IT Consulting",
    "Cloud Solutions",
    "Digital Transformation",
    "Mobile App Development",
    "Web Development",
    "Data Analytics",
    "Cybersecurity",
    "Other",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h1 className="text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight mb-8">
              Let's Build Something
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Ready to transform your business with cutting-edge technology? We're here to help you achieve your goals
              with innovative solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
              <Users className="w-4 h-4 mr-2" />
              Multiple Ways to Connect
            </Badge>
            <h2 className="text-5xl font-light text-slate-900 mb-8 tracking-tight">
              Choose Your Preferred
              <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Communication Method
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 shadow-lg relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-yellow-500"></div>
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white mb-6 mx-auto shadow-xl relative group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="h-10 w-10" />
                </div>
                <h3 className="font-semibold text-slate-900 text-xl mb-4">{method.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{method.description}</p>
                <p className="text-slate-700 font-medium text-sm mb-6">{method.contact}</p>
                <Button
                  asChild
                  variant="outline"
                  className="border-amber-200 text-amber-700 hover:bg-amber-50 hover:border-amber-300 bg-transparent"
                >
                  <a href={method.action}>Contact Now</a>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge
                variant="outline"
                className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
              >
                <Send className="w-4 h-4 mr-2" />
                Send Us a Message
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
                Tell Us About
                <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Your Project
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours to discuss your project requirements.
              </p>
            </div>

            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-8 pt-10">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white mb-6 shadow-xl mx-auto">
                  <Zap className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl font-light text-center">Start Your Project</CardTitle>
                <CardDescription className="text-lg font-light text-center">
                  Let's discuss how we can help transform your business
                </CardDescription>
              </CardHeader>
              <CardContent className="px-10 pb-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="name" className="text-lg font-light">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="h-12 text-lg border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="email" className="text-lg font-light">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        required
                        className="h-12 text-lg border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label htmlFor="company" className="text-lg font-light">
                        Company Name
                      </label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="h-12 text-lg border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                    <div className="space-y-3">
                      <label htmlFor="phone" className="text-lg font-light">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="h-12 text-lg border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="space-y-3">
                    <label htmlFor="service" className="text-lg font-light">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full h-12 text-lg border border-slate-300 rounded-md px-3 focus:border-amber-500 focus:ring-amber-500 bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="subject" className="text-lg font-light">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Brief description of your project"
                      required
                      className="h-12 text-lg border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-3">
                    <label htmlFor="message" className="text-lg font-light">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your project requirements, timeline, and goals..."
                      required
                      rows={6}
                      className="text-lg border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold py-4 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office Hours & Additional Info */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Office Information
              </Badge>
              <h2 className="text-5xl font-light text-slate-900 mb-8 tracking-tight">
                Visit Our
                <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  Colorado Springs Office
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <h3 className="text-2xl font-light text-slate-900 mb-6">Office Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Monday - Friday</span>
                    <span className="text-slate-900 font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Saturday</span>
                    <span className="text-slate-900 font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Sunday</span>
                    <span className="text-slate-900 font-medium">Closed</span>
                  </div>
                  <div className="border-t border-slate-200 pt-4 mt-6">
                    <p className="text-slate-600 text-sm">Emergency support available 24/7 for existing clients</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <h3 className="text-2xl font-light text-slate-900 mb-6">Response Times</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Email Inquiries</span>
                    <span className="text-slate-900 font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Phone Calls</span>
                    <span className="text-slate-900 font-medium">Same day</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Project Proposals</span>
                    <span className="text-slate-900 font-medium">2-3 business days</span>
                  </div>
                  <div className="border-t border-slate-200 pt-4 mt-6">
                    <p className="text-slate-600 text-sm">Urgent requests are prioritized and handled immediately</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
