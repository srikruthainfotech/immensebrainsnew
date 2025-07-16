"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  DollarSign,
  UserPlus,
  Mail,
  Calendar,
  CheckCircle,
  Sparkles,
  Award,
  Gift,
  Target,
  FileText,
  Send,
  MapPin,
} from "lucide-react"
import Link from "next/link"

export default function EmployeeReferralPage() {
  const [formData, setFormData] = useState({
    employeeName: "",
    employeeId: "",
    employeeEmail: "",
    candidateName: "",
    candidateEmail: "",
    candidatePhone: "",
    position: "",
    relationship: "",
    comments: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Referral submitted:", formData)
    alert("Thank you for your referral! HR will review the candidate and contact you directly.")
    setFormData({
      employeeName: "",
      employeeId: "",
      employeeEmail: "",
      candidateName: "",
      candidateEmail: "",
      candidatePhone: "",
      position: "",
      relationship: "",
      comments: "",
    })
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const programHighlights = [
    {
      icon: DollarSign,
      title: "$1,000 Bonus",
      description: "Receive a special bonus when your referral stays for 90+ days",
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      icon: Target,
      title: "No Limits",
      description: "Unlimited referrals and bonuses - refer as many candidates as you want",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: Users,
      title: "All Employees Eligible",
      description: "Every current Immense Brains employee can participate",
      gradient: "from-violet-400 to-purple-500",
    },
    {
      icon: CheckCircle,
      title: "Simple Process",
      description: "Easy referral process through HR - we handle the rest",
      gradient: "from-rose-400 to-pink-500",
    },
  ]

  const steps = [
    {
      step: "01",
      title: "Find a Qualified Candidate",
      description: "Identify someone who would be a great fit for our open positions",
      icon: UserPlus,
    },
    {
      step: "02",
      title: "Submit Referral",
      description: "Contact HR directly or use our referral form with candidate details",
      icon: FileText,
    },
    {
      step: "03",
      title: "Candidate Applies",
      description: "The candidate applies through our standard hiring process",
      icon: Send,
    },
    {
      step: "04",
      title: "Get Your Bonus",
      description: "Receive $1,000 bonus after the new hire stays for 90+ days",
      icon: Gift,
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
              <Users className="w-4 h-4 mr-2" />
              Employee Referral Program
            </Badge>
            <h1 className="text-6xl lg:text-8xl font-light text-white leading-tight tracking-tight mb-8">
              Help Us Find
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Exceptional Talent
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
              Join our Employee Referral Program and earn rewards while helping us build an even stronger team of
              talented professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              Program Overview
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight">
              Immense Brains LLC
              <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Employee Referral Program
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Our Employee Referral Program is a recruiting tool designed to encourage Immense Brains LLC employees to
              refer qualified candidates to fill open positions at our company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programHighlights.map((highlight, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 animate-fade-in-up shadow-lg relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${highlight.gradient}`}></div>
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${highlight.gradient} flex items-center justify-center text-white mb-6 mx-auto shadow-xl relative`}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                  <highlight.icon className="h-10 w-10 relative z-10" />
                </div>
                <h3 className="font-semibold text-slate-900 text-xl mb-4">{highlight.title}</h3>
                <p className="text-slate-600 text-base font-light leading-relaxed">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility & Requirements */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 animate-fade-in-left">
              <div>
                <Badge
                  variant="outline"
                  className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Eligibility
                </Badge>
                <h2 className="text-5xl font-light text-white mb-8 tracking-tight">
                  Program
                  <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                    Requirements
                  </span>
                </h2>
              </div>

              <div className="space-y-8">
                <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <h3 className="text-2xl font-light text-slate-900 mb-6">Eligibility Criteria</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 font-light">
                        Current employees of Immense Brains LLC are eligible to make referrals
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 font-light">
                        In case of multiple referrals, the first employee to submit will be recognized
                      </p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-slate-600 font-light">
                        Referred candidate must not be a current employee of the company
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                  <h3 className="text-2xl font-light text-slate-900 mb-6">Incentives Offered</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold text-lg mb-2">$1,000 Special Bonus</p>
                        <p className="text-slate-600 font-light">
                          When your referral stays with the company for 90+ days
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold text-lg mb-2">No Limits</p>
                        <p className="text-slate-600 font-light">Unlimited referrals and bonuses you can receive</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="space-y-10 animate-fade-in-right">
              <div>
                <Badge
                  variant="outline"
                  className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  How It Works
                </Badge>
                <h2 className="text-5xl font-light text-white mb-8 tracking-tight">
                  Referral
                  <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                    Process
                  </span>
                </h2>
              </div>

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600 font-light leading-relaxed">{step.description}</p>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
                <Send className="w-4 h-4 mr-2" />
                Submit Referral
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight">
                Refer a
                <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  Qualified Candidate
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
                Use the form below to submit your referral, or contact HR directly at HR@immensebrains.com
              </p>
            </div>

            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="pb-8 pt-10">
                <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white mb-6 shadow-xl mx-auto">
                  <UserPlus className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl font-light text-center">Employee Referral Form</CardTitle>
                <CardDescription className="text-lg font-light text-center">
                  Please provide complete information about yourself and the candidate you're referring.
                </CardDescription>
              </CardHeader>
              <CardContent className="px-10 pb-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Employee Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-slate-900 border-b border-slate-200 pb-4">
                      Your Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="employeeName" className="text-lg font-light">
                          Your Full Name *
                        </Label>
                        <Input
                          id="employeeName"
                          value={formData.employeeName}
                          onChange={(e) => handleChange("employeeName", e.target.value)}
                          placeholder="John Doe"
                          required
                          className="h-12 text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="employeeId" className="text-lg font-light">
                          Employee ID *
                        </Label>
                        <Input
                          id="employeeId"
                          value={formData.employeeId}
                          onChange={(e) => handleChange("employeeId", e.target.value)}
                          placeholder="EMP001"
                          required
                          className="h-12 text-lg"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="employeeEmail" className="text-lg font-light">
                        Your Email Address *
                      </Label>
                      <Input
                        id="employeeEmail"
                        type="email"
                        value={formData.employeeEmail}
                        onChange={(e) => handleChange("employeeEmail", e.target.value)}
                        placeholder="john.doe@immensebrains.com"
                        required
                        className="h-12 text-lg"
                      />
                    </div>
                  </div>

                  {/* Candidate Information */}
                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-slate-900 border-b border-slate-200 pb-4">
                      Candidate Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="candidateName" className="text-lg font-light">
                          Candidate Full Name *
                        </Label>
                        <Input
                          id="candidateName"
                          value={formData.candidateName}
                          onChange={(e) => handleChange("candidateName", e.target.value)}
                          placeholder="Jane Smith"
                          required
                          className="h-12 text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="candidateEmail" className="text-lg font-light">
                          Candidate Email *
                        </Label>
                        <Input
                          id="candidateEmail"
                          type="email"
                          value={formData.candidateEmail}
                          onChange={(e) => handleChange("candidateEmail", e.target.value)}
                          placeholder="jane.smith@email.com"
                          required
                          className="h-12 text-lg"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="candidatePhone" className="text-lg font-light">
                          Candidate Phone
                        </Label>
                        <Input
                          id="candidatePhone"
                          type="tel"
                          value={formData.candidatePhone}
                          onChange={(e) => handleChange("candidatePhone", e.target.value)}
                          placeholder="+1 (555) 123-4567"
                          className="h-12 text-lg"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="position" className="text-lg font-light">
                          Position Referring For *
                        </Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => handleChange("position", e.target.value)}
                          placeholder="Senior Developer"
                          required
                          className="h-12 text-lg"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="relationship" className="text-lg font-light">
                        Your Relationship to Candidate
                      </Label>
                      <Input
                        id="relationship"
                        value={formData.relationship}
                        onChange={(e) => handleChange("relationship", e.target.value)}
                        placeholder="Former colleague, friend, etc."
                        className="h-12 text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="comments" className="text-lg font-light">
                        Additional Comments
                      </Label>
                      <Textarea
                        id="comments"
                        value={formData.comments}
                        onChange={(e) => handleChange("comments", e.target.value)}
                        placeholder="Why do you think this candidate would be a great fit for our company?"
                        rows={4}
                        className="text-lg"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold py-4 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                  >
                    <Send className="mr-3 h-5 w-5" />
                    Submit Referral
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <Badge
                variant="outline"
                className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
              >
                <FileText className="w-4 h-4 mr-2" />
                Important Information
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
                Program
                <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Details & Contact
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <h3 className="text-2xl font-light text-slate-900 mb-6">Referral Procedure</h3>
                <div className="space-y-4 text-slate-600 font-light">
                  <p>• Candidates can be referred to any open position by contacting HR directly</p>
                  <p>• If the candidate is offered and accepts the position, HR will contact the referring employee</p>
                  <p>• Upon meeting requirements, apply for referral fees by providing the candidate name</p>
                  <p>
                    • Current job postings can be found at{" "}
                    <Link href="/careers" className="text-amber-600 hover:underline">
                      www.immensebrains.com/careers
                    </Link>
                  </p>
                </div>
              </Card>

              <Card className="p-8 bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <h3 className="text-2xl font-light text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold">HR Department</p>
                      <p className="text-slate-600 font-light">HR@immensebrains.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold">Date of Posting</p>
                      <p className="text-slate-600 font-light">June 26th, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-slate-900 font-semibold">Office Location</p>
                      <p className="text-slate-600 font-light">
                        6760 Corporate Drive, Suite 100, Colorado Springs, CO 80919
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
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
              Questions About the
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Referral Program?
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Contact our HR department directly for any questions about the Employee Referral Program.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                asChild
              >
                <Link href="mailto:HR@immensebrains.com">
                  <Mail className="mr-3 h-5 w-5" />
                  Contact HR
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:border-amber-400/50"
                asChild
              >
                <Link href="/careers">
                  <Sparkles className="mr-3 h-5 w-5" />
                  View Open Positions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
