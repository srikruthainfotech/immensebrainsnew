"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"
import Link from "next/link"

const jobTitles = {
  1: "Senior Software Engineer",
  2: "Product Manager",
  3: "Technology Lead",
}

const jobSkills = {
  1: ["React", "Node.js", "TypeScript", "AWS", "JavaScript", "HTML/CSS", "Git", "REST APIs"],
  2: [
    "Product Strategy",
    "Analytics",
    "Agile",
    "User Research",
    "Roadmapping",
    "Stakeholder Management",
    "Data Analysis",
    "Market Research",
  ],
  3: [
    "Java",
    "Spring",
    "Angular",
    "AWS",
    "Jenkins",
    "Agile Scrum",
    "HTML5",
    "CSS",
    "TypeScript",
    "Spring Data JPA",
    "Design Patterns",
    "Testing Frameworks",
  ],
}

interface ApplicationPageProps {
  params: {
    id: string
  }
}

export default function ApplicationPage({ params }: ApplicationPageProps) {
  const router = useRouter()
  const jobId = Number.parseInt(params.id)
  const jobTitle = jobTitles[jobId as keyof typeof jobTitles]
  const skills = jobSkills[jobId as keyof typeof jobSkills] || []

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

    // Professional Information
    currentTitle: "",
    company: "",
    experience: "",
    education: "",
    degree: "",
    university: "",
    graduationYear: "",

    // Skills and Availability
    selectedSkills: [] as string[],
    portfolioUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    availableStart: "",
    salaryExpectation: "",
    workAuthorization: "",
    willingToRelocate: "",

    // Additional Information
    coverLetter: "",
    additionalInfo: "",
    referralSource: "",

    // Agreements
    agreeTerms: false,
    agreeBackground: false,
  })

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedSkills: prev.selectedSkills.includes(skill)
        ? prev.selectedSkills.filter((s) => s !== skill)
        : [...prev.selectedSkills, skill],
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
    // Here you would typically submit the form data to your backend
    console.log("Submitting application:", formData)
    alert("Application submitted successfully! We will review your application and get back to you soon.")
    router.push("/careers")
  }

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.firstName && formData.lastName && formData.email && formData.phone
      case 2:
        return formData.experience && formData.education
      case 3:
        return formData.selectedSkills.length > 0
      case 4:
        return formData.agreeTerms && formData.agreeBackground
      default:
        return false
    }
  }

  if (!jobTitle) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Job Not Found</h2>
            <p className="text-slate-600 mb-4">The job position you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/careers">Back to Careers</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4 mb-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href={`/careers/${jobId}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Job Details
              </Link>
            </Button>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Apply for {jobTitle}</h1>
          <p className="text-slate-600 mt-2">Complete the application form below to apply for this position.</p>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-slate-600 mb-2">
              <span>
                Step {currentStep} of {totalSteps}
              </span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep === 1 && "Personal Information"}
                {currentStep === 2 && "Professional Background"}
                {currentStep === 3 && "Skills & Availability"}
                {currentStep === 4 && "Final Details"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Please provide your basic contact information."}
                {currentStep === 2 && "Tell us about your professional experience and education."}
                {currentStep === 3 && "Select your skills and provide additional professional links."}
                {currentStep === 4 && "Review your information and complete your application."}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      placeholder="Street address"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange("city", e.target.value)}
                        placeholder="City"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => handleInputChange("state", e.target.value)}
                        placeholder="State"
                      />
                    </div>
                    <div>
                      <Label htmlFor="zipCode">ZIP Code</Label>
                      <Input
                        id="zipCode"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        placeholder="12345"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Professional Background */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="currentTitle">Current Job Title</Label>
                      <Input
                        id="currentTitle"
                        value={formData.currentTitle}
                        onChange={(e) => handleInputChange("currentTitle", e.target.value)}
                        placeholder="e.g., Software Engineer"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Current Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Company name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <Select
                      value={formData.experience}
                      onValueChange={(value) => handleInputChange("experience", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
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
                    <Label htmlFor="education">Education Level *</Label>
                    <Select value={formData.education} onValueChange={(value) => handleInputChange("education", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="associate">Associate Degree</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="degree">Degree/Field of Study</Label>
                      <Input
                        id="degree"
                        value={formData.degree}
                        onChange={(e) => handleInputChange("degree", e.target.value)}
                        placeholder="e.g., Computer Science"
                      />
                    </div>
                    <div>
                      <Label htmlFor="university">University/Institution</Label>
                      <Input
                        id="university"
                        value={formData.university}
                        onChange={(e) => handleInputChange("university", e.target.value)}
                        placeholder="University name"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Input
                      id="graduationYear"
                      value={formData.graduationYear}
                      onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                      placeholder="e.g., 2020"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Skills & Availability */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold">Required Skills *</Label>
                    <p className="text-sm text-slate-600 mb-3">Select the skills you have experience with:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {skills.map((skill) => (
                        <div key={skill} className="flex items-center space-x-2">
                          <Checkbox
                            id={skill}
                            checked={formData.selectedSkills.includes(skill)}
                            onCheckedChange={() => handleSkillToggle(skill)}
                          />
                          <Label htmlFor={skill} className="text-sm font-normal cursor-pointer">
                            {skill}
                          </Label>
                        </div>
                      ))}
                    </div>
                    {formData.selectedSkills.length > 0 && (
                      <div className="mt-3">
                        <p className="text-sm text-slate-600 mb-2">Selected skills:</p>
                        <div className="flex flex-wrap gap-2">
                          {formData.selectedSkills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                      <Input
                        id="portfolioUrl"
                        value={formData.portfolioUrl}
                        onChange={(e) => handleInputChange("portfolioUrl", e.target.value)}
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                      <Input
                        id="linkedinUrl"
                        value={formData.linkedinUrl}
                        onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="githubUrl">GitHub Profile</Label>
                    <Input
                      id="githubUrl"
                      value={formData.githubUrl}
                      onChange={(e) => handleInputChange("githubUrl", e.target.value)}
                      placeholder="https://github.com/yourusername"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="availableStart">Available Start Date</Label>
                      <Input
                        id="availableStart"
                        type="date"
                        value={formData.availableStart}
                        onChange={(e) => handleInputChange("availableStart", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="salaryExpectation">Salary Expectation</Label>
                      <Input
                        id="salaryExpectation"
                        value={formData.salaryExpectation}
                        onChange={(e) => handleInputChange("salaryExpectation", e.target.value)}
                        placeholder="e.g., $120,000"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-base font-semibold">Work Authorization</Label>
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
                        <RadioGroupItem value="permanent-resident" id="permanent-resident" />
                        <Label htmlFor="permanent-resident">Permanent Resident</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="visa" id="visa" />
                        <Label htmlFor="visa">Work Visa</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" />
                        <Label htmlFor="other">Other</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {jobId === 3 && (
                    <div>
                      <Label className="text-base font-semibold">Willing to Travel/Relocate</Label>
                      <p className="text-sm text-slate-600 mb-2">
                        This position requires travel to various client sites throughout the USA.
                      </p>
                      <RadioGroup
                        value={formData.willingToRelocate}
                        onValueChange={(value) => handleInputChange("willingToRelocate", value)}
                        className="mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="relocate-yes" />
                          <Label htmlFor="relocate-yes">Yes, I am willing to travel/relocate</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="relocate-no" />
                          <Label htmlFor="relocate-no">No, I prefer to work locally</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                </div>
              )}

              {/* Step 4: Final Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter</Label>
                    <Textarea
                      id="coverLetter"
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                      placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      rows={6}
                    />
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                      placeholder="Any additional information you'd like to share..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="referralSource">How did you hear about us?</Label>
                    <Select
                      value={formData.referralSource}
                      onValueChange={(value) => handleInputChange("referralSource", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Company Website</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="job-board">Job Board</SelectItem>
                        <SelectItem value="referral">Employee Referral</SelectItem>
                        <SelectItem value="social-media">Social Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) => handleInputChange("agreeTerms", checked)}
                      />
                      <Label htmlFor="agreeTerms" className="text-sm leading-relaxed">
                        I agree to the terms and conditions and privacy policy. I understand that my information will be
                        used to process my application and communicate regarding this position.
                      </Label>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreeBackground"
                        checked={formData.agreeBackground}
                        onCheckedChange={(checked) => handleInputChange("agreeBackground", checked)}
                      />
                      <Label htmlFor="agreeBackground" className="text-sm leading-relaxed">
                        I consent to background checks and verification of the information provided in this application
                        as part of the hiring process.
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button onClick={handleNext} disabled={!isStepValid()}>
                    Next
                  </Button>
                ) : (
                  <Button onClick={handleSubmit} disabled={!isStepValid()} className="bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Submit Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
