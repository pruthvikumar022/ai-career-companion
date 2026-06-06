'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <span className="text-xl font-bold text-white hidden sm:inline">CareerAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-gray-300 hover:text-white transition">
            Features
          </Link>
          <Link href="#how-it-works" className="text-gray-300 hover:text-white transition">
            How It Works
          </Link>
          <Link href="#testimonials" className="text-gray-300 hover:text-white transition">
            Testimonials
          </Link>
        </div>

        {/* CTA Button - Desktop */}
        <div className="hidden md:flex gap-4 items-center">
          <Link
            href="/upload"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-white/10 p-4 space-y-4"
        >
          <Link href="#features" className="block text-gray-300 hover:text-white transition">
            Features
          </Link>
          <Link href="#how-it-works" className="block text-gray-300 hover:text-white transition">
            How It Works
          </Link>
          <Link href="#testimonials" className="block text-gray-300 hover:text-white transition">
            Testimonials
          </Link>
          <Link
            href="/upload"
            className="block w-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all text-center"
          >
            Get Started
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
