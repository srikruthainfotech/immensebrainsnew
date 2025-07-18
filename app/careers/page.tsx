"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, DollarSign, Users, Search, Filter, Briefcase, Building2, Star } from "lucide-react"
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
}

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  // Real job data from the posting notice
  const jobs: Job[] = [
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
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter
    const matchesLocation = locationFilter === "all" || job.location === locationFilter

    return matchesSearch && matchesDepartment && matchesLocation
  })

  const departments = [...new Set(jobs.map((job) => job.department))]
  const locations = [...new Set(jobs.map((job) => job.location))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20 print:pt-0 print:bg-white">
      <div className="container mx-auto px-4 py-12 print:px-0 print:py-4">
        {/* Hero Section */}
        <div className="text-center mb-16 print:mb-8">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-yellow-100 px-6 py-3 rounded-full mb-6 print:bg-gray-100 print:mb-4">
            <Star className="h-5 w-5 text-amber-600 print:text-black" />
            <span className="text-amber-800 font-medium print:text-black">Join Our Growing Team</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-light text-slate-900 mb-6 print:text-3xl print:mb-4">
            Career{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent print:text-black">
              Opportunities
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed print:text-base print:text-black">
            Build your career with Immense Brains LLC. We offer competitive salaries, professional development, and the
            opportunity to work with cutting-edge technology across various client sites in the USA.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12 border border-slate-200/50 print:hidden">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  placeholder="Search positions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-12 bg-slate-50 border-slate-200 focus:border-amber-300 focus:ring-amber-200"
                />
              </div>
            </div>
            <div>
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger className="h-12 bg-slate-50 border-slate-200">
                  <Filter className="h-4 w-4 mr-2" />
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
            </div>
            <div>
              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger className="h-12 bg-slate-50 border-slate-200">
                  <MapPin className="h-4 w-4 mr-2" />
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
        </div>

        {/* Job Listings */}
        <div className="space-y-8 print:space-y-4">
          {filteredJobs.length === 0 ? (
            <Card className="text-center p-12 print:p-6">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 print:w-12 print:h-12 print:mb-4">
                <Briefcase className="h-10 w-10 text-slate-400 print:h-6 print:w-6" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4 print:text-xl print:mb-2">No positions found</h3>
              <p className="text-slate-600 print:text-black">
                Try adjusting your search criteria or check back later for new opportunities.
              </p>
            </Card>
          ) : (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                className={`group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-[1.02] ${job.accent} print:shadow-none print:border print:border-gray-300 print:bg-white print:hover:scale-100`}
              >
                <CardContent className="p-8 lg:p-10 print:p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-start gap-6 mb-6">
                        <div
                          className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${job.gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 print:bg-gray-200 print:shadow-none print:group-hover:scale-100`}
                        >
                          <Briefcase className="h-8 w-8 text-white print:text-black" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-3">
                            <h3 className="text-2xl lg:text-3xl font-light text-slate-900 print:text-xl">
                              {job.title}
                            </h3>
                            <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200 print:bg-gray-100 print:text-black print:border-gray-300">
                              {job.openings} Openings
                            </Badge>
                            <Badge className="bg-blue-100 text-blue-700 border-blue-200 print:bg-gray-100 print:text-black print:border-gray-300">
                              Posted {job.postedDate}
                            </Badge>
                          </div>
                          <p className="text-slate-600 font-light leading-relaxed mb-6 print:text-black print:text-sm">
                            {job.description}
                          </p>

                          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 print:grid-cols-2 print:gap-2">
                            <div className="flex items-center gap-3">
                              <Building2 className="h-5 w-5 text-slate-400 print:text-black" />
                              <span className="text-slate-600 font-light print:text-black print:text-sm">
                                {job.department}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <MapPin className="h-5 w-5 text-slate-400 print:text-black" />
                              <span className="text-slate-600 font-light print:text-black print:text-sm">
                                {job.location}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Clock className="h-5 w-5 text-slate-400 print:text-black" />
                              <span className="text-slate-600 font-light print:text-black print:text-sm">
                                {job.type}
                              </span>
                            </div>
                            <div className="flex items-center gap-3">
                              <DollarSign className="h-5 w-5 text-slate-400 print:text-black" />
                              <span className="text-slate-600 font-light print:text-black print:text-sm">
                                {job.salary}/year
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 print:hidden">
                      <Button
                        variant="outline"
                        size="lg"
                        className="bg-transparent hover:bg-slate-50 border-slate-300 text-slate-700 px-8 py-4 rounded-full transition-all duration-300"
                        asChild
                      >
                        <Link href={`/careers/${job.id}`}>View Details</Link>
                      </Button>
                      <Button
                        size="lg"
                        className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                        asChild
                      >
                        <Link href={`/careers/${job.id}/apply`}>Apply Now</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Company Benefits Section */}
        <div className="mt-20 print:mt-8">
          <div className="text-center mb-12 print:mb-6">
            <h2 className="text-4xl font-light text-slate-900 mb-4 print:text-2xl print:mb-2">Why Work With Us?</h2>
            <p className="text-xl text-slate-600 font-light print:text-base print:text-black">
              Join a company that values your growth and success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 print:grid-cols-1 print:gap-4">
            <Card className="text-center p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 print:bg-white print:border print:border-gray-300 print:p-4">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6 print:bg-gray-200 print:mb-4">
                <DollarSign className="h-8 w-8 text-white print:text-black" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4 print:text-xl print:mb-2">Competitive Salaries</h3>
              <p className="text-slate-600 font-light print:text-black print:text-sm">
                We offer industry-leading compensation packages with salaries ranging from $145K to $154K annually.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200/50 print:bg-white print:border print:border-gray-300 print:p-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6 print:bg-gray-200 print:mb-4">
                <Users className="h-8 w-8 text-white print:text-black" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4 print:text-xl print:mb-2">
                Client Site Experience
              </h3>
              <p className="text-slate-600 font-light print:text-black print:text-sm">
                Work directly with clients across the USA, gaining valuable experience and expanding your professional
                network.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/50 print:bg-white print:border print:border-gray-300 print:p-4">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 print:bg-gray-200 print:mb-4">
                <Star className="h-8 w-8 text-white print:text-black" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4 print:text-xl print:mb-2">Professional Growth</h3>
              <p className="text-slate-600 font-light print:text-black print:text-sm">
                Advance your career with cutting-edge technology projects and continuous learning opportunities.
              </p>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center print:mt-8">
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-12 rounded-3xl relative overflow-hidden print:bg-white print:text-black print:border print:border-gray-300 print:p-6">
            <div className="absolute inset-0 overflow-hidden print:hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-light mb-4 print:text-2xl print:mb-2 print:text-black">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl font-light mb-8 text-white/90 print:text-base print:mb-4 print:text-black">
                Send your resume to HR@immensebrains.com or contact us for more information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                  asChild
                >
                  <Link href="/contact">Contact HR</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent hover:bg-white/10 border-white/30 text-white px-8 py-4 rounded-full transition-all duration-300"
                  asChild
                >
                  <Link href="/employee-referral">Employee Referral</Link>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
