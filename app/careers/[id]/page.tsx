import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Calendar, Users, Briefcase, GraduationCap, Clock, Plane } from "lucide-react"
import Link from "next/link"

const jobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    department: "Engineering",
    location: "Colorado Springs, CO",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    posted: "August 5th",
    openings: 2,
    description: "Join our engineering team to build cutting-edge software solutions using modern technologies.",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    gradient: "from-purple-500 to-pink-500",
    fullDescription: `We are seeking a Senior Software Engineer to join our dynamic engineering team. You will be responsible for designing, developing, and maintaining high-quality software applications that serve our clients' needs.

Key Responsibilities:
• Design and develop scalable web applications using React and Node.js
• Collaborate with cross-functional teams to define and implement new features
• Write clean, maintainable, and well-documented code
• Participate in code reviews and mentor junior developers
• Optimize applications for maximum speed and scalability
• Stay up-to-date with emerging technologies and industry trends

Requirements:
• Bachelor's degree in Computer Science or related field
• 5+ years of experience in software development
• Strong proficiency in React, Node.js, and TypeScript
• Experience with AWS cloud services
• Excellent problem-solving and communication skills`,
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "5+ years of experience in software development",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with AWS cloud services",
      "Excellent problem-solving and communication skills",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements",
      "Professional development opportunities",
      "Generous PTO policy",
    ],
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "Colorado Springs, CO",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    posted: "August 7th",
    openings: 1,
    description: "Lead product strategy and work with cross-functional teams to deliver exceptional user experiences.",
    skills: ["Product Strategy", "Analytics", "Agile", "User Research"],
    gradient: "from-green-500 to-teal-500",
    fullDescription: `We are looking for an experienced Product Manager to drive our product strategy and roadmap. You will work closely with engineering, design, and business teams to deliver products that delight our customers.

Key Responsibilities:
• Define and execute product strategy and roadmap
• Conduct market research and competitive analysis
• Gather and prioritize product requirements from stakeholders
• Work with engineering teams to deliver features on time
• Analyze product metrics and user feedback
• Collaborate with design team on user experience improvements

Requirements:
• Bachelor's degree in Business, Engineering, or related field
• 3+ years of product management experience
• Strong analytical and problem-solving skills
• Experience with Agile development methodologies
• Excellent communication and leadership abilities`,
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "3+ years of product management experience",
      "Strong analytical and problem-solving skills",
      "Experience with Agile development methodologies",
      "Excellent communication and leadership abilities",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health benefits",
      "Stock options",
      "Flexible work schedule",
      "Learning and development budget",
      "Team building activities",
    ],
  },
  {
    id: 3,
    title: "Technology Lead",
    department: "Engineering",
    location: "Colorado Springs, CO",
    type: "Full-time",
    salary: "$154,170.00",
    posted: "August 9th",
    openings: 1,
    description: "Lead technology initiatives using Agile Scrum methodology, Angular, AWS, and Spring frameworks.",
    skills: ["Java", "Spring", "Angular", "AWS", "Jenkins", "Agile Scrum"],
    gradient: "from-blue-500 to-indigo-500",
    fullDescription: `JOB POSTING NOTICE
Posting Date: August 9th

POSITION: Technology Lead
Full-time job, 40 hours per week
Pay/Salary: $154,170.00 per year

NUMBER OF OPENINGS: 1

LOCATION: Immense Brains LLC
6760 Corporate Dr, Suite 100
Colorado Springs, CO 80919

JOB DUTIES: Developing the functionalities using Agile Scrum Methodology. Analyzing the requirements and implementing the code changes. Developing UI using Angular framework, HTML5, CSS, Typescript. Using design patterns like Singleton, Data Access Objects patterns. Creating POJO's and DAO's for the database entities using Spring Data JPA annotation mappings. Deploying the application on Amazon Web services (AWS) and used it to provide a large computing capacity for scalable solutions. Deploying applications into environments using Jenkins pipelines. Testing the applications using testing frameworks. Work under supervision. Travel and/or Relocation to various unanticipated client sites throughout USA is required.

EDUCATION: Master's degree in Computer Science /IT/IS/ Engineering (Any) or closely related field with Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or Engineer or closely related field.

EXPERIENCE: Experience of Six (6) Months working with Java, Spring is required. Travel and/or Relocation to Unanticipated Client Sites Throughout USA is required.

Posted By: Sai Nirukurti
Designation: CEO`,
    requirements: [
      "Master's degree in Computer Science/IT/IS/Engineering (Any) or closely related field",
      "Six (6) months of experience in the job offered or as an IT Consultant or Analyst or Programmer or Developer or Engineer",
      "Six (6) months of experience working with Java, Spring",
      "Travel and/or Relocation to Unanticipated Client Sites Throughout USA is required",
    ],
    benefits: [
      "Competitive annual salary of $154,170.00",
      "Full-time position with 40 hours per week",
      "Opportunity to work with cutting-edge technologies",
      "Professional development and training opportunities",
      "Travel opportunities to various client sites",
      "Work under experienced supervision",
    ],
    travelRequired: true,
    workHours: "40 hours per week",
    postedBy: "Sai Nirukurti, CEO",
  },
]

interface JobDetailPageProps {
  params: {
    id: string
  }
}

export default function JobDetailPage({ params }: JobDetailPageProps) {
  const job = jobs.find((j) => j.id === Number.parseInt(params.id))

  if (!job) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className={`bg-gradient-to-r ${job.gradient} text-white py-16`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
            <p className="text-xl opacity-90 mb-6">{job.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>{job.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Posted {job.posted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>
                  {job.openings} opening{job.openings !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <Card>
              <CardHeader>
                <CardTitle>Job Description</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed text-slate-700">
                    {job.fullDescription}
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5" />
                  Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Required Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-sm py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Benefits & Perks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info */}
            <Card>
              <CardHeader>
                <CardTitle>Position Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Salary</span>
                  <span className="font-semibold">{job.salary}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Type</span>
                  <span className="font-semibold">{job.type}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Department</span>
                  <span className="font-semibold">{job.department}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="text-slate-600">Location</span>
                  <span className="font-semibold">{job.location}</span>
                </div>
                {job.workHours && (
                  <>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        Hours
                      </span>
                      <span className="font-semibold">{job.workHours}</span>
                    </div>
                  </>
                )}
                {job.travelRequired && (
                  <>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600 flex items-center gap-1">
                        <Plane className="h-4 w-4" />
                        Travel
                      </span>
                      <span className="font-semibold text-orange-600">Required</span>
                    </div>
                  </>
                )}
                {job.postedBy && (
                  <>
                    <Separator />
                    <div className="text-center pt-2">
                      <p className="text-sm text-slate-600">Posted by:</p>
                      <p className="font-semibold">{job.postedBy}</p>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Apply Button */}
            <Card>
              <CardContent className="pt-6">
                <Button asChild className="w-full mb-3" size="lg">
                  <Link href={`/careers/${job.id}/apply`}>Apply for this Position</Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/careers">← Back to All Jobs</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>About Immense Brains</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Immense Brains is a luxury software development company dedicated to creating exceptional digital
                  solutions. We pride ourselves on innovation, quality, and delivering outstanding results for our
                  clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
