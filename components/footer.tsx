"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Linkedin, Twitter, Github, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      {/* Clean luxury background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-400/5 to-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-rose-400/5 to-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="relative group">
              <Image
                src="/logo.png"
                alt="Immense Brains"
                width={280}
                height={65}
                className="h-14 w-auto transition-all duration-500 group-hover:scale-105"
                style={{
                  filter: "brightness(0) invert(1) hue-rotate(25deg) saturate(1.2) brightness(1.1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-rose-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <p className="text-slate-300 leading-relaxed font-light text-lg">
              Crafting extraordinary software solutions with unparalleled attention to detail and sophistication.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Linkedin, href: "#", gradient: "from-blue-400 to-blue-600" },
                { icon: Twitter, href: "#", gradient: "from-cyan-400 to-blue-500" },
                { icon: Github, href: "#", gradient: "from-gray-400 to-gray-600" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gradient-to-br ${social.gradient} rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-lg shadow-lg`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8">
            <h3 className="text-xl font-light bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Navigation
            </h3>
            <div className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Solutions", href: "/solutions" },
                { name: "Careers", href: "/careers" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-slate-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-2 transform font-light text-lg"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="text-xl font-light bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Premium Services
            </h3>
            <div className="space-y-4">
              {[
                "Bespoke Software Development",
                "Premium Mobile Applications",
                "Enterprise Cloud Solutions",
                "AI & Machine Learning Excellence",
              ].map((service) => (
                <div
                  key={service}
                  className="text-slate-400 hover:text-amber-300 transition-all duration-300 cursor-pointer hover:translate-x-2 transform font-light"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-xl font-light bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <div className="space-y-6">
              {[
                { icon: Mail, text: "hello@immensebrains.com", gradient: "from-amber-400 to-yellow-500" },
                { icon: MapPin, text: "123 Luxury Lane, Silicon Valley", gradient: "from-emerald-400 to-teal-500" },
              ].map((contact, index) => {
                if (contact.icon === MapPin) {
                  return (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-slate-400 group-hover:text-white transition-colors duration-300 font-light">
                        6760 Corporate Drive, Suite 100, Colorado Springs, CO 80919
                      </span>
                    </div>
                  )
                }
                if (contact.icon === Mail) {
                  return (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${contact.gradient} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <contact.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-slate-400 group-hover:text-white transition-colors duration-300 font-light">
                        {contact.text}
                      </span>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-center md:text-left font-light">
            &copy; 2024 Immense Brains. Crafted with excellence.
          </p>
          <Button
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-amber-300 hover:bg-white/5 mt-6 md:mt-0 rounded-full px-6 py-2 font-light"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Return to Top
          </Button>
        </div>
      </div>
    </footer>
  )
}
