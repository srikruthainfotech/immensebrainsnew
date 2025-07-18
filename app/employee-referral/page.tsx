"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Gift, Star, Phone, Mail, MapPin } from "lucide-react"

export default function EmployeeReferralPage() {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerDepartment: "",
    candidateName: "",
    candidateEmail: "",
    candidatePhone: "",
    position: "",
    relationship: "",
    whyRecommend: "",
    candidateResume: null as File | null,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setFormData((prev) => ({ ...prev, candidateResume: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Referral submitted:", formData)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30">
      {/* Print Header - Only visible when printing */}
      <div className="print-header">
        <div className="print-company-info">
          <h1>Immense Brains</h1>
          <h2>Employee Referral Program</h2>
          <div className="print-contact-info">
            <p>📍 123 Innovation Drive, Tech City, TC 12345</p>
            <p>📞 (555) 123-4567 | ✉️ hr@immensebrains.com</p>
            <p>🌐 www.immensebrains.com</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16 print-section">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6 print-hide">
            <Users className="w-4 h-4" />
            Employee Referral Program
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Help Us Find Amazing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-yellow-500"> Talent</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Know someone exceptional? Refer them to join our team and earn rewards while helping us build the future of
            technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Program Overview */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm print-card">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-slate-900 flex items-center gap-3">
                  <Gift className="w-6 h-6 text-amber-600" />
                  Program Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="print-content">
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Our Employee Referral Program is designed to leverage the power of our team's network to find
                    exceptional talent. We believe that our employees are our best ambassadors and know the kind of
                    people who would thrive in our innovative environment.
                  </p>

                  <p className="text-slate-700 leading-relaxed mb-4">
                    When you refer a candidate who gets hired and successfully completes their probationary period,
                    you'll receive a referral bonus as our way of saying thank you for helping us grow our team with
                    quality professionals.
                  </p>

                  <p className="text-slate-700 leading-relaxed">
                    We're always looking for talented individuals across all departments - from software development and
                    engineering to sales, marketing, and operations. If you know someone who shares our values of
                    innovation, excellence, and collaboration, we'd love to meet them.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 print-hide">
                  <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-slate-900 mb-2">Referral Bonus</h4>
                    <p className="text-slate-700 text-sm">Earn up to $2,000 for successful referrals</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-slate-900 mb-2">All Positions</h4>
                    <p className="text-slate-700 text-sm">Refer candidates for any open position</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm print-card">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-slate-900">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="print-content">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-semibold text-sm">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Submit Referral</h4>
                        <p className="text-slate-700">
                          Complete the referral form with candidate details and your recommendation.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-semibold text-sm">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">HR Review</h4>
                        <p className="text-slate-700">
                          Our HR team reviews the referral and contacts the candidate if there's a match.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-semibold text-sm">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Interview Process</h4>
                        <p className="text-slate-700">
                          Candidate goes through our standard interview and evaluation process.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-semibold text-sm">
                        4
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Earn Reward</h4>
                        <p className="text-slate-700">
                          Receive your referral bonus after the candidate completes 90 days of employment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm print-card">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-slate-900">Program Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="print-content">
                  <div className="space-y-4">
                    <p className="text-slate-700 leading-relaxed">
                      <strong>Eligibility:</strong> All full-time employees are eligible to participate in the referral
                      program. Part-time employees and contractors may participate with manager approval.
                    </p>

                    <p className="text-slate-700 leading-relaxed">
                      <strong>Referral Bonus Structure:</strong> Bonus amounts vary by position level and department.
                      Senior-level positions and hard-to-fill roles may qualify for higher bonuses.
                    </p>

                    <p className="text-slate-700 leading-relaxed">
                      <strong>Payment Timeline:</strong> Referral bonuses are paid after the referred candidate
                      successfully completes their 90-day probationary period and receives a satisfactory performance
                      review.
                    </p>

                    <p className="text-slate-700 leading-relaxed">
                      <strong>Multiple Referrals:</strong> If multiple employees refer the same candidate, the bonus
                      will be awarded to the first referrer based on submission timestamp.
                    </p>

                    <p className="text-slate-700 leading-relaxed">
                      <strong>Family Members:</strong> Employees may refer immediate family members, but they are not
                      eligible for referral bonuses for family member hires.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm print-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-900 flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-600" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="print-content">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Bonus Range:</span>
                      <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                        $500 - $2,000
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Payment Timeline:</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        90 Days
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">All Departments:</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Eligible
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Success Rate:</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                        85%
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/80 backdrop-blur-sm print-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-900">Contact HR</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="print-content">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-700">(555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-700">hr@immensebrains.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="text-slate-700">HR Department, Floor 3</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Referral Form */}
        <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-sm print-hide">
          <CardHeader className="pb-8">
            <CardTitle className="text-3xl text-slate-900 text-center">Submit a Referral</CardTitle>
            <CardDescription className="text-center text-lg text-slate-600">
              Help us find your next amazing colleague
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Referrer Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                  Your Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="referrerName" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      id="referrerName"
                      name="referrerName"
                      value={formData.referrerName}
                      onChange={handleInputChange}
                      required
                      className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="referrerEmail" className="block text-sm font-medium text-slate-700 mb-2">
                      Your Email *
                    </label>
                    <Input
                      id="referrerEmail"
                      name="referrerEmail"
                      type="email"
                      value={formData.referrerEmail}
                      onChange={handleInputChange}
                      required
                      className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="referrerDepartment" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Department *
                  </label>
                  <Input
                    id="referrerDepartment"
                    name="referrerDepartment"
                    value={formData.referrerDepartment}
                    onChange={handleInputChange}
                    required
                    className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Candidate Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                  Candidate Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="candidateName" className="block text-sm font-medium text-slate-700 mb-2">
                      Candidate Name *
                    </label>
                    <Input
                      id="candidateName"
                      name="candidateName"
                      value={formData.candidateName}
                      onChange={handleInputChange}
                      required
                      className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="candidateEmail" className="block text-sm font-medium text-slate-700 mb-2">
                      Candidate Email *
                    </label>
                    <Input
                      id="candidateEmail"
                      name="candidateEmail"
                      type="email"
                      value={formData.candidateEmail}
                      onChange={handleInputChange}
                      required
                      className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="candidatePhone" className="block text-sm font-medium text-slate-700 mb-2">
                      Candidate Phone
                    </label>
                    <Input
                      id="candidatePhone"
                      name="candidatePhone"
                      type="tel"
                      value={formData.candidatePhone}
                      onChange={handleInputChange}
                      className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="position" className="block text-sm font-medium text-slate-700 mb-2">
                      Position of Interest *
                    </label>
                    <Input
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-slate-900 border-b border-slate-200 pb-2">
                  Additional Information
                </h3>
                <div>
                  <label htmlFor="relationship" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Relationship to Candidate *
                  </label>
                  <Input
                    id="relationship"
                    name="relationship"
                    value={formData.relationship}
                    onChange={handleInputChange}
                    required
                    placeholder="e.g., Former colleague, Friend, Professional contact"
                    className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="whyRecommend" className="block text-sm font-medium text-slate-700 mb-2">
                    Why do you recommend this candidate? *
                  </label>
                  <Textarea
                    id="whyRecommend"
                    name="whyRecommend"
                    value={formData.whyRecommend}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    placeholder="Please describe the candidate's skills, experience, and why you think they'd be a great fit for our team..."
                    className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="candidateResume" className="block text-sm font-medium text-slate-700 mb-2">
                    Candidate Resume (Optional)
                  </label>
                  <Input
                    id="candidateResume"
                    name="candidateResume"
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="border-slate-300 focus:border-amber-500 focus:ring-amber-500"
                  />
                  <p className="text-sm text-slate-500 mt-1">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Submit Referral
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
