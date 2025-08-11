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
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We believe that innovation is key to solving complex business challenges. We foster a culture that encourages creative thinking and the continuous exploration of new technologies and methodologies.",
      gradient: "from-amber-400 via-yellow-500 to-amber-600",
      accent: "border-amber-200",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Integrity",
      description:
        "Trust is the foundation of all our relationships. We uphold integrity in everything we do — from transparent communication with clients to delivering high-quality results.",
      gradient: "from-blue-400 via-indigo-500 to-blue-600",
      accent: "border-blue-200",
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Customer-Centricity",
      description:
        "Our clients are at the center of everything we do. We take the time to understand their goals and challenges, crafting tailored solutions that meet their specific needs.",
      gradient: "from-rose-400 via-pink-500 to-rose-600",
      accent: "border-rose-200",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description:
        "Excellence is our standard. We strive for the highest level of quality in every project, from initial consultation to final delivery.",
      gradient: "from-violet-400 via-purple-500 to-violet-600",
      accent: "border-violet-200",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description:
        "We believe that the best results come from working together. We foster a collaborative environment both within our team and with our clients.",
      gradient: "from-emerald-400 via-teal-500 to-emerald-600",
      accent: "border-emerald-200",
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Learning & Growth",
      description:
        "The tech landscape is constantly changing, and we are committed to staying ahead. Continuous learning is part of our DNA.",
      gradient: "from-cyan-400 via-blue-500 to-cyan-600",
      accent: "border-cyan-200",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Accountability",
      description:
        "We take responsibility for our actions, results, and commitments. We hold ourselves accountable to deliver on our promises.",
      gradient: "from-slate-400 via-gray-500 to-slate-600",
      accent: "border-slate-200",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Sustainability",
      description:
        "We believe in creating solutions that not only benefit our clients today but also contribute to a more sustainable and responsible future.",
      gradient: "from-green-400 via-emerald-500 to-green-600",
      accent: "border-green-200",
    },
  ]

  const services = [
    {
      title: "Software Development",
      description:
        "Whether you need a custom application, mobile app, or enterprise software solution, we have the expertise to design and develop robust systems tailored to your needs.",
      gradient: "from-amber-400 to-yellow-500",
    },
    {
      title: "Consulting",
      description:
        "Our consulting services help businesses navigate the complexities of the modern tech landscape. We provide expert guidance for digital transformation, IT strategy, and business process optimization.",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      title: "Training",
      description:
        "In a fast-paced world, continuous learning is essential. Our training services empower teams with the skills and knowledge they need to stay competitive.",
      gradient: "from-emerald-400 to-teal-500",
    },
  ]

  const whyChooseUs = [
    {
      title: "Proven Track Record",
      description:
        "With years of experience in delivering high-quality software solutions, we have a history of success across multiple industries.",
    },
    {
      title: "Customer-Focused Approach",
      description: "We take the time to understand your business and craft solutions that fit your unique needs.",
    },
    {
      title: "Skilled Experts",
      description:
        "Our team consists of highly skilled professionals with deep expertise in software development, consulting, and training.",
    },
    {
      title: "End-to-End Support",
      description:
        "From initial consultation through post-launch support, we're with you every step of the way, ensuring long-term success.",
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
              <Crown className="w-4 h-4 mr-2" />
              About Immense Brains
            </Badge>
            <h1 className="text-6xl lg:text-8xl font-light text-white leading-tight tracking-tight mb-8">
              Your Partner in
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Digital Success
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
              At Immense Brains, we are more than just a service provider — we are a partner committed to driving
              business success through innovative technology solutions. Our expertise spans software development,
              consulting, and training services.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 animate-fade-in-left">
              <div>
                <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Our Story
                </Badge>
                <h2 className="text-5xl font-light text-slate-900 mb-8 tracking-tight">
                  Founded on
                  <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    Excellence & Integrity
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light mb-6">
                  Founded on the principles of excellence, integrity, and customer satisfaction, Immense Brains has
                  quickly established itself as a trusted partner for businesses across various industries.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-light mb-6">
                  Whether you're looking to optimize business processes, develop custom software, or train your team in
                  new technologies, we have the experience and expertise to make your vision a reality.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Our team of highly skilled professionals combines years of experience in diverse technologies and
                  industries, ensuring that we bring best-in-class solutions to our clients.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-3xl blur-3xl transform -rotate-6"></div>
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 shadow-2xl border border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Team+Collaboration"
                  alt="Our Team"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
            >
              <Target className="w-4 h-4 mr-2" />
              Vision & Mission
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
              Our
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Purpose & Direction
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-10 hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-light text-slate-900 mb-6">Vision</h3>
              <p className="text-slate-700 leading-relaxed font-light text-lg mb-4">
                Our vision is to be a global leader in providing innovative technology solutions that empower businesses
                to thrive in a constantly evolving digital world.
              </p>
              <p className="text-slate-700 leading-relaxed font-light text-lg">
                We envision a future where businesses can leverage cutting-edge technologies to solve their most complex
                challenges, foster growth, and achieve excellence across all areas of their operations.
              </p>
            </Card>

            <Card className="p-10 hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-400"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl flex items-center justify-center mb-8 shadow-xl">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-light text-slate-900 mb-6">Mission</h3>
              <p className="text-slate-700 leading-relaxed font-light text-lg mb-4">
                Our mission is to deliver high-quality software development, strategic consulting, and comprehensive
                training services that help businesses unlock their full potential.
              </p>
              <p className="text-slate-700 leading-relaxed font-light text-lg">
                By staying ahead of emerging technologies and continually refining our skills, we aim to provide
                innovative solutions that create measurable impact and foster continuous improvement.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              Core Values
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight">
              Values That
              <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Guide Everything We Do
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              At Immense Brains, our core values guide everything we do — from how we work with clients to how we
              approach each project. These values are at the heart of our culture and drive us to deliver exceptional
              outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 animate-fade-in-up shadow-lg ${value.accent} border-2 border-opacity-20`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-6 pt-8">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                    <div className="relative z-10">{value.icon}</div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-amber-600 transition-colors duration-300 font-light">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed text-base font-light">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
              Comprehensive
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-10 hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 shadow-lg relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
                <h3 className="font-semibold text-slate-900 text-2xl mb-6">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light text-lg">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
              <CheckCircle className="w-4 h-4 mr-2" />
              Why Choose Us
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight">
              Why Choose
              <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Immense Brains?
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 shadow-lg relative overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-xl mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed font-light text-lg">{item.description}</p>
                  </div>
                </div>
              </Card>
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
                Business Together?
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              At Immense Brains, we're more than just a technology provider. We're your partner in creating lasting
              success. Let us help you transform your business through innovative solutions and expert guidance.
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
                <Link href="/solutions">
                  <ArrowRight className="mr-3 h-5 w-5" />
                  View Our Solutions
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
