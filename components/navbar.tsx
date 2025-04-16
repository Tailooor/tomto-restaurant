"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed top-0 w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-red-600">Tomto</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#menu" className="text-gray-700 hover:text-red-600 transition-colors">
              Menu
            </Link>
            <Link href="#hours" className="text-gray-700 hover:text-red-600 transition-colors">
              Hours
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </Link>
            <Link
              href="#reservation"
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
            >
              Reservation
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#menu"
              className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Menu
            </Link>
            <Link
              href="#hours"
              className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Hours
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              href="#reservation"
              className="block px-3 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              onClick={toggleMenu}
            >
              Reservation
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
