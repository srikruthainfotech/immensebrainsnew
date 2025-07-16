"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Clock, Send, Crown, Sparkles, MessageCircle, Award } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", company: "", service: "", message: "" })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@immensebrains.com", "sales@immensebrains.com"],
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["6760 Corporate Drive, Suite 100", "Colorado Springs, CO 80919"],
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
      gradient: "from-violet-400 to-purple-500",
    },
  ]

  const faqs = [
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple projects may take 4-8 weeks, while complex enterprise solutions can take 6-12 months or more.",
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Yes, we offer comprehensive maintenance and support services to ensure your software continues to perform optimally after deployment.",
      gradient: "from-rose-400 to-pink-500",
    },
    {
      question: "What technologies do you work with?",
      answer:
        "We work with a wide range of modern technologies including React, Node.js, Python, Java, .NET, mobile frameworks, and cloud platforms.",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      question: "How do you ensure project quality?",
      answer:
        "We follow industry best practices including code reviews, automated testing, continuous integration, and regular client feedback throughout the development process.",
      gradient: "from-violet-400 to-purple-500",
    },
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black py-24 lg:py-32 overflow-hidden">
        {/* Clean luxury background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Us
            </Badge>
            <h1 className="text-6xl lg:text-8xl font-light text-white leading-tight tracking-tight mb-8">
              Let's Start Building Your
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Next Project
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
              Ready to transform your business with innovative technology solutions? Get in touch with our team of
              experts today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-8 pt-10">
                  <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white mb-6 shadow-xl">
                    <Send className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-3xl font-light">Send us a Message</CardTitle>
                  <CardDescription className="text-lg font-light">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-10 pb-10">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-lg font-light">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          placeholder="John Doe"
                          required
                          className="h-12 text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-lg font-light">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          placeholder="john@example.com"
                          required
                          className="h-12 text-lg"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-lg font-light">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        placeholder="Your Company"
                        className="h-12 text-lg"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="service" className="text-lg font-light">
                        Service Interested In
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
                        <SelectTrigger className="h-12 text-lg">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="custom-software">Custom Software Development</SelectItem>
                          <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                          <SelectItem value="cloud-solutions">Cloud Solutions</SelectItem>
                          <SelectItem value="data-analytics">Data Analytics & BI</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity Solutions</SelectItem>
                          <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="enterprise">Enterprise Solutions</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-lg font-light">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                        rows={6}
                        required
                        className="text-lg"
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

            {/* Contact Information */}
            <div className="space-y-10 animate-fade-in-right">
              <div>
                <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
                  <Crown className="w-4 h-4 mr-2" />
                  Get in Touch
                </Badge>
                <h2 className="text-4xl font-light text-slate-900 mb-6 tracking-tight">
                  We're Here to
                  <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    Help You
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  We're here to help you bring your ideas to life. Whether you have a specific project in mind or need
                  consultation on technology solutions, our team is ready to assist you.
                </p>
              </div>

              <div className="space-y-8">
                {contactInfo.map((contact, index) => (
                  <Card
                    key={index}
                    className="p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 shadow-lg relative overflow-hidden"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${contact.gradient}`}></div>
                    <div className="flex items-start space-x-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-3xl flex items-center justify-center text-white shadow-xl`}
                      >
                        <contact.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-xl mb-3">{contact.title}</h3>
                        {contact.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600 font-light text-lg mb-1">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
            >
              <Award className="w-4 h-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
              Common
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              Have questions? Here are some common inquiries we receive from our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 shadow-lg relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${faq.gradient}`}></div>
                <h3 className="font-semibold text-slate-900 text-xl mb-4">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed font-light text-lg">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto space-y-10 animate-fade-in-up">
            <h2 className="text-6xl lg:text-7xl font-light text-white tracking-tight">
              Ready to Start Your
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Digital Journey?
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Let's transform your vision into reality with our premium software development services.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                asChild
              >
                <Link href="/solutions">
                  <Sparkles className="mr-3 h-5 w-5" />
                  Explore Solutions
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:border-amber-400/50"
                asChild
              >
                <Link href="/careers">
                  <Crown className="mr-3 h-5 w-5" />
                  Join Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
