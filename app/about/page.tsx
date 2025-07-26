import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Target,
  Award,
  Lightbulb,
  ArrowRight,
  Crown,
  Sparkles,
  Shield,
  Heart,
  BookOpen,
  CheckCircle,
  Zap,
  Globe,
  TrendingUp,
  Code,
  MessageSquare,
  GraduationCap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Innovation",
      description:
        "We believe that innovation is key to solving complex business challenges. We foster a culture that encourages creative thinking and the continuous exploration of new technologies and methodologies.",
      details: [
        "Embracing cutting-edge technologies and emerging trends",
        "Encouraging creative problem-solving approaches",
        "Continuous research and development initiatives",
        "Staying ahead of industry developments and market changes",
      ],
      gradient: "from-amber-400 via-yellow-500 to-amber-600",
      accent: "border-amber-200",
      bgGradient: "from-amber-50 to-yellow-50",
    },
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Integrity",
      description:
        "Trust is the foundation of all our relationships. We uphold integrity in everything we do — from transparent communication with clients to delivering high-quality results.",
      details: [
        "Transparent and honest communication",
        "Ethical business practices and decision-making",
        "Reliable delivery on promises and commitments",
        "Building long-term trust-based relationships",
      ],
      gradient: "from-blue-400 via-indigo-500 to-blue-600",
      accent: "border-blue-200",
      bgGradient: "from-blue-50 to-indigo-50",
    },
    {
      icon: <Heart className="h-10 w-10" />,
      title: "Customer-Centricity",
      description:
        "Our clients are at the center of everything we do. We take the time to understand their goals and challenges, crafting tailored solutions that meet their specific needs.",
      details: [
        "Deep understanding of client business objectives",
        "Customized solutions for unique requirements",
        "Responsive support and ongoing partnership",
        "Exceeding expectations through dedicated service",
      ],
      gradient: "from-rose-400 via-pink-500 to-rose-600",
      accent: "border-rose-200",
      bgGradient: "from-rose-50 to-pink-50",
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Excellence",
      description:
        "Excellence is our standard. We strive for the highest level of quality in every project, from initial consultation to final delivery.",
      details: [
        "Rigorous quality assurance processes",
        "Continuous improvement and refinement",
        "Industry best practices and standards",
        "Commitment to delivering superior results",
      ],
      gradient: "from-emerald-400 via-teal-500 to-emerald-600",
      accent: "border-emerald-200",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Collaboration",
      description:
        "We believe that the best results come from working together. We foster a collaborative environment both within our team and with our clients.",
      details: [
        "Cross-functional teamwork and knowledge sharing",
        "Active client involvement in project development",
        "Open communication and feedback loops",
        "Leveraging diverse perspectives and expertise",
      ],
      gradient: "from-violet-400 via-purple-500 to-violet-600",
      accent: "border-violet-200",
      bgGradient: "from-violet-50 to-purple-50",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Learning & Growth",
      description:
        "The tech landscape is constantly changing, and we are committed to staying ahead. Continuous learning is part of our DNA.",
      details: [
        "Regular training and skill development programs",
        "Staying current with emerging technologies",
        "Knowledge sharing and mentorship culture",
        "Investment in professional development",
      ],
      gradient: "from-orange-400 via-amber-500 to-orange-600",
      accent: "border-orange-200",
      bgGradient: "from-orange-50 to-amber-50",
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: "Accountability",
      description:
        "We take responsibility for our actions, results, and commitments. We hold ourselves accountable to deliver on our promises.",
      details: [
        "Clear ownership and responsibility structures",
        "Regular progress tracking and reporting",
        "Proactive issue identification and resolution",
        "Commitment to meeting deadlines and budgets",
      ],
      gradient: "from-slate-400 via-gray-500 to-slate-600",
      accent: "border-slate-200",
      bgGradient: "from-slate-50 to-gray-50",
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Sustainability",
      description:
        "We believe in creating solutions that not only benefit our clients today but also contribute to a more sustainable and responsible future.",
      details: [
        "Environmentally conscious development practices",
        "Long-term sustainable solution design",
        "Social responsibility and community impact",
        "Future-proof technology implementations",
      ],
      gradient: "from-green-400 via-emerald-500 to-green-600",
      accent: "border-green-200",
      bgGradient: "from-green-50 to-emerald-50",
    },
  ]

  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Software Development",
      description:
        "Whether you need a custom application, mobile app, or enterprise software solution, we have the expertise to design and develop robust systems tailored to your needs.",
      features: [
        "Custom Web Applications",
        "Mobile App Development",
        "Enterprise Software Solutions",
        "API Development & Integration",
        "Cloud-Based Solutions",
        "Legacy System Modernization",
      ],
      gradient: "from-amber-400 via-yellow-500 to-amber-600",
      bgGradient: "from-amber-50 to-yellow-50",
    },
    {
      icon: <MessageSquare className="h-12 w-12" />,
      title: "Consulting",
      description:
        "Our consulting services help businesses navigate the complexities of the modern tech landscape. We provide expert guidance to help you achieve your goals and drive innovation.",
      features: [
        "Digital Transformation Strategy",
        "IT Architecture & Planning",
        "Business Process Optimization",
        "Technology Assessment",
        "Project Management",
        "Risk Assessment & Mitigation",
      ],
      gradient: "from-emerald-400 via-teal-500 to-emerald-600",
      bgGradient: "from-emerald-50 to-teal-50",
    },
    {
      icon: <GraduationCap className="h-12 w-12" />,
      title: "Training",
      description:
        "In a fast-paced world, continuous learning is essential. Our training services empower teams with the skills and knowledge they need to stay competitive.",
      features: [
        "Custom Training Programs",
        "Technology Workshops",
        "Team Skill Development",
        "Certification Preparation",
        "Ongoing Support & Mentoring",
        "Knowledge Transfer Sessions",
      ],
      gradient: "from-violet-400 via-purple-500 to-violet-600",
      bgGradient: "from-violet-50 to-purple-50",
    },
  ]

  const whyChooseUs = [
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Proven Track Record",
      description:
        "Years of experience delivering high-quality software solutions across multiple industries with measurable results and client satisfaction.",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer-Focused Approach",
      description:
        "We understand your business and craft solutions that fit your unique needs, ensuring alignment with your goals and objectives.",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Skilled Experts",
      description:
        "Highly skilled professionals with deep expertise in software development, consulting, and training across diverse technologies.",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "End-to-End Support",
      description:
        "From initial consultation through post-launch support, we're with you every step of the way, ensuring long-term success.",
    },
  ]

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-black py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-violet-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-8 text-amber-300 border-amber-200/30 bg-amber-50/10 px-8 py-3 backdrop-blur-sm text-lg"
            >
              <Crown className="w-5 h-5 mr-3" />
              About Immense Brains
            </Badge>
            <h1 className="text-7xl lg:text-9xl font-light text-white leading-tight tracking-tight mb-12">
              Your Partner in
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Digital Success
              </span>
            </h1>
            <p className="text-2xl text-slate-300 leading-relaxed font-light max-w-5xl mx-auto mb-8">
              At Immense Brains, we are more than just a service provider — we are a partner committed to driving
              business success through innovative technology solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-slate-400">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-amber-400" />
                <span>Software Development</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>Consulting</span>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-violet-400" />
                <span>Training</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12 animate-fade-in-left">
              <div>
                <Badge variant="outline" className="mb-8 text-amber-600 border-amber-200 bg-amber-50 px-8 py-3 text-lg">
                  <Sparkles className="w-5 h-5 mr-3" />
                  Our Foundation
                </Badge>
                <h2 className="text-6xl font-light text-slate-900 mb-10 tracking-tight leading-tight">
                  Built on
                  <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    Excellence & Integrity
                  </span>
                </h2>
                <div className="space-y-8">
                  <p className="text-2xl text-slate-600 leading-relaxed font-light">
                    Our expertise spans software development, consulting, and training services, and we focus on
                    delivering tailored solutions that meet the unique needs of each client.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed font-light">
                    Founded on the principles of excellence, integrity, and customer satisfaction, Immense Brains has
                    quickly established itself as a trusted partner for businesses across various industries.
                  </p>
                  <p className="text-xl text-slate-600 leading-relaxed font-light">
                    Our team of highly skilled professionals combines years of experience in diverse technologies and
                    industries, ensuring that we bring best-in-class solutions to our clients.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-3xl blur-3xl transform -rotate-6"></div>
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-12 shadow-2xl border border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>
                <Image
                  src="/placeholder.svg?height=600&width=700&text=Team+Collaboration"
                  alt="Our Team"
                  width={700}
                  height={600}
                  className="rounded-2xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-8 text-amber-300 border-amber-200/30 bg-amber-50/10 px-8 py-3 backdrop-blur-sm text-lg"
            >
              <Target className="w-5 h-5 mr-3" />
              Vision & Mission
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-light text-white mb-10 tracking-tight">
              Our
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Purpose & Direction
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 max-w-7xl mx-auto">
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
              <CardHeader className="pb-8 pt-12">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center text-white mb-8 shadow-2xl mx-auto">
                  <Globe className="h-10 w-10" />
                </div>
                <CardTitle className="text-4xl font-light text-slate-900 text-center mb-6">Vision</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-12">
                <p className="text-slate-600 leading-relaxed font-light text-xl text-center">
                  Our vision is to be a global leader in providing innovative technology solutions that empower
                  businesses to thrive in a constantly evolving digital world. We aim to drive growth, streamline
                  operations, and unlock new opportunities for our clients, creating long-term success through our
                  expertise in software development, consulting, and training.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105">
              <CardHeader className="pb-8 pt-12">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white mb-8 shadow-2xl mx-auto">
                  <Target className="h-10 w-10" />
                </div>
                <CardTitle className="text-4xl font-light text-slate-900 text-center mb-6">Mission</CardTitle>
              </CardHeader>
              <CardContent className="px-8 pb-12">
                <p className="text-slate-600 leading-relaxed font-light text-xl text-center">
                  Our mission is to deliver high-quality software development, strategic consulting, and comprehensive
                  training services that help businesses unlock their full potential. We are dedicated to providing
                  customized solutions that drive tangible results, improve efficiency, and empower organizations to
                  achieve their business goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 animate-fade-in-up">
            <Badge variant="outline" className="mb-8 text-amber-600 border-amber-200 bg-amber-50 px-8 py-3 text-lg">
              <Award className="w-5 h-5 mr-3" />
              Core Values
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-light text-slate-900 mb-10 tracking-tight">
              Our
              <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Guiding Principles
              </span>
            </h2>
            <p className="text-2xl text-slate-600 max-w-5xl mx-auto font-light leading-relaxed">
              These values are at the heart of our culture and drive us to deliver exceptional outcomes for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-700 border-0 bg-gradient-to-br ${value.bgGradient} hover:scale-105 animate-fade-in-up shadow-lg hover:shadow-xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-6 pt-10">
                  <div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-2xl relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                    <div className="relative z-10">{value.icon}</div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-amber-600 transition-colors duration-300 font-light text-center mb-4">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-8">
                  <CardDescription className="text-slate-700 leading-relaxed font-light text-base mb-6 text-center">
                    {value.description}
                  </CardDescription>
                  <div className="space-y-3">
                    {value.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-slate-600 text-sm font-light leading-relaxed">{detail}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24 animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-8 text-amber-300 border-amber-200/30 bg-amber-50/10 px-8 py-3 backdrop-blur-sm text-lg"
            >
              <Zap className="w-5 h-5 mr-3" />
              Our Services
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-light text-white mb-10 tracking-tight">
              Comprehensive
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-8xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${service.bgGradient} border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-8 pt-12">
                  <div
                    className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-8 shadow-2xl mx-auto`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-3xl font-light text-slate-900 text-center mb-6">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-12">
                  <p className="text-slate-700 leading-relaxed font-light text-lg mb-8 text-center">
                    {service.description}
                  </p>
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex-shrink-0"></div>
                        <p className="text-slate-600 font-light">{feature}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 animate-fade-in-up">
            <Badge variant="outline" className="mb-8 text-amber-600 border-amber-200 bg-amber-50 px-8 py-3 text-lg">
              <CheckCircle className="w-5 h-5 mr-3" />
              Why Choose Us
            </Badge>
            <h2 className="text-6xl lg:text-7xl font-light text-slate-900 mb-10 tracking-tight">
              Your Partner in
              <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Lasting Success
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-700 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 animate-fade-in-up shadow-lg"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-6 pt-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 mx-auto mb-6">
                    <div className="text-white">{reason.icon}</div>
                  </div>
                  <CardTitle className="text-2xl font-light text-slate-900 text-center group-hover:text-amber-600 transition-colors duration-300">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-10">
                  <p className="text-slate-600 font-light text-lg leading-relaxed text-center">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/10 to-yellow-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-rose-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto space-y-12 animate-fade-in-up">
            <h2 className="text-7xl lg:text-8xl font-light text-white tracking-tight">
              Ready to Transform Your
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Business Together?
              </span>
            </h2>
            <p className="text-2xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
              At Immense Brains, we're more than just a technology provider. We're your partner in creating lasting
              success. Let us help you transform your business through innovative solutions and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-12 py-6 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0 text-lg"
                asChild
              >
                <Link href="/contact">
                  <Crown className="mr-4 h-6 w-6" />
                  Start Your Project
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent px-12 py-6 rounded-full font-semibold transition-all duration-300 hover:border-amber-400/50 text-lg"
                asChild
              >
                <Link href="/solutions">
                  <ArrowRight className="mr-4 h-6 w-6" />
                  Explore Our Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
