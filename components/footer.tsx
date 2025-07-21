import Link from "next/link"
import { Mail, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-gradient-to-br from-amber-400/5 to-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-gradient-to-br from-emerald-400/5 to-teal-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center">
                  <span className="text-black font-bold text-xl">IB</span>
                </div>
                <div>
                  <h3 className="text-2xl font-light">Immense Brains</h3>
                  <p className="text-white/70 text-sm">IT Consulting Excellence</p>
                </div>
              </div>
              <p className="text-white/80 font-light leading-relaxed mb-6 max-w-md">
                Delivering cutting-edge IT solutions and consulting services to businesses across the United States. We
                specialize in Oracle Fusion, Data Engineering, and enterprise technology implementations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-amber-300" />
                  <a href="mailto:HR@immensebrains.com" className="text-white/80 hover:text-white transition-colors">
                    HR@immensebrains.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-300" />
                  <span className="text-white/80">
                    6760 Corporate Drive, Suite 100
                    <br />
                    Colorado Springs, CO 80919
                  </span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-light mb-6">Our Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/solutions" className="text-white/70 hover:text-white transition-colors font-light">
                    Oracle Fusion Development
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-white/70 hover:text-white transition-colors font-light">
                    Data Engineering
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-white/70 hover:text-white transition-colors font-light">
                    Enterprise Solutions
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-white/70 hover:text-white transition-colors font-light">
                    IT Consulting
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="text-white/70 hover:text-white transition-colors font-light">
                    System Integration
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-light mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white transition-colors font-light">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-white/70 hover:text-white transition-colors font-light">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employee-referral"
                    className="text-white/70 hover:text-white transition-colors font-light"
                  >
                    Employee Referral
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/70 hover:text-white transition-colors font-light">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/admin" className="text-white/70 hover:text-white transition-colors font-light">
                    Admin Portal
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/60 font-light text-sm">© 2025 Immense Brains. Crafted with excellence.</p>
              <div className="flex items-center gap-6">
                <Link href="/careers" className="text-white/60 hover:text-white transition-colors text-sm font-light">
                  Join Our Team
                </Link>
                <Link href="/solutions" className="text-white/60 hover:text-white transition-colors text-sm font-light">
                  Our Solutions
                </Link>
                <a
                  href="mailto:HR@immensebrains.com"
                  className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-light"
                >
                  Contact HR
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
