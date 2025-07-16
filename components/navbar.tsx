"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    {
      name: "Careers",
      href: "/careers",
      dropdown: [
        { name: "Open Positions", href: "/careers" },
        { name: "Employee Referral", href: "/employee-referral" },
      ],
    },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-2xl shadow-2xl border-b border-slate-200/50"
          : "bg-white/90 backdrop-blur-xl border-b border-slate-200/30"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo - Increased size */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/logo.png"
                alt="Immense Brains"
                width={280}
                height={65}
                className="h-14 w-auto transition-all duration-500 group-hover:scale-105"
                style={{
                  filter: "hue-rotate(25deg) saturate(1.2) brightness(1.1) contrast(1.1)",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-rose-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center text-slate-700 hover:text-amber-600 font-light text-lg transition-all duration-300 group">
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white/95 backdrop-blur-xl border border-slate-200/50 shadow-xl">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem key={dropdownItem.name} asChild>
                        <Link
                          href={dropdownItem.href}
                          className="text-slate-700 hover:text-amber-600 font-light cursor-pointer"
                        >
                          {dropdownItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-slate-700 hover:text-amber-600 font-light text-lg transition-all duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ),
            )}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-amber-50 rounded-full">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[350px] bg-white/95 backdrop-blur-2xl border-l border-slate-200">
              <div className="flex flex-col space-y-8 mt-12">
                {navItems.map((item) =>
                  item.dropdown ? (
                    <div key={item.name} className="space-y-2">
                      <div className="text-slate-700 font-light text-xl py-3 px-6">{item.name}</div>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="text-slate-600 hover:text-amber-600 font-light text-lg py-2 px-8 rounded-xl hover:bg-amber-50 transition-all duration-300 block"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-slate-700 hover:text-amber-600 font-light text-xl py-3 px-6 rounded-xl hover:bg-amber-50 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ),
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
