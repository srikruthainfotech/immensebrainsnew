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
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, User, Mail, GraduationCap, Briefcase, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function JobApplicationPage() {
  const params = useParams()
  const jobId = params.id as string
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Education
    education: "",
    degree: "",
    fieldOfStudy: "",
    graduationYear: "",
    gpa: "",

    // Experience
    currentPosition: "",
    currentCompany: "",
    yearsExperience: "",
    relevantExperience: "",

    // Skills & Qualifications
    oracleExperience: "",
    etlExperience: "",
    travelWillingness: "",
    relocationWillingness: "",

    // Additional Information
    coverLetter: "",
    additionalInfo: "",

    // Legal
    workAuthorization: "",
    backgroundCheck: false,
    drugTest: false,
  })

  const totalSteps = 5
  const progress = (currentStep / totalSteps) * 100

  const jobTitles = {
    "1": "Software Developer - Oracle Fusion",
    "2": "Software Developer - Data Engineering",
  }

  const jobTitle = jobTitles[jobId as keyof typeof jobTitles] || "Software Developer"

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    setCurrentStep(totalSteps + 1) // Show success page
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-slate-900 mb-2">Personal Information</h3>
              <p className="text-slate-600 font-light">Let's start with your basic information</p>
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
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
            </div>

            <div>
              <Label htmlFor="address">Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="mt-2"
                required
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
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
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <GraduationCap className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-slate-900 mb-2">Education Background</h3>
              <p className="text-slate-600 font-light">Tell us about your educational qualifications</p>
            </div>

            <div>
              <Label htmlFor="education">Highest Level of Education *</Label>
              <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select your education level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                  <SelectItem value="masters">Master's Degree</SelectItem>
                  <SelectItem value="phd">PhD</SelectItem>
                  <SelectItem value="associate">Associate Degree</SelectItem>
                  <SelectItem value="diploma">High School Diploma</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="degree">Degree Title *</Label>
                <Input
                  id="degree"
                  value={formData.degree}
                  onChange={(e) => handleInputChange("degree", e.target.value)}
                  className="mt-2"
                  placeholder="e.g., Bachelor of Science"
                  required
                />
              </div>
              <div>
                <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                <Input
                  id="fieldOfStudy"
                  value={formData.fieldOfStudy}
                  onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
                  className="mt-2"
                  placeholder="e.g., Computer Science"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="graduationYear">Graduation Year *</Label>
                <Input
                  id="graduationYear"
                  value={formData.graduationYear}
                  onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                  className="mt-2"
                  placeholder="e.g., 2020"
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
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Briefcase className="h-12 w-12 text-violet-500 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-slate-900 mb-2">Work Experience</h3>
              <p className="text-slate-600 font-light">Share your professional background</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="currentPosition">Current/Most Recent Position</Label>
                <Input
                  id="currentPosition"
                  value={formData.currentPosition}
                  onChange={(e) => handleInputChange("currentPosition", e.target.value)}
                  className="mt-2"
                  placeholder="e.g., Software Developer"
                />
              </div>
              <div>
                <Label htmlFor="currentCompany">Current/Most Recent Company</Label>
                <Input
                  id="currentCompany"
                  value={formData.currentCompany}
                  onChange={(e) => handleInputChange("currentCompany", e.target.value)}
                  className="mt-2"
                  placeholder="e.g., Tech Corp"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="yearsExperience">Total Years of Experience *</Label>
              <Select
                value={formData.yearsExperience}
                onValueChange={(value) => handleInputChange("yearsExperience", value)}
              >
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select years of experience" />
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

            <div>
              <Label htmlFor="relevantExperience">Relevant Experience Summary *</Label>
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
        )

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <FileText className="h-12 w-12 text-rose-500 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-slate-900 mb-2">Skills & Qualifications</h3>
              <p className="text-slate-600 font-light">Tell us about your technical skills and qualifications</p>
            </div>

            {jobId === "1" && (
              <div>
                <Label htmlFor="oracleExperience">Oracle Fusion/EBS Experience *</Label>
                <Select
                  value={formData.oracleExperience}
                  onValueChange={(value) => handleInputChange("oracleExperience", value)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your Oracle experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6months">6 months (Required minimum)</SelectItem>
                    <SelectItem value="1year">1 year</SelectItem>
                    <SelectItem value="2years">2 years</SelectItem>
                    <SelectItem value="3years">3+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            {jobId === "2" && (
              <div>
                <Label htmlFor="etlExperience">ETL/Informatica Experience *</Label>
                <Select
                  value={formData.etlExperience}
                  onValueChange={(value) => handleInputChange("etlExperience", value)}
                >
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select your ETL/Informatica experience level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6months">6 months (Required minimum)</SelectItem>
                    <SelectItem value="1year">1 year</SelectItem>
                    <SelectItem value="2years">2 years</SelectItem>
                    <SelectItem value="3years">3+ years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}

            <div>
              <Label>Travel Willingness *</Label>
              <RadioGroup
                value={formData.travelWillingness}
                onValueChange={(value) => handleInputChange("travelWillingness", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="travel-yes" />
                  <Label htmlFor="travel-yes">Yes, I am willing to travel to client sites within the USA</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="travel-no" />
                  <Label htmlFor="travel-no">No, I am not willing to travel</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label>Relocation Willingness *</Label>
              <RadioGroup
                value={formData.relocationWillingness}
                onValueChange={(value) => handleInputChange("relocationWillingness", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="relocate-yes" />
                  <Label htmlFor="relocate-yes">Yes, I am willing to relocate to client sites within the USA</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="relocate-no" />
                  <Label htmlFor="relocate-no">No, I am not willing to relocate</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Mail className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-slate-900 mb-2">Additional Information</h3>
              <p className="text-slate-600 font-light">Final details and legal requirements</p>
            </div>

            <div>
              <Label htmlFor="coverLetter">Cover Letter</Label>
              <Textarea
                id="coverLetter"
                value={formData.coverLetter}
                onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                className="mt-2"
                rows={6}
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              />
            </div>

            <div>
              <Label htmlFor="additionalInfo">Additional Information</Label>
              <Textarea
                id="additionalInfo"
                value={formData.additionalInfo}
                onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                className="mt-2"
                rows={3}
                placeholder="Any additional information you'd like to share..."
              />
            </div>

            <div>
              <Label>Work Authorization *</Label>
              <RadioGroup
                value={formData.workAuthorization}
                onValueChange={(value) => handleInputChange("workAuthorization", value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="citizen" id="citizen" />
                  <Label htmlFor="citizen">US Citizen</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="permanent" id="permanent" />
                  <Label htmlFor="permanent">Permanent Resident</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="visa" id="visa" />
                  <Label htmlFor="visa">Work Visa Holder</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other (requires sponsorship)</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="backgroundCheck"
                  checked={formData.backgroundCheck}
                  onCheckedChange={(checked) => handleInputChange("backgroundCheck", checked as boolean)}
                />
                <Label htmlFor="backgroundCheck" className="text-sm">
                  I consent to a background check if offered the position *
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="drugTest"
                  checked={formData.drugTest}
                  onCheckedChange={(checked) => handleInputChange("drugTest", checked as boolean)}
                />
                <Label htmlFor="drugTest" className="text-sm">
                  I consent to a drug test if offered the position *
                </Label>
              </div>
            </div>
          </div>
        )

      default:
        return (
          <div className="text-center space-y-6">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
            <h3 className="text-3xl font-light text-slate-900">Application Submitted!</h3>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">
              Thank you for your interest in the {jobTitle} position. We have received your application and will review
              it carefully.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 max-w-2xl mx-auto">
              <h4 className="font-semibold text-amber-800 mb-2">Next Steps:</h4>
              <ul className="text-amber-700 text-left space-y-2">
                <li>• Our HR team will review your application within 5-7 business days</li>
                <li>• If you're a good fit, we'll contact you for an initial phone screening</li>
                <li>• You can also send your resume directly to HR@immensebrains.com</li>
                <li>• Questions? Contact us through our website or call our office</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/careers">View Other Positions</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">Return to Homepage</Link>
              </Button>
            </div>
          </div>
        )
    }
  }

  if (currentStep > totalSteps) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-12">{renderStep()}</CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6">
          <Link href={`/careers/${jobId}`}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Job Details
          </Link>
        </Button>

        {/* Header */}
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 text-amber-600 border-amber-200 bg-amber-50 px-4 py-2">
            <Briefcase className="w-4 h-4 mr-2" />
            Job Application
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-4">
            Apply for
            <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
              {jobTitle}
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-light">
            Step {currentStep} of {totalSteps}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <Progress value={progress} className="h-2" />
        </div>

        {/* Application Form */}
        <Card className="max-w-4xl mx-auto shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8 lg:p-12">
            {renderStep()}

            {/* Navigation Buttons */}
            {currentStep <= totalSteps && (
              <div className="flex justify-between mt-12 pt-8 border-t border-slate-200">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="bg-transparent"
                >
                  Previous
                </Button>

                {currentStep === totalSteps ? (
                  <Button
                    onClick={handleSubmit}
                    className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-8 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                  >
                    Submit Application
                  </Button>
                ) : (
                  <Button
                    onClick={handleNext}
                    className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-8 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                  >
                    Next Step
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card className="max-w-4xl mx-auto mt-8 shadow-xl border-0 bg-gradient-to-br from-slate-50 to-slate-100">
          <CardContent className="p-6">
            <div className="text-center">
              <h3 className="font-semibold text-slate-900 mb-2">Need Help?</h3>
              <p className="text-slate-600 font-light mb-4">
                If you have any questions about this application or the position, feel free to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="bg-transparent" asChild>
                  <Link href="/contact">Contact HR</Link>
                </Button>
                <Button variant="outline" className="bg-transparent">
                  <Mail className="h-4 w-4 mr-2" />
                  HR@immensebrains.com
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
