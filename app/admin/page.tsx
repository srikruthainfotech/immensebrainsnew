"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Edit, Trash2, Users, Briefcase, Calendar, TrendingUp } from "lucide-react"

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
  status: "active" | "paused" | "closed"
}

export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [isAddJobOpen, setIsAddJobOpen] = useState(false)
  const [editingJob, setEditingJob] = useState<Job | null>(null)
  const [newJob, setNewJob] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    salary: "",
    description: "",
    requirements: "",
    benefits: "",
    status: "active" as const,
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
        postedDate: "2024-01-15",
        status: "active",
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
        postedDate: "2024-01-10",
        status: "active",
      },
      {
        id: 3,
        title: "DevOps Engineer",
        department: "Infrastructure",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $140,000",
        description:
          "Help us scale our infrastructure and improve our deployment processes using modern DevOps practices.",
        requirements: ["AWS/Azure experience", "Docker/Kubernetes", "CI/CD pipelines", "Infrastructure as Code"],
        benefits: ["Health insurance", "Unlimited PTO", "Conference budget", "Flexible schedule"],
        postedDate: "2024-01-08",
        status: "active",
      },
      {
        id: 4,
        title: "UI/UX Designer",
        department: "Design",
        location: "New York, NY",
        type: "Full-time",
        salary: "$80,000 - $110,000",
        description: "Create beautiful and intuitive user experiences for our web and mobile applications.",
        requirements: ["3+ years UI/UX design", "Figma/Sketch proficiency", "User research skills", "Design systems"],
        benefits: ["Health insurance", "Creative tools budget", "Flexible hours", "Design conferences"],
        postedDate: "2024-01-05",
        status: "paused",
      },
      {
        id: 5,
        title: "Data Scientist",
        department: "Analytics",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$130,000 - $160,000",
        description: "Analyze complex datasets and build machine learning models to drive business insights.",
        requirements: [
          "PhD/Masters in relevant field",
          "Python/R expertise",
          "Machine learning",
          "Statistical analysis",
        ],
        benefits: ["Health insurance", "Research budget", "Conference attendance", "Flexible work"],
        postedDate: "2024-01-03",
        status: "active",
      },
      {
        id: 6,
        title: "Project Manager",
        department: "Operations",
        location: "Chicago, IL",
        type: "Full-time",
        salary: "$90,000 - $120,000",
        description: "Lead cross-functional teams to deliver software projects on time and within budget.",
        requirements: [
          "PMP certification preferred",
          "5+ years project management",
          "Agile/Scrum experience",
          "Technical background",
        ],
        benefits: ["Health insurance", "401k matching", "Professional development", "Team events"],
        postedDate: "2024-01-01",
        status: "closed",
      },
    ]
    setJobs(mockJobs)
  }, [])

  const handleAddJob = () => {
    if (!newJob.title || !newJob.department || !newJob.description) return

    const job: Job = {
      id: Date.now(),
      title: newJob.title,
      department: newJob.department,
      location: newJob.location,
      type: newJob.type,
      salary: newJob.salary,
      description: newJob.description,
      requirements: newJob.requirements.split("\n").filter((req) => req.trim()),
      benefits: newJob.benefits.split("\n").filter((benefit) => benefit.trim()),
      postedDate: new Date().toISOString().split("T")[0],
      status: newJob.status,
    }

    setJobs([...jobs, job])
    setNewJob({
      title: "",
      department: "",
      location: "",
      type: "",
      salary: "",
      description: "",
      requirements: "",
      benefits: "",
      status: "active",
    })
    setIsAddJobOpen(false)
  }

  const handleEditJob = (job: Job) => {
    setEditingJob(job)
    setNewJob({
      title: job.title,
      department: job.department,
      location: job.location,
      type: job.type,
      salary: job.salary,
      description: job.description,
      requirements: job.requirements.join("\n"),
      benefits: job.benefits.join("\n"),
      status: job.status,
    })
  }

  const handleUpdateJob = () => {
    if (!editingJob || !newJob.title || !newJob.department || !newJob.description) return

    const updatedJob: Job = {
      ...editingJob,
      title: newJob.title,
      department: newJob.department,
      location: newJob.location,
      type: newJob.type,
      salary: newJob.salary,
      description: newJob.description,
      requirements: newJob.requirements.split("\n").filter((req) => req.trim()),
      benefits: newJob.benefits.split("\n").filter((benefit) => benefit.trim()),
      status: newJob.status,
    }

    setJobs(jobs.map((job) => (job.id === editingJob.id ? updatedJob : job)))
    setEditingJob(null)
    setNewJob({
      title: "",
      department: "",
      location: "",
      type: "",
      salary: "",
      description: "",
      requirements: "",
      benefits: "",
      status: "active",
    })
  }

  const handleDeleteJob = (id: number) => {
    setJobs(jobs.filter((job) => job.id !== id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "paused":
        return "bg-yellow-100 text-yellow-800"
      case "closed":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const stats = {
    totalJobs: jobs.length,
    activeJobs: jobs.filter((job) => job.status === "active").length,
    applications: 45, // Mock data
    newThisMonth: 8, // Mock data
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage job postings and track applications</p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium opacity-90">Total Jobs</CardTitle>
                <Briefcase className="h-4 w-4 opacity-90" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalJobs}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-teal-500 text-white border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium opacity-90">Active Jobs</CardTitle>
                <TrendingUp className="h-4 w-4 opacity-90" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeJobs}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium opacity-90">Applications</CardTitle>
                <Users className="h-4 w-4 opacity-90" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.applications}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium opacity-90">New This Month</CardTitle>
                <Calendar className="h-4 w-4 opacity-90" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.newThisMonth}</div>
            </CardContent>
          </Card>
        </div>

        {/* Job Management */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl">Job Postings</CardTitle>
                <CardDescription>Manage your company's job listings</CardDescription>
              </div>
              <Dialog open={isAddJobOpen} onOpenChange={setIsAddJobOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white border-0">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Job
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{editingJob ? "Edit Job" : "Add New Job"}</DialogTitle>
                    <DialogDescription>
                      {editingJob ? "Update the job details below." : "Fill in the details for the new job posting."}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Job Title *</Label>
                        <Input
                          id="title"
                          value={newJob.title}
                          onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                          placeholder="e.g. Senior Developer"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department *</Label>
                        <Input
                          id="department"
                          value={newJob.department}
                          onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                          placeholder="e.g. Engineering"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={newJob.location}
                          onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                          placeholder="e.g. San Francisco, CA"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type">Job Type</Label>
                        <Select value={newJob.type} onValueChange={(value) => setNewJob({ ...newJob, type: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select job type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Full-time">Full-time</SelectItem>
                            <SelectItem value="Part-time">Part-time</SelectItem>
                            <SelectItem value="Contract">Contract</SelectItem>
                            <SelectItem value="Internship">Internship</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="salary">Salary Range</Label>
                        <Input
                          id="salary"
                          value={newJob.salary}
                          onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
                          placeholder="e.g. $80,000 - $120,000"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="status">Status</Label>
                        <Select
                          value={newJob.status}
                          onValueChange={(value: "active" | "paused" | "closed") =>
                            setNewJob({ ...newJob, status: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Active</SelectItem>
                            <SelectItem value="paused">Paused</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Job Description *</Label>
                      <Textarea
                        id="description"
                        value={newJob.description}
                        onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                        placeholder="Describe the role, responsibilities, and what you're looking for..."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="requirements">Requirements (one per line)</Label>
                      <Textarea
                        id="requirements"
                        value={newJob.requirements}
                        onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                        placeholder="5+ years experience&#10;React/Node.js expertise&#10;Strong communication skills"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="benefits">Benefits (one per line)</Label>
                      <Textarea
                        id="benefits"
                        value={newJob.benefits}
                        onChange={(e) => setNewJob({ ...newJob, benefits: e.target.value })}
                        placeholder="Health insurance&#10;401k matching&#10;Flexible hours&#10;Remote work options"
                        rows={4}
                      />
                    </div>

                    <div className="flex justify-end space-x-2 pt-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setIsAddJobOpen(false)
                          setEditingJob(null)
                          setNewJob({
                            title: "",
                            department: "",
                            location: "",
                            type: "",
                            salary: "",
                            description: "",
                            requirements: "",
                            benefits: "",
                            status: "active",
                          })
                        }}
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={editingJob ? handleUpdateJob : handleAddJob}
                        className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700"
                      >
                        {editingJob ? "Update Job" : "Add Job"}
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Posted Date</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {jobs.map((job) => (
                    <TableRow key={job.id}>
                      <TableCell className="font-medium">{job.title}</TableCell>
                      <TableCell>{job.department}</TableCell>
                      <TableCell>{job.location}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
                      </TableCell>
                      <TableCell>{job.postedDate}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" onClick={() => handleEditJob(job)}>
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteJob(job.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
