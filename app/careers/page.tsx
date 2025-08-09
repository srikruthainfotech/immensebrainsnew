"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Calendar, Users, Search, Briefcase } from "lucide-react"
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
  },
  {
    id: 3,
    title: "Technology Lead",
    department: "Engineering",
    location: "Colorado Springs, CO",
    type: "Full-time",
    salary: "$154,170",
    posted: "August 9th",
    openings: 1,
    description: "Lead technology initiatives using Agile Scrum methodology, Angular, AWS, and Spring frameworks.",
    skills: ["Java", "Spring", "Angular", "AWS", "Jenkins", "Agile Scrum"],
    gradient: "from-blue-500 to-indigo-500",
  },
]

export default function CareersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDepartment, setSelectedDepartment] = useState("All")

  const departments = ["All", ...Array.from(new Set(jobs.map((job) => job.department)))]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesDepartment = selectedDepartment === "All" || job.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Build the future of software development with Immense Brains. We're looking for passionate individuals who
            want to create exceptional solutions and grow their careers.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              <span>{jobs.length} Open Positions</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Colorado Springs, CO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search jobs, skills, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              {departments.map((dept) => (
                <Button
                  key={dept}
                  variant={selectedDepartment === dept ? "default" : "outline"}
                  onClick={() => setSelectedDepartment(dept)}
                  size="sm"
                >
                  {dept}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-600">
            {filteredJobs.length} position{filteredJobs.length !== 1 ? "s" : ""} found
          </p>
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-transparent hover:border-l-purple-500"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{job.title}</CardTitle>
                    <CardDescription className="text-base mb-4">{job.description}</CardDescription>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className={`bg-gradient-to-r ${job.gradient} p-4 rounded-lg text-white min-w-[200px]`}>
                    <div className="text-center">
                      <div className="text-2xl font-bold">{job.salary}</div>
                      <div className="text-sm opacity-90">per year</div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-slate-600">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm">{job.department}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">Posted {job.posted}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">
                      {job.openings} opening{job.openings !== 1 ? "s" : ""}
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button asChild className="flex-1">
                    <Link href={`/careers/${job.id}`}>View Details</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={`/careers/${job.id}/apply`}>Apply Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-slate-600 mb-2">No positions found</h3>
            <p className="text-slate-500">
              Try adjusting your search criteria or check back later for new opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
