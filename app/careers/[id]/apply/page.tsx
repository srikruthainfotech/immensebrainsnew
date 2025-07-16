"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, User, Briefcase, GraduationCap, CheckCircle, ArrowLeft, Send } from "lucide-react"
import Link from "next/link"

interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  requirements: string[]
  benefits: string[]
}

interface ApplicationData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  country: string

  // Professional Information
  currentPosition: string
  currentCompany: string
  experience: string
  expectedSalary: string
  availableStartDate: string
  workAuthorization: string
  willingToRelocate: string

  // Education
  education: string
  university: string
  graduationYear: string
  gpa: string

  // Additional Information
  coverLetter: string
  portfolioUrl: string
  linkedinUrl: string
  githubUrl: string

  // Files
  resume: File | null
  portfolio: File | null

  // Preferences
  remoteWork: boolean
  travelWillingness: string

  // Legal
  backgroundCheck: boolean
  termsAccepted: boolean
}

export default function ApplyPage() {
  const params = useParams()
  const router = useRouter()
  const jobId = Number.parseInt(params.id as string)

  const [job, setJob] = useState<Job | null>(null)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [applicationData, setApplicationData] = useState<ApplicationData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    currentPosition: "",
    currentCompany: "",
    experience: "",
    expectedSalary: "",
    availableStartDate: "",
    workAuthorization: "",
    willingToRelocate: "",
    education: "",
    university: "",
    graduationYear: "",
    gpa: "",
    coverLetter: "",
    portfolioUrl: "",
    linkedinUrl: "",
    githubUrl: "",
    resume: null,
    portfolio: null,
    remoteWork: false,
    travelWillingness: "",
    backgroundCheck: false,
    termsAccepted: false,
  })

  // Mock job data - in a real app, this would come from an API
  useEffect(() => {
    const mockJobs: Job[] = [
      {
        id: 1,
        title: "Senior Full Stack Developer",
        department: "Engineering",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120,000 - $150,000",
        description:
          "We're looking for a senior full stack developer to join our engineering team and help build cutting-edge software solutions.",
        requirements: [
          "5+ years of experience",
          "React/Node.js expertise",
          "Database design skills",
          "Agile methodology",
        ],
        benefits: ["Health insurance", "401k matching", "Flexible hours", "Remote work options"],
      },
      {
        id: 2,
        title: "Mobile App Developer",
        department: "Engineering",
        location: "Remote",
        type: "Full-time",
        salary: "$100,000 - $130,000",
        description:
          "Join our mobile team to develop innovative iOS and Android applications using React Native and Flutter.",
        requirements: [
          "3+ years mobile development",
          "React Native/Flutter",
          "App store deployment",
          "UI/UX understanding",
        ],
        benefits: ["Health insurance", "Stock options", "Learning budget", "Home office setup"],
      },
      // Add more jobs as needed
    ]

    const foundJob = mockJobs.find((j) => j.id === jobId)
    setJob(foundJob || null)
  }, [jobId])

  const totalSteps = 4
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: keyof ApplicationData, value: any) => {
    setApplicationData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (field: "resume" | "portfolio", file: File | null) => {
    setApplicationData((prev) => ({ ...prev, [field]: file }))
  }

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(
          applicationData.firstName &&
          applicationData.lastName &&
          applicationData.email &&
          applicationData.phone
        )
      case 2:
        return !!(applicationData.experience && applicationData.workAuthorization)
      case 3:
        return !!(applicationData.education && applicationData.coverLetter)
      case 4:
        return !!(applicationData.backgroundCheck && applicationData.termsAccepted)
      default:
        return true
    }
  }

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    if (!validateStep(4)) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In a real app, you would send the data to your backend
    console.log("Application submitted:", applicationData)

    setIsSubmitting(false)

    // Redirect to success page or show success message
    alert("Application submitted successfully! We will review your application and get back to you soon.")
    router.push("/careers")
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Not Found</h2>
          <p className="text-gray-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/careers">Back to Careers</Link>
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/careers">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Careers
            </Link>
          </Button>

          <div className="bg-white rounded-2xl p-6 shadow-lg border-0 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Apply for {job.title}</h1>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{job.department}</Badge>
                  <Badge variant="outline">{job.location}</Badge>
                  <Badge variant="outline">{job.type}</Badge>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600">{job.salary}</div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border-0">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Application Progress</h2>
              <span className="text-sm text-gray-600">
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <Progress value={progress} className="h-2 mb-4" />
            <div className="flex justify-between text-sm text-gray-600">
              <span className={currentStep >= 1 ? "text-purple-600 font-medium" : ""}>Personal Info</span>
              <span className={currentStep >= 2 ? "text-purple-600 font-medium" : ""}>Professional</span>
              <span className={currentStep >= 3 ? "text-purple-600 font-medium" : ""}>Education & More</span>
              <span className={currentStep >= 4 ? "text-purple-600 font-medium" : ""}>Review & Submit</span>
            </div>
          </div>
        </div>

        {/* Application Form */}
        <Card className="shadow-lg border-0">
          <CardContent className="p-8">
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Personal Information</h3>
                    <p className="text-gray-600">Tell us about yourself</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={applicationData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={applicationData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={applicationData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={applicationData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={applicationData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    placeholder="123 Main Street"
                  />
                </div>

                <div className="grid md:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={applicationData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      placeholder="San Francisco"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Input
                      id="state"
                      value={applicationData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      placeholder="CA"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode">ZIP Code</Label>
                    <Input
                      id="zipCode"
                      value={applicationData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      placeholder="94102"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select
                      value={applicationData.country}
                      onValueChange={(value) => handleInputChange("country", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Briefcase className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Professional Information</h3>
                    <p className="text-gray-600">Tell us about your work experience</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPosition">Current Position</Label>
                    <Input
                      id="currentPosition"
                      value={applicationData.currentPosition}
                      onChange={(e) => handleInputChange("currentPosition", e.target.value)}
                      placeholder="Senior Developer"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentCompany">Current Company</Label>
                    <Input
                      id="currentCompany"
                      value={applicationData.currentCompany}
                      onChange={(e) => handleInputChange("currentCompany", e.target.value)}
                      placeholder="Tech Corp"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience *</Label>
                  <Select
                    value={applicationData.experience}
                    onValueChange={(value) => handleInputChange("experience", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-1">0-1 years</SelectItem>
                      <SelectItem value="2-3">2-3 years</SelectItem>
                      <SelectItem value="4-5">4-5 years</SelectItem>
                      <SelectItem value="6-10">6-10 years</SelectItem>
                      <SelectItem value="10+">10+ years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="expectedSalary">Expected Salary</Label>
                    <Input
                      id="expectedSalary"
                      value={applicationData.expectedSalary}
                      onChange={(e) => handleInputChange("expectedSalary", e.target.value)}
                      placeholder="$120,000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="availableStartDate">Available Start Date</Label>
                    <Input
                      id="availableStartDate"
                      type="date"
                      value={applicationData.availableStartDate}
                      onChange={(e) => handleInputChange("availableStartDate", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workAuthorization">Work Authorization *</Label>
                  <RadioGroup
                    value={applicationData.workAuthorization}
                    onValueChange={(value) => handleInputChange("workAuthorization", value)}
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
                      <Label htmlFor="visa">Work Visa</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sponsorship" id="sponsorship" />
                      <Label htmlFor="sponsorship">Require Sponsorship</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="willingToRelocate">Willing to Relocate?</Label>
                  <RadioGroup
                    value={applicationData.willingToRelocate}
                    onValueChange={(value) => handleInputChange("willingToRelocate", value)}
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="yes" id="relocate-yes" />
                      <Label htmlFor="relocate-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="no" id="relocate-no" />
                      <Label htmlFor="relocate-no">No</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="maybe" id="relocate-maybe" />
                      <Label htmlFor="relocate-maybe">Maybe</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-4">
                  <Label>Resume Upload *</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Drop your resume here or click to browse</p>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload("resume", e.target.files?.[0] || null)}
                      className="hidden"
                      id="resume-upload"
                    />
                    <Label htmlFor="resume-upload" className="cursor-pointer">
                      <Button variant="outline" type="button">
                        Choose File
                      </Button>
                    </Label>
                    {applicationData.resume && (
                      <p className="text-sm text-green-600 mt-2">
                        <FileText className="h-4 w-4 inline mr-1" />
                        {applicationData.resume.name}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Education & Additional Information */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Education & Additional Information</h3>
                    <p className="text-gray-600">Tell us about your background</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Highest Education Level *</Label>
                  <Select
                    value={applicationData.education}
                    onValueChange={(value) => handleInputChange("education", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select education level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high-school">High School</SelectItem>
                      <SelectItem value="associate">Associate Degree</SelectItem>
                      <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                      <SelectItem value="master">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="university">University/School</Label>
                    <Input
                      id="university"
                      value={applicationData.university}
                      onChange={(e) => handleInputChange("university", e.target.value)}
                      placeholder="Stanford University"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="graduationYear">Graduation Year</Label>
                    <Input
                      id="graduationYear"
                      value={applicationData.graduationYear}
                      onChange={(e) => handleInputChange("graduationYear", e.target.value)}
                      placeholder="2020"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gpa">GPA (Optional)</Label>
                    <Input
                      id="gpa"
                      value={applicationData.gpa}
                      onChange={(e) => handleInputChange("gpa", e.target.value)}
                      placeholder="3.8"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={(e) => handleInputChange("coverLetter", e.target.value)}
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                    rows={6}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                    <Input
                      id="portfolioUrl"
                      value={applicationData.portfolioUrl}
                      onChange={(e) => handleInputChange("portfolioUrl", e.target.value)}
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                    <Input
                      id="linkedinUrl"
                      value={applicationData.linkedinUrl}
                      onChange={(e) => handleInputChange("linkedinUrl", e.target.value)}
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="githubUrl">GitHub Profile</Label>
                    <Input
                      id="githubUrl"
                      value={applicationData.githubUrl}
                      onChange={(e) => handleInputChange("githubUrl", e.target.value)}
                      placeholder="https://github.com/yourusername"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <Label>Portfolio Files (Optional)</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-2">Upload portfolio files (PDF, images, etc.)</p>
                    <Input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png,.zip"
                      onChange={(e) => handleFileUpload("portfolio", e.target.files?.[0] || null)}
                      className="hidden"
                      id="portfolio-upload"
                    />
                    <Label htmlFor="portfolio-upload" className="cursor-pointer">
                      <Button variant="outline" type="button">
                        Choose File
                      </Button>
                    </Label>
                    {applicationData.portfolio && (
                      <p className="text-sm text-green-600 mt-2">
                        <FileText className="h-4 w-4 inline mr-1" />
                        {applicationData.portfolio.name}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="remoteWork"
                      checked={applicationData.remoteWork}
                      onCheckedChange={(checked) => handleInputChange("remoteWork", checked)}
                    />
                    <Label htmlFor="remoteWork">I'm interested in remote work opportunities</Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="travelWillingness">Willingness to Travel</Label>
                    <Select
                      value={applicationData.travelWillingness}
                      onValueChange={(value) => handleInputChange("travelWillingness", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select travel preference" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No travel</SelectItem>
                        <SelectItem value="minimal">Minimal (0-10%)</SelectItem>
                        <SelectItem value="moderate">Moderate (10-25%)</SelectItem>
                        <SelectItem value="frequent">Frequent (25-50%)</SelectItem>
                        <SelectItem value="extensive">Extensive (50%+)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Review & Submit */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Review & Submit</h3>
                    <p className="text-gray-600">Please review your information and submit your application</p>
                  </div>
                </div>

                {/* Application Summary */}
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <h4 className="font-semibold text-gray-900">Application Summary</h4>

                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-700">Name:</span> {applicationData.firstName}{" "}
                      {applicationData.lastName}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Email:</span> {applicationData.email}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Phone:</span> {applicationData.phone}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Experience:</span> {applicationData.experience}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Education:</span> {applicationData.education}
                    </div>
                    <div>
                      <span className="font-medium text-gray-700">Work Authorization:</span>{" "}
                      {applicationData.workAuthorization}
                    </div>
                  </div>

                  {applicationData.resume && (
                    <div className="text-sm">
                      <span className="font-medium text-gray-700">Resume:</span> {applicationData.resume.name}
                    </div>
                  )}
                </div>

                {/* Legal Agreements */}
                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="backgroundCheck"
                      checked={applicationData.backgroundCheck}
                      onCheckedChange={(checked) => handleInputChange("backgroundCheck", checked)}
                      required
                    />
                    <Label htmlFor="backgroundCheck" className="text-sm leading-relaxed">
                      I consent to a background check being conducted as part of the hiring process, if required.
                    </Label>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="termsAccepted"
                      checked={applicationData.termsAccepted}
                      onCheckedChange={(checked) => handleInputChange("termsAccepted", checked)}
                      required
                    />
                    <Label htmlFor="termsAccepted" className="text-sm leading-relaxed">
                      I agree to the{" "}
                      <Link href="/terms" className="text-purple-600 hover:underline">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy" className="text-purple-600 hover:underline">
                        Privacy Policy
                      </Link>
                      . I understand that the information provided in this application is true and complete to the best
                      of my knowledge.
                    </Label>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 mb-2">What happens next?</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• We'll review your application within 3-5 business days</li>
                    <li>• If you're a good fit, we'll contact you for an initial phone screening</li>
                    <li>• Successful candidates will be invited for technical interviews</li>
                    <li>• Final candidates will meet with the team and hiring manager</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-8 border-t">
              <Button
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 1}
                className="flex items-center bg-transparent"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              {currentStep < totalSteps ? (
                <Button
                  onClick={nextStep}
                  disabled={!validateStep(currentStep)}
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                >
                  Next Step
                  <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
                </Button>
              ) : (
                <Button
                  onClick={handleSubmit}
                  disabled={!validateStep(4) || isSubmitting}
                  className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
