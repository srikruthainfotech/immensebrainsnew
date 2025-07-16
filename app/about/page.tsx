import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Target, Award, Lightbulb, ArrowRight, Crown, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description:
        "We constantly push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.",
      gradient: "from-amber-400 via-yellow-500 to-amber-600",
      accent: "border-amber-200",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and work closely with our clients to achieve shared success.",
      gradient: "from-rose-400 via-pink-500 to-rose-600",
      accent: "border-rose-200",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Excellence",
      description: "We are committed to delivering high-quality solutions that exceed expectations and drive results.",
      gradient: "from-emerald-400 via-teal-500 to-emerald-600",
      accent: "border-emerald-200",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Integrity",
      description: "We conduct business with honesty, transparency, and respect for all stakeholders.",
      gradient: "from-violet-400 via-purple-500 to-violet-600",
      accent: "border-violet-200",
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
              Empowering Businesses Through
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Innovative Technology
              </span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-4xl mx-auto">
              Founded with a vision to transform businesses through technology, Immense Brains has been at the forefront
              of software development, delivering cutting-edge solutions that drive growth and innovation for companies
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 animate-fade-in-left">
              <div>
                <Badge variant="outline" className="mb-6 text-amber-600 border-amber-200 bg-amber-50 px-6 py-2">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Our Journey
                </Badge>
                <h2 className="text-5xl font-light text-slate-900 mb-8 tracking-tight">
                  Our
                  <span className="block font-bold bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-600 bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed font-light mb-6">
                  Immense Brains was founded in 2016 with a simple yet powerful mission: to help businesses harness the
                  power of technology to achieve their goals. What started as a small team of passionate developers has
                  grown into a leading software development company serving clients across various industries.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                  Over the years, we've successfully delivered 500+ projects, ranging from simple web applications to
                  complex enterprise solutions. Our commitment to excellence, innovation, and client satisfaction has
                  earned us the trust of businesses worldwide.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-light text-transparent bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text mb-2">
                    2016
                  </div>
                  <div className="text-sm text-slate-600 font-light">Founded</div>
                </Card>
                <Card className="text-center p-6 bg-gradient-to-br from-rose-50 to-pink-50 border-rose-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-4xl font-light text-transparent bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text mb-2">
                    500+
                  </div>
                  <div className="text-sm text-slate-600 font-light">Projects</div>
                </Card>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-rose-400/20 rounded-3xl blur-3xl transform -rotate-6"></div>
              <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-3xl p-10 shadow-2xl border border-slate-200">
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent rounded-3xl"></div>
                <Image
                  src="/modern-developer-office.png"
                  alt="Our Office"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/10 via-transparent to-rose-900/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20 animate-fade-in-up">
            <Badge
              variant="outline"
              className="mb-6 text-amber-300 border-amber-200/30 bg-amber-50/10 px-6 py-2 backdrop-blur-sm"
            >
              <Award className="w-4 h-4 mr-2" />
              Core Values
            </Badge>
            <h2 className="text-5xl lg:text-6xl font-light text-white mb-8 tracking-tight">
              Our
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              These values guide everything we do and shape our culture, relationships, and approach to work.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className={`text-center group hover:shadow-2xl transition-all duration-700 border-0 bg-white/90 backdrop-blur-sm hover:scale-105 animate-fade-in-up shadow-lg ${value.accent} border-2 border-opacity-20`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="pb-6 pt-8">
                  <div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-xl relative`}
                  >
                    <div className="absolute inset-0 bg-white/20 rounded-3xl blur-xl"></div>
                    <div className="relative z-10">{value.icon}</div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-amber-600 transition-colors duration-300 font-light">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed font-light">
                    {value.description}
                  </CardDescription>
                </CardContent>
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
              Ready to Work
              <span className="block font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
                Together?
              </span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed font-light max-w-3xl mx-auto">
              Let's discuss how our expertise and values can help transform your business through innovative technology
              solutions.
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
