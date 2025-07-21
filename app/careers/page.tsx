"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, MapPin, Clock, DollarSign, Users, Briefcase, Eye, Star } from "lucide-react"
import Link from "next/link"

interface Job {
  id: number
  title: string
  department: string
  location: string
  type: string
  salary: string
  description: string
  postedDate: string
  openings: number
  gradient: string
}

const jobsData: Job[] = [
  {
    id: 1,
    title: "Software Developer - Oracle Fusion",
    department: "Engineering",
    location: "Colorado Springs, CO",
    type: "Full-time",
    salary: "$153,733.00",
    description:
      "Provide day-to-day support for Oracle Fusion applications, including financials, procurement, HCM, and supply chain modules. Identify, analyze, and resolve issues within Oracle Fusion systems. Perform configuration tasks including workflows, roles, security profiles.",
    postedDate: "June 26th",
    openings: 3,
    gradient: "from-amber-400 to-yellow-500",
  },
  {
    id: 2,
    title: "Software Developer - Data Engineering",
    department: "Engineering",
    location: "Colorado Springs, CO",
    type: "Full-time",
    salary: "$145,309.00",
    description:
      "Design, build and manage scalable data systems and pipelines to ensure data is accessible, reliable and usable across organizations. Design and implement ETL/ELT pipelines to move and transform data from various sources into target data systems.",
    postedDate: "June 26th",
    openings: 3,
    gradient: "from-emerald-400 to-teal-500",
  },
]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesDepartment = departmentFilter === "all" || job.department === departmentFilter
      const matchesLocation = locationFilter === "all" || job.location === locationFilter
      const matchesType = typeFilter === "all" || job.type === typeFilter

      return matchesSearch && matchesDepartment && matchesLocation && matchesType
    })
  }, [searchTerm, departmentFilter, locationFilter, typeFilter])

  const departments = Array.from(new Set(jobsData.map((job) => job.department)))
  const locations = Array.from(new Set(jobsData.map((job) => job.location)))
  const types = Array.from(new Set(jobsData.map((job) => job.type)))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-yellow-100 px-6 py-3 rounded-full mb-6">
            <Star className="h-5 w-5 text-amber-600" />
            <span className="text-amber-800 font-medium">Join Our Growing Team</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-light text-slate-900 mb-6">
            Career{" "}
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
              Opportunities
            </span>
          </h1>
          <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
            Build your career with Immense Brains LLC. We offer competitive salaries, professional development, and the
            opportunity to work with cutting-edge technology across various client sites in the USA.
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-light flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center">
                <Search className="h-5 w-5 text-white" />
              </div>
              Find Your Perfect Role
            </CardTitle>
            <CardDescription className="text-lg font-light">
              Search and filter through our available positions to find the role that matches your skills and interests.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Search Jobs</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
                  <Input
                    placeholder="Search by title or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-white border-slate-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Department</label>
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger className="bg-white border-slate-200 focus:border-amber-400 focus:ring-amber-400">
                    <SelectValue placeholder="All Departments" />
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

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Location</label>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="bg-white border-slate-200 focus:border-amber-400 focus:ring-amber-400">
                    <SelectValue placeholder="All Locations" />
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

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Job Type</label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="bg-white border-slate-200 focus:border-amber-400 focus:ring-amber-400">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {types.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-8">
          <p className="text-slate-600 font-light">
            Showing <span className="font-semibold text-slate-900">{filteredJobs.length}</span> of{" "}
            <span className="font-semibold text-slate-900">{jobsData.length}</span> available positions
          </p>
        </div>

        {/* Job Cards - Horizontal Layout */}
        <div className="space-y-8">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className="group shadow-xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.01] overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${job.gradient}`}></div>
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Left Side - Job Icon and Basic Info */}
                  <div className="lg:w-80 p-8 bg-gradient-to-br from-slate-50 to-white border-r border-slate-100">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${job.gradient} flex items-center justify-center shadow-xl mb-6 group-hover:shadow-2xl transition-all duration-500`}
                      >
                        <Briefcase className="h-10 w-10 text-white" />
                      </div>
                      <div className="space-y-3 mb-6">
                        <Badge className="bg-slate-100 text-slate-700 hover:bg-slate-200">{job.department}</Badge>
                        <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 ml-2">
                          {job.openings} Openings
                        </Badge>
                        <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 ml-2 block mt-2">
                          Posted {job.postedDate}
                        </Badge>
                      </div>
                      <div className="space-y-3 text-sm text-slate-600">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-slate-400" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-slate-400" />
                          <span>{job.type} - 40 hours/week</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-slate-400" />
                          <span className="font-semibold text-slate-900">{job.salary}/year</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-slate-400" />
                          <span>{job.openings} positions available</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Job Details and Actions */}
                  <div className="flex-1 p-8">
                    <div className="h-full flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-3xl font-light text-slate-900 mb-4 group-hover:text-slate-700 transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">{job.description}</p>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                        <Button
                          size="lg"
                          className="flex-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold py-4 px-8 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                          asChild
                        >
                          <Link href={`/careers/${job.id}/apply`}>Apply Now</Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="lg"
                          className="flex-1 bg-transparent hover:bg-slate-50 border-slate-200 hover:border-slate-300 py-4 px-8 rounded-full transition-all duration-300"
                          asChild
                        >
                          <Link href={`/careers/${job.id}`}>
                            <Eye className="h-4 w-4 mr-2" />
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <Card className="text-center p-12 shadow-xl border-0 bg-white/90 backdrop-blur-sm">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-200 to-slate-300 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-slate-500" />
            </div>
            <h3 className="text-2xl font-light text-slate-900 mb-4">No positions found</h3>
            <p className="text-slate-600 font-light mb-8">
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setDepartmentFilter("all")
                setLocationFilter("all")
                setTypeFilter("all")
              }}
              className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-8 py-3 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
            >
              Clear All Filters
            </Button>
          </Card>
        )}

        {/* Company Benefits Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-slate-900 mb-4">Why Work With Us?</h2>
            <p className="text-xl text-slate-600 font-light">Join a company that values your growth and success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Competitive Salaries</h3>
              <p className="text-slate-600 font-light">
                We offer industry-leading compensation packages with salaries ranging from $145K to $154K annually.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Client Site Experience</h3>
              <p className="text-slate-600 font-light">
                Work directly with clients across the USA, gaining valuable experience and expanding your professional
                network.
              </p>
            </Card>

            <Card className="text-center p-8 bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/50">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-light text-slate-900 mb-4">Professional Growth</h3>
              <p className="text-slate-600 font-light">
                Advance your career with cutting-edge technology projects and continuous learning opportunities.
              </p>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-emerald-400/10 to-teal-600/10 rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-light mb-4">Ready to Join Our Team?</h2>
              <p className="text-xl font-light mb-8 text-white/90">
                Send your resume to HR@immensebrains.com or contact us for more information.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
