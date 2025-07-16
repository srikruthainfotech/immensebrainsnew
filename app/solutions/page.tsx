import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code,
  Smartphone,
  Cloud,
  Database,
  Shield,
  Zap,
  Globe,
  Cog,
  ArrowRight,
  Crown,
  Sparkles,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built from the ground up to meet your specific business requirements and objectives.",
      features: ["Full-stack development", "API integration", "Database design", "Quality assurance"],
      technologies: ["React", "Node.js", "Python", "Java", ".NET"],
      image: "/placeholder.svg?height=400&width=500&text=React+Node.js+Development+Stack",
      gradient: "from-amber-400 via-yellow-500 to-amber-600",
      accent: "border-amber-200",
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android apps", "Cross-platform development", "UI/UX design", "App store optimization"],
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
      image: "/placeholder.svg?height=400&width=500&text=React+Native+Flutter+Mobile+Development",
      gradient: "from-rose-400 via-pink-500 to-rose-600",
      accent: "border-rose-200",
    },
    {
      icon: <Cloud className="h-12 w-12" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
      features: ["Cloud migration", "Infrastructure setup", "DevOps automation", "Monitoring & maintenance"],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
      image: "/placeholder.svg?height=400&width=500&text=Docker+Kubernetes+Cloud+Infrastructure",
      gradient: "from-emerald-400 via-teal-500 to-emerald-600",
      accent: "border-emerald-200",
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Data Analytics & BI",
      description:
        "Transform your raw data into actionable insights with our advanced analytics and business intelligence solutions.",
      features: ["Data visualization", "Predictive analytics", "Real-time dashboards", "Data warehousing"],
      technologies: ["Power BI", "Tableau", "Python", "R", "SQL"],
      image: "/placeholder.svg?height=400&width=500&text=Python+R+Data+Analytics+Dashboard",
      gradient: "from-violet-400 via-purple-500 to-violet-600",
      accent: "border-violet-200",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security audits", "Penetration testing", "Compliance management", "Incident response"],
      technologies: ["SIEM", "Firewall", "Encryption", "Multi-factor Auth", "VPN"],
      image: "/placeholder.svg?height=400&width=500&text=Open+Source+Security+Tools+SIEM",
      gradient: "from-slate-400 via-gray-500 to-slate-600",
      accent: "border-slate-200",
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "AI & Machine Learning",
      description: "Intelligent automation and ML solutions to drive innovation and operational efficiency.",
      features: ["Predictive modeling", "Natural language processing", "Computer vision", "Chatbots & AI assistants"],
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "Scikit-learn", "Keras"],
      image: "/placeholder.svg?height=400&width=500&text=TensorFlow+PyTorch+Machine+Learning",
      gradient: "from-orange-400 via-amber-500 to-orange-600",
      accent: "border-orange-200",
    },
    {
      icon: <Globe className="h-12 w-12" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that deliver outstanding user experiences.",
      features: ["Responsive design", "E-commerce platforms", "CMS development", "SEO optimization"],
      technologies: ["Next.js", "React", "Vue.js", "WordPress", "Shopify"],
      image: "/placeholder.svg?height=400&width=500&text=Next.js+React+Vue.js+Web+Development",
      gradient: "from-cyan-400 via-blue-500 to-cyan-600",
      accent: "border-cyan-200",
    },
    {
      icon: <Cog className="h-12 w-12" />,
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise software solutions to streamline operations and improve productivity.",
      features: ["ERP systems", "CRM solutions", "Workflow automation", "Integration services"],
      technologies: ["SAP", "Salesforce", "Microsoft Dynamics", "Oracle", "ServiceNow"],
      image: "/placeholder.svg?height=400&width=500&text=Open+Source+ERP+CRM+Enterprise+Solutions",
      gradient: "from-indigo-400 via-purple-500 to-indigo-600",
      accent: "border-indigo-200",
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
              <Award className="w-4 h-4 mr-2" />
              Our Solutions
            </Badge>
            <h1 className="text-6xl lg:text-8xl font-light text-white leading-tight tracking-tight mb-8">
              Comprehensive Technology Solutions for
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Modern Businesses
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
              From custom software development to AI-powered solutions, we offer a complete suite of technology services
              to help your business thrive in the digital age. Built with industry-leading open source technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-20 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={`space-y-10 animate-fade-in-up ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div>
                    <div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${solution.gradient} flex items-center justify-center text-white mb-6 shadow-xl relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                      <div className="relative z-10">{solution.icon}</div>
                    </div>
                    <h2 className="text-5xl font-light text-slate-900 mb-6 tracking-tight">
                      <span className="font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                        {solution.title.split(" ")[0]}
                      </span>
                      <span className="block">{solution.title.split(" ").slice(1).join(" ")}</span>
                    </h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">{solution.description}</p>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-slate-900">Key Features:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {solution.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-slate-600 group">
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${solution.gradient} mr-3 group-hover:scale-110 transition-transform duration-300`}
                          ></div>
                          <span className="font-light">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-2xl font-light text-slate-900">Open Source Technologies:</h3>
                    <div className="flex flex-wrap gap-3">
                      {solution.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className={`text-amber-600 ${solution.accent} bg-amber-50/50 px-4 py-2 hover:scale-105 transition-transform duration-300`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-8 py-4 rounded-full shadow-xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                    asChild
                  >
                    <Link href="/contact">
                      <Sparkles className="mr-3 h-5 w-5" />
                      Get Started
                    </Link>
                  </Button>
                </div>

                <div className={`relative animate-fade-in-right ${index % 2 === 1 ? "lg:col-start-1" : ""}`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-3xl blur-3xl transform -rotate-6"></div>
                  <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 shadow-2xl border border-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>
                    <Image
                      src={solution.image || "/placeholder.svg"}
                      alt={solution.title}
                      width={500}
                      height={400}
                      className="rounded-2xl shadow-lg relative z-10"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Technologies Showcase */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
            >
              <Code className="w-4 h-4 mr-2" />
              Open Source Excellence
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
              Powered by
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Leading Open Source Technologies
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              We leverage the power of open source technologies to deliver robust, scalable, and cost-effective
              solutions that drive innovation and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "React & Next.js",
                description: "Modern web development framework",
                image: "/placeholder.svg?height=200&width=200&text=React+Logo",
                gradient: "from-cyan-400 to-blue-500",
              },
              {
                name: "Node.js & Express",
                description: "Server-side JavaScript runtime",
                image: "/placeholder.svg?height=200&width=200&text=Node.js+Logo",
                gradient: "from-green-400 to-emerald-500",
              },
              {
                name: "Python & Django",
                description: "Powerful backend development",
                image: "/placeholder.svg?height=200&width=200&text=Python+Logo",
                gradient: "from-yellow-400 to-amber-500",
              },
              {
                name: "Docker & Kubernetes",
                description: "Container orchestration",
                image: "/placeholder.svg?height=200&width=200&text=Docker+K8s+Logo",
                gradient: "from-blue-400 to-indigo-500",
              },
              {
                name: "PostgreSQL & MongoDB",
                description: "Database solutions",
                image: "/placeholder.svg?height=200&width=200&text=Database+Logos",
                gradient: "from-purple-400 to-violet-500",
              },
              {
                name: "TensorFlow & PyTorch",
                description: "Machine learning frameworks",
                image: "/placeholder.svg?height=200&width=200&text=ML+Frameworks",
                gradient: "from-orange-400 to-red-500",
              },
              {
                name: "Vue.js & Angular",
                description: "Frontend frameworks",
                image: "/placeholder.svg?height=200&width=200&text=Vue+Angular+Logo",
                gradient: "from-teal-400 to-cyan-500",
              },
              {
                name: "Apache & Nginx",
                description: "Web server technologies",
                image: "/placeholder.svg?height=200&width=200&text=Web+Server+Logos",
                gradient: "from-rose-400 to-pink-500",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="group hover:scale-105 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border-0 relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tech.gradient}`}></div>
                  <div className="text-center space-y-6">
                    <div className="relative mx-auto w-20 h-20">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-2xl blur-xl opacity-30`}
                      ></div>
                      <Image
                        src={tech.image || "/placeholder.svg"}
                        alt={tech.name}
                        width={80}
                        height={80}
                        className="rounded-2xl relative z-10 mx-auto"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 text-lg mb-2">{tech.name}</h3>
                      <p className="text-slate-600 font-light text-sm">{tech.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
              Ready to Transform Your
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Business?
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Let's discuss how our open source solutions can help you achieve your business objectives and drive
              digital transformation with proven, reliable technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                asChild
              >
                <Link href="/contact">
                  <Crown className="mr-3 h-5 w-5" />
                  Start Your Project
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:border-amber-400/50"
                asChild
              >
                <Link href="/about">
                  <ArrowRight className="mr-3 h-5 w-5" />
                  Learn More About Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
