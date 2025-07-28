"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, MapPin, Clock, DollarSign, Users, FileText } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

interface JobData {
  id: number
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  postedDate: string
  openings: number
  plainTextPosting: {
    position: string
    payDetails: string
    numberOfOpenings: number
    locationDetails: string[]
    jobDuties: string
    education: string
    experience: string
  }
}

const jobsData: JobData[] = [
  {
    id: 1,
    title: "Software Developer",
    department: "Engineering",
    location: "Colorado Springs, CO",
    type: "Full-time",
    salary: "$153,733.00",
    description:
      "Provide day-to-day support for Oracle Fusion applications, including financials, procurement, HCM, and supply chain modules.",
    postedDate: " 06/26/2025",
    openings: 3,
    plainTextPosting: {
      position: "Software Developer",
      payDetails: "Full-time job, 40 hours per week\nPay/Salary: $153,733.00 year",
      numberOfOpenings: 3,
      locationDetails: ["Immense Brains LLC", "6760 Corporate Dr, Suite 100", "Colorado Springs, CO 80919"],
      jobDuties:
        "Provide day-to-day support for Oracle Fusion applications, including financials, procurement, HCM, and supply chain modules. Identify, analyze, and resolve issues within Oracle Fusion, ensuring timely and accurate resolution to minimize business disruption. Perform configuration tasks, including defining workflows, managing roles and security profiles, and making changes to chart of accounts, business units, and other core setups. Assist in managing and validating data flows between Oracle Fusion and other connected systems. Develop and run custom financial reports based on specific business needs. Troubleshoot and support integrations between Oracle Fusion and third-party applications, ensuring smooth data exchanges and proper system functionality. Work under supervision. Travel and/or Relocation to various unanticipated client sites throughout USA is required.",
      education:
        "Master's  degree in Computer Science /IT/IS/ Engineering (Any)/ Business or related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or Engineer or closely related field. Employer also accepts Bachelor's  degree in Computer Science /IT/IS/ Engineering (Any)/Business or related field plus five years of progressive work experience in related field.",
      experience:
        "Experience of Six (6) Months working with Oracle Fusion or Oracle EBS is required. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency of travel is currently not known as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel.",
    },
  },
  {
    id: 2,
    title: "Software Developer",
    department: "Engineering",
    location: "Colorado Springs, CO",
    type: "Full-time",
    salary: "$145,309.00",
    description:
      "Design, build and manage scalable data systems and pipelines to ensure data is accessible, reliable and usable across organizations.",
    postedDate: " 06/26/2025",
    openings: 3,
    plainTextPosting: {
      position: "Software Developer",
      payDetails: "Full-time job, 40 hours per week\nPay/Salary: $145,309.00 year",
      numberOfOpenings: 3,
      locationDetails: ["Immense Brains LLC", "6760 Corporate Dr, Suite 100", "Colorado Springs, CO 80919"],
      jobDuties:
        "Designing, building and managing scalable data systems and pipelines to ensure the data is accessible, reliable and usable across an organization. Designing and implementing ETL/ELT pipelines to move and transform data from various sources into target data systems. Build and automate workflows for batch and real-time data ingestion and processing. Design and manage scalable, cost-efficient storage solutions for both structured and unstructured data. Implement strategies for data backup, replication, and disaster recovery. Process, cleanse, and transform raw data into meaningful formats for analysis. Orchestrate complex workflows by combining different data services to ensure data pipelines run efficiently. Responsible for secure data in transit and at rest, ensuring encryption and proper access control. Work under supervision. Travel and/or relocation to unanticipated client sites throughout USA is required.",
      education:
        "Master's  degree in Computer Science/ IT/ IS/ Engineering (Any) or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Engineer or Programmer or Developer or Data Engineer or related field.",
      experience:
        "Experience of Six (6) months working with ETL or Informatica is required. Travel and/or relocation is required to unanticipated client sites within USA. International travel is not required. The frequency of travel is currently not known as it depends on the client and project requirement that cannot be currently anticipated. Employer provides Information technology services to various clients in USA and hence implementing projects will require such travel.",
    },
  },
]

const handlePrint = (job: JobData) => {
  // Create a new window for printing
  const printWindow = window.open("", "_blank")
  if (printWindow) {
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Job Posting - ${job.title}</title>
          <style>
            @media print {
              body { font-family: 'Times New Roman', serif; margin: 1in; }
              .job-posting-header { text-align: center; font-weight: bold; font-size: 16pt; margin-bottom: 24pt; text-decoration: underline; }
              .posting-date { text-align: right; margin-bottom: 24pt; font-weight: bold; }
              .job-section { margin-bottom: 20pt; display: flex; page-break-inside: avoid; }
              .section-label { font-weight: bold; width: 140pt; margin-right: 20pt; text-transform: uppercase; }
              .section-content { flex: 1; text-align: justify; }
              .signature-section { margin-top: 48pt; border-top: 1pt solid black; padding-top: 24pt; }
            }
          </style>
        </head>
        <body>
          <div class="job-posting-header">JOB POSTING NOTICE</div>
          <div class="posting-date">Posting Date: ${job.postedDate}</div>
          <div class="job-section">
            <div class="section-label">POSITION:</div>
            <div class="section-content">${job.plainTextPosting.position}<br/>${job.plainTextPosting.payDetails.replace(/\n/g, "<br/>")}</div>
          </div>
          <div class="job-section">
            <div class="section-label">NUMBER OF OPENINGS:</div>
            <div class="section-content">${job.plainTextPosting.numberOfOpenings}</div>
          </div>
          <div class="job-section">
            <div class="section-label">LOCATION:</div>
            <div class="section-content">${job.plainTextPosting.locationDetails.join("<br/>")}</div>
          </div>
          <div class="job-section">
            <div class="section-label">JOB DUTIES:</div>
            <div class="section-content">${job.plainTextPosting.jobDuties}</div>
          </div>
          <div class="job-section">
            <div class="section-label">EDUCATION:</div>
            <div class="section-content">${job.plainTextPosting.education}</div>
          </div>
          <div class="job-section">
            <div class="section-label">EXPERIENCE:</div>
            <div class="section-content">${job.plainTextPosting.experience}</div>
          </div>
          <div class="signature-section">
            <p><strong>Posted By:</strong> (Sai Nirukurti)</p>
            <p><strong>Designation:</strong> CEO</p>
          </div>
        </body>
      </html>
    `)
    printWindow.document.close()
    printWindow.print()
  }
}

export default function JobDetailsPage() {
  const params = useParams()
  const [job, setJob] = useState<JobData | null>(null)

  useEffect(() => {
    const jobId = Number.parseInt(params.id as string)
    const foundJob = jobsData.find((j) => j.id === jobId)
    setJob(foundJob || null)
  }, [params.id])

  // Add keyboard shortcut for Ctrl+P / Cmd+P
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "p") {
        event.preventDefault()
        if (job) {
          handlePrint(job)
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [job])

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20">
        <div className="container mx-auto px-4 py-12">
          <Card className="text-center p-12">
            <h1 className="text-2xl font-light text-slate-900 mb-4">Job Not Found</h1>
            <p className="text-slate-600 mb-8">The job position you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/careers">Back to Careers</Link>
            </Button>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 print:pt-0 print:bg-white">
      {/* Print Content - Only visible when printing */}
      <div className="print-content hidden print:block">
        <div className="job-posting-header">JOB POSTING NOTICE</div>
        <div className="posting-date">Posting Date: {job.postedDate}</div>

        <div className="job-section">
          <div className="section-label">POSITION:</div>
          <div className="section-content">
            <p>{job.plainTextPosting.position}</p>
            {job.plainTextPosting.payDetails.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        <div className="job-section">
          <div className="section-label">NUMBER OF OPENINGS:</div>
          <div className="section-content">
            <p>{job.plainTextPosting.numberOfOpenings}</p>
          </div>
        </div>

        <div className="job-section">
          <div className="section-label">LOCATION:</div>
          <div className="section-content">
            {job.plainTextPosting.locationDetails.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div>

        <div className="job-section">
          <div className="section-label">JOB DUTIES:</div>
          <div className="section-content">
            <p>{job.plainTextPosting.jobDuties}</p>
          </div>
        </div>

        <div className="job-section">
          <div className="section-label">EDUCATION:</div>
          <div className="section-content">
            <p>{job.plainTextPosting.education}</p>
          </div>
        </div>

        <div className="job-section">
          <div className="section-label">EXPERIENCE:</div>
          <div className="section-content">
            <p>{job.plainTextPosting.experience}</p>
          </div>
        </div>

        <div className="signature-section">
          <p>
            <strong>Posted By:</strong> (Sai Nirukurti)
          </p>
          <p>
            <strong>Designation:</strong> CEO
          </p>
        </div>
      </div>

      {/* Web Content - Hidden when printing */}
      <div className="no-print">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Button variant="outline" asChild className="bg-white hover:bg-slate-50">
              <Link href="/careers">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Careers
              </Link>
            </Button>
          </div>

          {/* Job Details Card */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm mb-8">
            <CardContent className="p-8">
              <div className="mb-8">
                <div className="flex flex-wrap gap-3 mb-4">
                  <Badge className="bg-slate-100 text-slate-700">{job.department}</Badge>
                  <Badge className="bg-amber-100 text-amber-800">{job.openings} Openings</Badge>
                  <Badge className="bg-emerald-100 text-emerald-800">Posted {job.postedDate}</Badge>
                </div>
                <h1 className="text-4xl font-light text-slate-900 mb-4">{job.title}</h1>
                <p className="text-xl text-slate-600 font-light leading-relaxed">{job.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">{job.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">{job.type}</span>
                </div>
                <div className="flex items-center gap-3">
                  <DollarSign className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">{job.salary}/year</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-slate-400" />
                  <span className="text-slate-600">{job.openings} openings</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                  asChild
                >
                  <Link href={`/careers/${job.id}/apply`}>Apply for This Position</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => handlePrint(job)}
                  className="flex-1 bg-transparent hover:bg-slate-50 border-slate-200 hover:border-slate-300 py-4 px-8 rounded-full transition-all duration-300"
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Print Job Posting
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Plain Text Job Posting */}
          <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">JOB POSTING NOTICE</h2>
                <div className="text-right text-black font-bold">Posting Date: {job.postedDate}</div>
              </div>

              <div className="bg-white border border-gray-300 p-8 font-mono text-sm">
                <div className="space-y-6">
                  <div className="flex">
                    <div className="w-32 font-bold text-black flex-shrink-0">POSITION:</div>
                    <div className="flex-1 text-black">
                      <p>{job.plainTextPosting.position}</p>
                      {job.plainTextPosting.payDetails.split("\n").map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-32 font-bold text-black flex-shrink-0">NUMBER OF OPENINGS:</div>
                    <div className="flex-1 text-black">
                      <p>{job.plainTextPosting.numberOfOpenings}</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-32 font-bold text-black flex-shrink-0">LOCATION:</div>
                    <div className="flex-1 text-black">
                      {job.plainTextPosting.locationDetails.map((line, idx) => (
                        <p key={idx}>{line}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-32 font-bold text-black flex-shrink-0 align-top">JOB DUTIES:</div>
                    <div className="flex-1 text-black text-justify">
                      <p>{job.plainTextPosting.jobDuties}</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-32 font-bold text-black flex-shrink-0 align-top">EDUCATION:</div>
                    <div className="flex-1 text-black text-justify">
                      <p>{job.plainTextPosting.education}</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="w-32 font-bold text-black flex-shrink-0 align-top">EXPERIENCE:</div>
                    <div className="flex-1 text-black text-justify">
                      <p>{job.plainTextPosting.experience}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-300">
                  <div className="space-y-4">
                    <p className="text-black">
                      <strong>Posted By:</strong> (Sai Nirukurti)
                    </p>
                    <p className="text-black">
                      <strong>Designation:</strong> CEO
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
