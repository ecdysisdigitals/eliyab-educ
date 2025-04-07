"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Flame, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-orange-900/20 bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative">
            <Flame className="h-7 w-7 text-orange-500 transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-orange-500 rounded-full filter blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-300"></div>
          </div>
          <span className="text-xl font-bold text-orange-500 transition-colors duration-300 group-hover:text-orange-400">
            E-LIYAB
          </span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6 text-orange-500" /> : <Menu className="h-6 w-6 text-orange-500" />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="nav-link text-white hover:text-orange-400 transition-colors duration-300 py-1">
            Pangunahing Pahina
          </Link>
          <Link
            href="/proseso"
            className="nav-link text-white hover:text-orange-400 transition-colors duration-300 py-1"
          >
            Proseso
          </Link>
          <Link
            href="/terminolohiya"
            className="nav-link text-white hover:text-orange-400 transition-colors duration-300 py-1"
          >
            Terminolohiya
          </Link>
          <Link
            href="/pagsusulit"
            className="nav-link text-white hover:text-orange-400 transition-colors duration-300 py-1"
          >
            Pagsusulit
          </Link>
        </nav>
      </div>

      {/* Mobile menu with enhanced animation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-orange-900/20 py-4 animate-fade-in">
          <nav className="flex flex-col space-y-4 px-6">
            <Link
              href="/"
              className="text-white hover:text-orange-400 transition-colors duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Pangunahing Pahina
            </Link>
            <Link
              href="/proseso"
              className="text-white hover:text-orange-400 transition-colors duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Proseso
            </Link>
            <Link
              href="/terminolohiya"
              className="text-white hover:text-orange-400 transition-colors duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Terminolohiya
            </Link>
            <Link
              href="/pagsusulit"
              className="text-white hover:text-orange-400 transition-colors duration-300 py-2 pl-2 border-l-2 border-transparent hover:border-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Pagsusulit
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

