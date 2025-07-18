"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, DollarSign, Users, ArrowLeft, Briefcase, GraduationCap, Award, Building } from "lucide-react"
import Link from "next/link"

interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  fullDescription: string[]
  requirements: string[]
  benefits: string[]
  postedDate: string
  gradient: string
  accent: string
  openings: number
  duties: string[]
  education: string[]
  experience: string[]
}

export default function JobDetailsPage() {
  const params = useParams()
  const jobId = Number.parseInt(params.id as string)
  const [job, setJob] = useState<Job | null>(null)

  useEffect(() => {
    // Real job data from the posting notice - plain text format with paragraphs
    const realJobs: Job[] = [
      {
        id: 1,
        title: "Software Developer - Oracle Fusion",
        department: "Engineering",
        location: "Colorado Springs, CO",
        type: "Full-time",
        salary: "$153,733.00",
        description:
          "Provide day-to-day support for Oracle Fusion applications, including financials, procurement, HCM, and supply chain modules. Work with Oracle Fusion systems and ensure smooth business operations.",
        fullDescription: [
          "IMMENSE BRAINS LLC has an opening for the position of Software Developer - Oracle Fusion (Job Code: IB-SD-OF-001) at 6760 Corporate Drive, Suite 100, Colorado Springs, CO 80919.",
          "JOB DUTIES: Provide day-to-day support for Oracle Fusion applications, including financials, procurement, HCM, and supply chain modules. Identify, analyze, and resolve issues within Oracle Fusion systems. Perform configuration tasks including workflows, roles, security profiles. Manage and validate data flows between Oracle Fusion and connected systems. Develop and run custom financial reports based on business needs. Troubleshoot integrations between Oracle Fusion and third-party applications.",
          "REQUIREMENTS: Master's degree in Computer Science/IT/IS/Engineering/Business or related field with 6 months experience in the job offered or as IT Consultant/Analyst/Engineer/Programmer/Developer. Alternatively, Bachelor's degree in Computer Science/IT/IS/Engineering/Business or related field plus 5 years of progressive work experience in the job offered or as IT Consultant/Analyst/Engineer/Programmer/Developer. Must have 6 months experience working with Oracle Fusion or Oracle EBS. Travel and/or relocation to unanticipated client sites within USA required. International travel is not required.",
          "SALARY: $153,733.00/year, 40 hours/week.",
          "TO APPLY: Send resume to HR@immensebrains.com",
          "Posted by: CEO Sai Nirukurti",
          "Date: June 26th",
        ],
        requirements: [
          "Master's degree in Computer Science/IT/IS/Engineering/Business or related field with 6 months experience",
          "OR Bachelor's degree + 5 years progressive work experience",
          "6 months experience with Oracle Fusion or Oracle EBS required",
          "Travel/relocation to client sites throughout USA required",
        ],
        benefits: [
          "$153,733.00/year salary",
          "Full-time 40 hours/week",
          "Client site experience",
          "Professional development",
        ],
        postedDate: "June 26th",
        gradient: "from-amber-400 to-yellow-500",
        accent: "border-amber-200",
        openings: 3,
        duties: [
          "Provide day-to-day support for Oracle Fusion applications (financials, procurement, HCM, supply chain)",
          "Identify, analyze, and resolve issues within Oracle Fusion systems",
          "Perform configuration tasks including workflows, roles, security profiles",
          "Manage and validate data flows between Oracle Fusion and connected systems",
          "Develop and run custom financial reports based on business needs",
          "Troubleshoot integrations between Oracle Fusion and third-party applications",
        ],
        education: [
          "Master's degree in Computer Science/IT/IS/Engineering/Business or related field with 6 months experience",
          "OR Bachelor's degree in Computer Science/IT/IS/Engineering/Business or related field plus 5 years progressive work experience",
        ],
        experience: [
          "6 months experience working with Oracle Fusion or Oracle EBS required",
          "Travel and/or relocation to unanticipated client sites within USA required",
          "International travel is not required",
        ],
      },
      {
        id: 2,
        title: "Software Developer - Data Engineering",
        department: "Engineering",
        location: "Colorado Springs, CO",
        type: "Full-time",
        salary: "$145,309.00",
        description:
          "Design, build and manage scalable data systems and pipelines to ensure data is accessible, reliable and usable across organizations. Focus on ETL/ELT processes and data infrastructure.",
        fullDescription: [
          "IMMENSE BRAINS LLC has an opening for the position of Software Developer - Data Engineering (Job Code: IB-SD-DE-002) at 6760 Corporate Drive, Suite 100, Colorado Springs, CO 80919.",
          "JOB DUTIES: Design, build and manage scalable data systems and pipelines to ensure data is accessible, reliable and usable across organizations. Design and implement ETL/ELT pipelines from various sources to target systems. Build and automate workflows for batch and real-time data processing. Design and manage scalable, cost-efficient storage solutions. Implement data backup, replication, and disaster recovery strategies. Process, cleanse, and transform raw data into meaningful formats. Orchestrate complex workflows combining different data services. Ensure secure data in transit and at rest with encryption and access control.",
          "REQUIREMENTS: Master's degree in Computer Science/IT/IS/Engineering or closely related field with 6 months experience in the job offered or as IT Consultant/Analyst/Engineer/Programmer/Developer/Data Engineer. Must have 6 months experience working with ETL or Informatica. Travel and/or relocation to unanticipated client sites within USA required. International travel is not required.",
          "SALARY: $145,309.00/year, 40 hours/week.",
          "TO APPLY: Send resume to HR@immensebrains.com",
          "Posted by: CEO Sai Nirukurti",
          "Date: June 26th",
        ],
        requirements: [
          "Master's degree in Computer Science/IT/IS/Engineering or closely related field",
          "6 months experience in job offered or as IT Consultant/Analyst/Engineer/Programmer/Developer/Data Engineer",
          "6 months experience with ETL or Informatica required",
          "Travel/relocation to client sites throughout USA required",
        ],
        benefits: [
          "$145,309.00/year salary",
          "Full-time 40 hours/week",
          "Data engineering expertise",
          "Client site experience",
        ],
        postedDate: "June 26th",
        gradient: "from-emerald-400 to-teal-500",
        accent: "border-emerald-200",
        openings: 3,
        duties: [
          "Design, build and manage scalable data systems and pipelines",
          "Design and implement ETL/ELT pipelines from various sources to target systems",
          "Build and automate workflows for batch and real-time data processing",
          "Design and manage scalable, cost-efficient storage solutions",
          "Implement data backup, replication, and disaster recovery strategies",
          "Process, cleanse, and transform raw data into meaningful formats",
          "Orchestrate complex workflows combining different data services",
          "Ensure secure data in transit and at rest with encryption and access control",
        ],
        education: [
          "Master's degree in Computer Science/IT/IS/Engineering or closely related field with 6 months experience in the job offered or as IT Consultant/Analyst/Engineer/Programmer/Developer/Data Engineer",
        ],
        experience: [
          "6 months experience working with ETL or Informatica required",
          "Travel and/or relocation to unanticipated client sites within USA required",
          "International travel is not required",
        ],
      },
    ]

    const foundJob = realJobs.find((j) => j.id === jobId)
    setJob(foundJob || null)
  }, [jobId])

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pt-20 flex items-center justify-center print:pt-0 print:bg-white">
        <Card className="p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Job Not Found</h2>
          <p className="text-slate-600 mb-6">The job you're looking for doesn't exist or has been removed.</p>
          <Button asChild className="print:hidden">
            <Link href="/careers">Back to Careers</Link>
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 print:pt-0 print:bg-white">
      <div className="container mx-auto px-4 py-8 print:px-0 print:py-4">
        {/* Back Button */}
        <Button variant="ghost" asChild className="mb-6 print:hidden">
          <Link href="/careers">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Careers
          </Link>
        </Button>

        {/* Job Header */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-black rounded-3xl p-8 lg:p-12 mb-8 text-white relative overflow-hidden print:bg-white print:text-black print:border print:border-gray-300 print:rounded-none print:p-6 print:mb-4">
          <div className="absolute inset-0 overflow-hidden print:hidden">
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${job.gradient} flex items-center justify-center shadow-xl print:bg-gray-200 print:shadow-none`}
                  >
                    <Briefcase className="h-8 w-8 text-white print:text-black" />
                  </div>
                  <div>
                    <h1 className="text-4xl lg:text-5xl font-light mb-2 print:text-3xl print:text-black">
                      {job.title}
                    </h1>
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-white/20 text-white border-white/30 print:bg-gray-100 print:text-black print:border-gray-300">
                        {job.department}
                      </Badge>
                      <Badge className="bg-white/20 text-white border-white/30 print:bg-gray-100 print:text-black print:border-gray-300">
                        {job.openings} Openings
                      </Badge>
                      <Badge className="bg-white/20 text-white border-white/30 print:bg-gray-100 print:text-black print:border-gray-300">
                        Posted {job.postedDate}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mt-8 print:grid-cols-1 print:gap-2 print:mt-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-amber-300 print:text-black" />
                    <span className="font-light print:text-black">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-amber-300 print:text-black" />
                    <span className="font-light print:text-black">{job.type} - 40 hours/week</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-5 w-5 text-amber-300 print:text-black" />
                    <span className="font-light print:text-black">{job.salary}/year</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 print:hidden">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                  asChild
                >
                  <Link href={`/careers/${job.id}/apply`}>Apply Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 print:grid-cols-1 print:gap-4">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8 print:col-span-1 print:space-y-4">
            {/* Full Job Description with Paragraphs */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm print:shadow-none print:border print:border-gray-300 print:bg-white print:break-inside-avoid">
              <CardHeader className="print:pb-2">
                <CardTitle className="text-2xl font-light flex items-center gap-3 print:text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center print:bg-gray-200">
                    <Briefcase className="h-5 w-5 text-white print:text-black" />
                  </div>
                  Complete Job Posting
                </CardTitle>
              </CardHeader>
              <CardContent className="print:pt-0">
                <div className="space-y-6 print:space-y-3">
                  {job.fullDescription.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-slate-600 leading-relaxed font-light text-lg print:text-black print:text-base print:leading-normal"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Job Duties */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm print:shadow-none print:border print:border-gray-300 print:bg-white print:break-inside-avoid">
              <CardHeader className="print:pb-2">
                <CardTitle className="text-2xl font-light flex items-center gap-3 print:text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center print:bg-gray-200">
                    <Award className="h-5 w-5 text-white print:text-black" />
                  </div>
                  Key Responsibilities
                </CardTitle>
              </CardHeader>
              <CardContent className="print:pt-0">
                <ul className="space-y-4 print:space-y-2">
                  {job.duties.map((duty, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full mt-2 flex-shrink-0 print:bg-black print:w-2 print:h-2"></div>
                      <span className="text-slate-600 font-light leading-relaxed print:text-black print:text-base">
                        {duty}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Education Requirements */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm print:shadow-none print:border print:border-gray-300 print:bg-white print:break-inside-avoid">
              <CardHeader className="print:pb-2">
                <CardTitle className="text-2xl font-light flex items-center gap-3 print:text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center print:bg-gray-200">
                    <GraduationCap className="h-5 w-5 text-white print:text-black" />
                  </div>
                  Education Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="print:pt-0">
                <ul className="space-y-4 print:space-y-2">
                  {job.education.map((edu, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-2 flex-shrink-0 print:bg-black print:w-2 print:h-2"></div>
                      <span className="text-slate-600 font-light leading-relaxed print:text-black print:text-base">
                        {edu}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Experience Requirements */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm print:shadow-none print:border print:border-gray-300 print:bg-white print:break-inside-avoid">
              <CardHeader className="print:pb-2">
                <CardTitle className="text-2xl font-light flex items-center gap-3 print:text-xl">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center print:bg-gray-200">
                    <Users className="h-5 w-5 text-white print:text-black" />
                  </div>
                  Experience & Travel Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="print:pt-0">
                <ul className="space-y-4 print:space-y-2">
                  {job.experience.map((exp, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mt-2 flex-shrink-0 print:bg-black print:w-2 print:h-2"></div>
                      <span className="text-slate-600 font-light leading-relaxed print:text-black print:text-base">
                        {exp}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 print:hidden">
            {/* Quick Apply */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-light">Ready to Apply?</CardTitle>
                <CardDescription className="font-light">
                  Join our team and work on exciting projects with cutting-edge technology.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold py-4 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                  asChild
                >
                  <Link href={`/careers/${job.id}/apply`}>Apply for This Position</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-light flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center">
                    <Building className="h-5 w-5 text-white" />
                  </div>
                  Company Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Immense Brains LLC</h4>
                  <div className="text-slate-600 font-light space-y-1">
                    <p>6760 Corporate Drive, Suite 100</p>
                    <p>Colorado Springs, CO 80919</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-slate-600 font-light text-sm leading-relaxed">
                    We provide Information Technology services to various clients across the USA. Posted by CEO Sai
                    Nirukurti.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl font-light">What We Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full"></div>
                      <span className="text-slate-600 font-light">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="shadow-xl border-0 bg-gradient-to-br from-slate-50 to-slate-100">
              <CardHeader>
                <CardTitle className="text-xl font-light">Questions?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-light mb-4">
                  Have questions about this position? Contact our HR team.
                </p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <Link href="/contact">Contact HR</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
