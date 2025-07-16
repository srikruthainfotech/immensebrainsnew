import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Smartphone, Cloud, Database, Shield, Zap, Star, CheckCircle, Sparkles, Crown, Award } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Bespoke Software Development",
      description: "Meticulously crafted software solutions tailored to your unique business vision and requirements.",
      gradient: "from-amber-400 via-yellow-500 to-amber-600",
      accent: "border-amber-200",
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Premium Mobile Applications",
      description: "Exquisite mobile experiences that captivate users and elevate your brand presence.",
      gradient: "from-rose-400 via-pink-500 to-rose-600",
      accent: "border-rose-200",
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Enterprise Cloud Solutions",
      description: "Sophisticated cloud infrastructure designed for scalability, security, and performance excellence.",
      gradient: "from-emerald-400 via-teal-500 to-emerald-600",
      accent: "border-emerald-200",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Advanced Data Intelligence",
      description: "Transform complex data into strategic insights with our cutting-edge analytics platforms.",
      gradient: "from-violet-400 via-purple-500 to-violet-600",
      accent: "border-violet-200",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Elite Cybersecurity",
      description: "Military-grade security solutions to protect your most valuable digital assets.",
      gradient: "from-slate-400 via-gray-500 to-slate-600",
      accent: "border-slate-200",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "AI & Machine Learning Excellence",
      description: "Revolutionary artificial intelligence solutions that redefine what's possible for your business.",
      gradient: "from-orange-400 via-amber-500 to-orange-600",
      accent: "border-orange-200",
    },
  ]

  const testimonials = [
    {
      name: "Victoria Sterling",
      role: "CEO, Sterling Enterprises",
      content:
        "Immense Brains delivered a solution that exceeded our highest expectations. Their attention to detail and commitment to excellence is unparalleled.",
      rating: 5,
      company: "Fortune 500",
    },
    {
      name: "Alexander Chen",
      role: "CTO, Quantum Dynamics",
      content:
        "Working with Immense Brains was transformative. They don't just build software; they craft digital masterpieces.",
      rating: 5,
      company: "Tech Unicorn",
    },
    {
      name: "Isabella Rodriguez",
      role: "Founder, Luxe Digital",
      content:
        "The level of sophistication and innovation they brought to our project was extraordinary. Truly world-class.",
      rating: 5,
      company: "Luxury Brand",
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10 animate-fade-in-up">
              <div className="space-y-8">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-light text-white leading-tight tracking-tight">
                    Crafting
                    <span className="block font-semibold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                      Digital Excellence
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-slate-300 leading-relaxed font-light max-w-lg">
                  We create extraordinary software solutions that embody sophistication, innovation, and uncompromising
                  quality for discerning businesses.
                </p>
              </div>
              <div className="flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-8 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                  asChild
                >
                  <Link href="/solutions">
                    <Sparkles className="mr-3 h-5 w-5" />
                    Explore Our Craft
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/30 to-rose-400/30 rounded-3xl blur-3xl transform rotate-6"></div>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
                  <Image
                    src="/images/hero-software-development.png"
                    alt="Modern Software Development Workspace"
                    width={600}
                    height={500}
                    className="rounded-2xl relative z-10 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
              <Award className="w-4 h-4 mr-2" />
              Premium Services
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight">
              Exceptional
              <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Solutions & Services
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Our curated portfolio of premium services represents the pinnacle of software craftsmanship, designed for
              organizations that demand nothing less than perfection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`group hover:shadow-2xl transition-all duration-700 border-0 bg-white/80 backdrop-blur-sm hover:scale-105 animate-fade-in-up hover:bg-white shadow-lg ${service.accent} border-2 border-opacity-20`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-6 pt-8">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                    <div className="relative z-10">{service.icon}</div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-amber-600 transition-colors duration-300 font-light">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed text-base font-light">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { number: "50+", label: "Masterpieces Delivered", icon: "💎", gradient: "from-amber-400 to-yellow-500" },
              { number: "200+", label: "Elite Clients", icon: "👑", gradient: "from-rose-400 to-pink-500" },
              { number: "50+", label: "Master Craftsmen", icon: "🏆", gradient: "from-emerald-400 to-teal-500" },
              { number: "8+", label: "Years of Excellence", icon: "⭐", gradient: "from-violet-400 to-purple-500" },
            ].map((stat, index) => (
              <div
                key={index}
                className="space-y-6 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className={`text-6xl font-light text-transparent bg-gradient-to-r ${stat.gradient} bg-clip-text`}>
                  {stat.number}
                </div>
                <div className="text-slate-300 font-light text-lg tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
              <Star className="w-4 h-4 mr-2" />
              Client Testimonials
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-slate-900 mb-8 tracking-tight">
              What Our
              <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                Distinguished Clients Say
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              Hear from industry leaders who have experienced the transformative power of our premium solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-10 hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:scale-105 animate-fade-in-up shadow-lg relative overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400"></div>

                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="text-slate-700 mb-8 italic text-lg leading-relaxed font-light">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-lg">{testimonial.name}</div>
                    <div className="text-slate-600 font-light">{testimonial.role}</div>
                    <div className="text-amber-600 text-sm font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 animate-fade-in-left">
              <div>
                <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  The Immense Brains Difference
                </Badge>
                <h2 className="text-5xl font-light text-slate-900 mb-8 tracking-tight">
                  Uncompromising
                  <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    Excellence in Every Detail
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  Our commitment to perfection and innovation sets us apart in the world of premium software
                  development.
                </p>
              </div>

              <div className="space-y-8">
                {[
                  "White-glove development methodology",
                  "24/7 concierge support & maintenance",
                  "Enterprise-grade security & scalability",
                  "Guaranteed on-time delivery excellence",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-6 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-slate-700 font-light text-lg group-hover:text-amber-600 transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-3xl blur-3xl transform -rotate-6"></div>
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 shadow-2xl border border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>
                <Image
                  src="/placeholder.svg?height=500&width=600&text=Premium+Development+Process"
                  alt="Premium Development Process"
                  width={600}
                  height={500}
                  className="rounded-2xl relative z-10"
                />
              </div>
            </div>
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
              Ready to Create Something
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Extraordinary?
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Let's collaborate to bring your vision to life with unparalleled craftsmanship and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center pt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 hover:from-amber-500 hover:via-yellow-600 hover:to-amber-500 text-black font-semibold px-10 py-4 rounded-full shadow-2xl hover:shadow-amber-500/25 transition-all duration-500 transform hover:scale-105 border-0"
                asChild
              >
                <Link href="/contact">
                  <Crown className="mr-3 h-5 w-5" />
                  Begin Your Journey
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm bg-transparent px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:border-amber-400/50"
                asChild
              >
                <Link href="/careers">
                  <Sparkles className="mr-3 h-5 w-5" />
                  Join Our Elite Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
