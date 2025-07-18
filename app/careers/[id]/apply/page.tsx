"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle, User, GraduationCap, Briefcase, FileText, Send } from "lucide-react"
import Link from "next/link"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string

  // Education
  highestDegree: string
  fieldOfStudy: string
  university: string
  graduationYear: string
  gpa: string

  // Experience
  currentPosition: string
  currentCompany: string
  yearsExperience: string
  relevantExperience: string

  // Skills (job-specific)
  technicalSkills: string[]
  certifications: string

  // Additional Information
  availableStartDate: string
  salaryExpectation: string
  willingToRelocate: string
  willingToTravel: string
  legalToWork: string
  requireSponsorship: string
  additionalInfo: string
}

export default function JobApplicationPage() {
  const params = useParams()
  const jobId = Number.parseInt(params.id as string)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    highestDegree: "",
    fieldOfStudy: "",
    university: "",
    graduationYear: "",
    gpa: "",
    currentPosition: "",
    currentCompany: "",
    yearsExperience: "",
    relevantExperience: "",
    technicalSkills: [],
    certifications: "",
    availableStartDate: "",
    salaryExpectation: "",
    willingToRelocate: "",
    willingToTravel: "",
    legalToWork: "",
    requireSponsorship: "",
    additionalInfo: "",
  })

  const jobTitles = {
    1: "Software Developer - Oracle Fusion",
    2: "Software Developer - Data Engineering",
  }

  const jobSkills = {
    1: [
      "Oracle Fusion",
      "Oracle EBS",
      "SQL",
      "PL/SQL",
      "Workflows",
      "Security Profiles",
      "Financial Reports",
      "System Integration",
    ],
    2: ["ETL/ELT", "Informatica", "Data Pipelines", "SQL", "Python", "Data Warehousing", "Big Data", "Cloud Platforms"],
  }

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      technicalSkills: prev.technicalSkills.includes(skill)
        ? prev.technicalSkills.filter((s) => s !== skill)
        : [...prev.technicalSkills, skill],
    }))
  }

  const handleSubmit = () => {
    // Here you would typically send the data to your backend
    console.log("Application submitted:", formData)
    setIsSubmitted(true)
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 flex items-center justify-center">
        <Card className="max-w-2xl mx-4 text-center p-12">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-light text-slate-900 mb-6">Application Submitted!</h1>
          <p className="text-xl text-slate-600 font-light mb-8 leading-relaxed">
            Thank you for your interest in the <strong>{jobTitles[jobId as keyof typeof jobTitles]}</strong> position.
            We have received your application and will review it carefully.
          </p>
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">What's Next?</h3>
            <ul className="text-amber-700 text-left space-y-2">
              <li>• Our HR team will review your application within 3-5 business days</li>
              <li>• If selected, you'll receive an email to schedule an initial interview</li>
              <li>• We'll keep you updated throughout the entire process</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
            >
              <Link href="/careers">View Other Positions</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="px-8 py-4 rounded-full bg-transparent">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href={`/careers/${jobId}`}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Job Details
            </Link>
          </Button>

          <div className="text-center mb-8">
            <h1 className="text-4xl font-light text-slate-900 mb-4">
              Apply for{" "}
              <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
                {jobTitles[jobId as keyof typeof jobTitles]}
              </span>
            </h1>
            <p className="text-xl text-slate-600 font-light">
              Step {currentStep} of {totalSteps}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-light">Personal Information</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Street Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Education Background */}
            {currentStep === 2 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-light">Education Background</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="highestDegree">Highest Degree *</Label>
                    <Select
                      value={formData.highestDegree}
                      onValueChange={(value) => handleInputChange("highestDegree", value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select degree" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                        <SelectItem value="associate">Associate Degree</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                    <Input
                      id="fieldOfStudy"
                      value={formData.fieldOfStudy}
                      onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
                      className="mt-2"
                      placeholder="e.g., Computer Science, Engineering"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="university">University/Institution *</Label>
                    <Input
                      id="university"
                      value={formData.university}
                      onChange={(e) => handleInputChange("university", e.target.value)}
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="graduationYear">Graduation Year *</Label>
                    <Input
                      id="graduationYear"
                      type="number"
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                      className="mt-2"
                      min="1980"
                      max="2030"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="gpa">GPA (Optional)</Label>
                    <Input
                      id="gpa"
                      value={formData.gpa}
                      onChange={(e) => handleInputChange("gpa", e.target.value)}
                      className="mt-2"
                      placeholder="e.g., 3.5"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Work Experience */}
            {currentStep === 3 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-light">Work Experience</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="currentPosition">Current/Most Recent Position</Label>
                    <Input
                      id="currentPosition"
                      value={formData.currentPosition}
                      onChange={(e) => handleInputChange("currentPosition", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="currentCompany">Current/Most Recent Company</Label>
                    <Input
                      id="currentCompany"
                      value={formData.currentCompany}
                      onChange={(e) => handleInputChange("currentCompany", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="yearsExperience">Total Years of Experience *</Label>
                    <Select
                      value={formData.yearsExperience}
                      onValueChange={(value) => handleInputChange("yearsExperience", value)}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10+">10+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="relevantExperience">Relevant Experience Description *</Label>
                    <Textarea
                      id="relevantExperience"
                      value={formData.relevantExperience}
                      onChange={(e) => handleInputChange("relevantExperience", e.target.value)}
                      className="mt-2"
                      rows={4}
                      placeholder="Describe your relevant work experience, projects, and achievements..."
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Skills & Qualifications */}
            {currentStep === 4 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-light">Skills & Qualifications</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-medium">Technical Skills (Select all that apply) *</Label>
                    <div className="grid md:grid-cols-2 gap-3 mt-4">
                      {jobSkills[jobId as keyof typeof jobSkills]?.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Checkbox
                            id={skill}
                            checked={formData.technicalSkills.includes(skill)}
                            onCheckedChange={() => handleSkillToggle(skill)}
                          />
                          <Label htmlFor={skill} className="font-normal">
                            {skill}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="certifications">Certifications (Optional)</Label>
                    <Textarea
                      id="certifications"
                      value={formData.certifications}
                      onChange={(e) => handleInputChange("certifications", e.target.value)}
                      className="mt-2"
                      rows={3}
                      placeholder="List any relevant certifications, licenses, or professional credentials..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Additional Information */}
            {currentStep === 5 && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                    <Send className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-light">Additional Information</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="availableStartDate">Available Start Date *</Label>
                      <Input
                        id="availableStartDate"
                        type="date"
                        value={formData.availableStartDate}
                        onChange={(e) => handleInputChange("availableStartDate", e.target.value)}
                        className="mt-2"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="salaryExpectation">Salary Expectation</Label>
                      <Input
                        id="salaryExpectation"
                        value={formData.salaryExpectation}
                        onChange={(e) => handleInputChange("salaryExpectation", e.target.value)}
                        className="mt-2"
                        placeholder="e.g., $150,000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-medium">
                      Are you willing to relocate to client sites within the USA? *
                    </Label>
                    <RadioGroup
                      value={formData.willingToRelocate}
                      onValueChange={(value) => handleInputChange("willingToRelocate", value)}
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="relocate-yes" />
                        <Label htmlFor="relocate-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="relocate-no" />
                        <Label htmlFor="relocate-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Are you willing to travel for work? *</Label>
                    <RadioGroup
                      value={formData.willingToTravel}
                      onValueChange={(value) => handleInputChange("willingToTravel", value)}
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="travel-yes" />
                        <Label htmlFor="travel-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="travel-no" />
                        <Label htmlFor="travel-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">
                      Are you legally authorized to work in the United States? *
                    </Label>
                    <RadioGroup
                      value={formData.legalToWork}
                      onValueChange={(value) => handleInputChange("legalToWork", value)}
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="legal-yes" />
                        <Label htmlFor="legal-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="legal-no" />
                        <Label htmlFor="legal-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-medium">
                      Do you require sponsorship for employment visa status? *
                    </Label>
                    <RadioGroup
                      value={formData.requireSponsorship}
                      onValueChange={(value) => handleInputChange("requireSponsorship", value)}
                      className="mt-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="sponsor-yes" />
                        <Label htmlFor="sponsor-yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="sponsor-no" />
                        <Label htmlFor="sponsor-no">No</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information (Optional)</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                      className="mt-2"
                      rows={4}
                      placeholder="Any additional information you'd like to share..."
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-slate-200">
              <Button variant="outline" onClick={prevStep} disabled={currentStep === 1} className="px-6 bg-transparent">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-6 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 border-0"
                >
                  Next
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-emerald-400 via-teal-500 to-emerald-400 hover:from-emerald-500 hover:via-teal-600 hover:to-emerald-500 text-white font-semibold px-8 rounded-full shadow-xl hover:shadow-emerald-500/25 transition-all duration-500 border-0"
                >
                  Submit Application
                  <Send className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
