"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, DollarSign, Users, Search, Filter, Crown, Sparkles, Award, Briefcase } from "lucide-react"
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
  postedDate: string
  gradient: string
  accent: string
  openings: number
  duties: string[]
  education: string[]
  experience: string[]
}

export default function CareersPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  // Real job data from the posting notice
  useEffect(() => {
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
        requirements: [
          "Master's degree in Computer Science/IT/IS/Engineering/Business or related field",
          "6 months experience with Oracle Fusion or Oracle EBS",
          "Bachelor's degree + 5 years progressive work experience (alternative)",
          "Travel/relocation to client sites throughout USA required",
        ],
        benefits: ["Competitive salary", "Full-time position", "Professional development", "Client site experience"],
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
        requirements: [
          "Master's degree in Computer Science/IT/IS/Engineering or related field",
          "6 months experience with ETL or Informatica",
          "Experience in data engineering or related field",
          "Travel/relocation to client sites throughout USA required",
        ],
        benefits: ["Competitive salary", "Full-time position", "Data engineering expertise", "Client site experience"],
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
    setJobs(realJobs)
    setFilteredJobs(realJobs)
  }, [])

  // Filter jobs based on search and filters
  useEffect(() => {
    let filtered = jobs

    if (searchTerm) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    if (departmentFilter !== "all") {
      filtered = filtered.filter((job) => job.department === departmentFilter)
    }

    if (locationFilter !== "all") {
      filtered = filtered.filter((job) => job.location.includes(locationFilter))
    }

    setFilteredJobs(filtered)
  }, [searchTerm, departmentFilter, locationFilter, jobs])

  const departments = [...new Set(jobs.map((job) => job.department))]
  const locations = [...new Set(jobs.map((job) => job.location.split(",")[1]?.trim() || job.location))]

  const benefits = [
    {
      icon: Users,
      title: "Great Team",
      description: "Work with talented professionals who are passionate about technology",
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      icon: DollarSign,
      title: "Competitive Pay",
      description: "Attractive salary packages with performance bonuses and growth opportunities",
      gradient: "from-rose-400 to-pink-500",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Full-time positions with professional development opportunities",
      gradient: "from-emerald-400 to-teal-500",
    },
    {
      icon: Award,
      title: "Growth Opportunities",
      description: "Client site experience, continuous learning, and career advancement",
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
              <Briefcase className="w-4 h-4 mr-2" />
              Join Our Team
            </Badge>
            <h1 className="text-6xl lg:text-8xl font-light text-white leading-tight tracking-tight mb-8">
              Build Your Career with
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Immense Brains
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
              Join a team of passionate innovators and help shape the future of technology. We offer exciting
              opportunities, competitive benefits, and a culture of continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
              <Crown className="w-4 h-4 mr-2" />
              Why Work With Us?
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight">
              Exceptional
              <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Benefits & Culture
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              We believe in creating an environment where our team members can thrive and grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="text-center p-8 hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 animate-fade-in-up shadow-lg relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${benefit.gradient}`}></div>
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center text-white mb-6 mx-auto shadow-xl relative`}
                >
                  <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                  <benefit.icon className="h-10 w-10 relative z-10" />
                </div>
                <h3 className="font-semibold text-slate-900 text-xl mb-4">{benefit.title}</h3>
                <p className="text-slate-600 text-base font-light leading-relaxed">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16">
            <div className="text-center mb-12 animate-fade-in-up">
              <Badge
                variant="outline"
                className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
              >
                <Award className="w-4 h-4 mr-2" />
                Open Positions
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
                Current
                <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Opportunities
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
                Posted by CEO Sai Nirukurti on June 26th - Multiple openings available
              </p>
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white/90 backdrop-blur-sm border-white/20"
                />
              </div>

              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="w-full md:w-56 h-14 bg-white/90 backdrop-blur-sm border-white/20">
                  <Filter className="h-5 w-5 mr-2" />
                  <SelectValue placeholder="Department" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="w-full md:w-56 h-14 bg-white/90 backdrop-blur-sm border-white/20">
                  <MapPin className="h-5 w-5 mr-2" />
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  {locations.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Job Cards */}
          <div className="space-y-8">
            {filteredJobs.length === 0 ? (
              <Card className="p-12 text-center bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                <p className="text-slate-600 text-xl font-light">No jobs found matching your criteria.</p>
              </Card>
            ) : (
              filteredJobs.map((job, index) => (
                <Card
                  key={job.id}
                  className="p-8 hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm border-0 shadow-lg relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${job.gradient}`}></div>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${job.gradient} flex items-center justify-center text-white shadow-lg`}
                        >
                          <Briefcase className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-light text-slate-900">{job.title}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <Badge variant="outline" className={`${job.accent} text-amber-600 bg-amber-50/50`}>
                              {job.department}
                            </Badge>
                            <Badge variant="outline" className="text-emerald-600 border-emerald-200 bg-emerald-50/50">
                              {job.openings} Openings
                            </Badge>
                          </div>
                        </div>
                      </div>

                      <p className="text-slate-600 mb-6 text-lg font-light leading-relaxed">{job.description}</p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">Key Requirements:</h4>
                          <ul className="space-y-2">
                            {job.requirements.slice(0, 3).map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-start text-slate-600 text-sm">
                                <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-3">What We Offer:</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="flex items-start text-slate-600 text-sm">
                                <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-6 text-base text-slate-500">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-5 w-5" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-5 w-5" />
                          {job.type} - 40 hours/week
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5" />
                          {job.salary}/year
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="outline" size="lg" className="bg-white/50 backdrop-blur-sm" asChild>
                        <Link href={`/careers/${job.id}`}>View Details</Link>
                      </Button>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                        asChild
                      >
                        <Link href={`/careers/${job.id}/apply`}>
                          <Sparkles className="mr-2 h-5 w-5" />
                          Apply Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12 animate-fade-in-up">
              <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
                <MapPin className="w-4 h-4 mr-2" />
                Our Location
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight">
                Join Us in
                <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                  Colorado Springs
                </span>
              </h2>
            </div>

            <Card className="p-10 shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl flex items-center justify-center text-white mx-auto shadow-xl">
                  <MapPin className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-light text-slate-900 mb-4">Immense Brains LLC</h3>
                  <div className="text-lg text-slate-600 font-light space-y-2">
                    <p>6760 Corporate Drive, Suite 100</p>
                    <p>Colorado Springs, CO 80919</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-slate-200">
                  <p className="text-slate-600 font-light leading-relaxed">
                    We provide Information Technology services to various clients across the USA. Our projects may
                    require travel and/or relocation to unanticipated client sites throughout the United States.
                  </p>
                </div>
              </div>
            </Card>
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
              Ready to Join Our
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Growing Team?
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Apply now for our open positions or refer a qualified candidate through our Employee Referral Program.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                asChild
              >
                <Link href="/contact">
                  <Crown className="mr-3 h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:border-amber-400/50"
                asChild
              >
                <Link href="/employee-referral">
                  <Sparkles className="mr-3 h-5 w-5" />
                  Employee Referral
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
