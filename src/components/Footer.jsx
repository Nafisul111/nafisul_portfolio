// components/Footer.jsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Code2, ArrowUp, Github, Linkedin, Twitter, Mail, Send } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const socialLinks = [
        { icon: Github, href: 'https://github.com/nafisul111', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/nafisul-hasan-siddiqui-4a5a60316/', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
        { icon: Mail, href: 'mailto:nafisulhasan072@gmail.com', label: 'Email' },
    ]

    const quickLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ]

    const handleSubmit = (e) => {
        e.preventDefault()
        // Add your newsletter subscription logic here
        console.log('Newsletter subscription')
    }

    if (!mounted) {
        return (
            <footer className="relative bg-dark/50 border-t border-white/10 w-full overflow-x-hidden">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div className="col-span-1 h-32" />
                        <div className="col-span-1 h-32" />
                        <div className="col-span-1 h-32" />
                        <div className="col-span-1 h-32" />
                    </div>
                </div>
            </footer>
        )
    }

    return (
        <footer className="relative bg-dark/50 border-t border-white/10 w-full overflow-x-hidden">
            {/* Decorative gradient line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary to-transparent" />

            <div className="container mx-auto px-4 py-12 max-w-full overflow-hidden">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 ">
                    {/* Brand Section */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Code2 className="w-6 h-6 text-primary shrink-0" />
                            <span className="text-xl font-bold gradient-text">Nafisul Hasan</span>
                        </div>
                        <p className="text-sm text-light/40 leading-relaxed">
                            Full-Stack MERN Developer crafting digital experiences that matter.
                            Turning complex problems into beautiful, interactive solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-light/60 mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-light/40 hover:text-primary transition-colors duration-300 inline-block"
                                        scroll={true}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect Section */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-light/60 mb-4">
                            Connect
                        </h4>
                        <div className="flex flex-wrap gap-3">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 glass-effect rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter/Updates */}
                    <div className="col-span-1">
                        <h4 className="text-sm font-semibold uppercase tracking-wider text-light/60 mb-4">
                            Stay Updated
                        </h4>
                        <p className="text-xs text-light/40 mb-3">
                            Get notified about new projects and tech insights
                        </p>
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Your email"
                                className=" w-full px-3 py-2 text-sm bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary transition-colors min-w-0"
                                required
                            />
                            <button
                                type="submit"
                                className="px-3 py-2 gradient-bg rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 whitespace-nowrap"
                            >
                                <span className='hidden sm:block'>Subscribe</span>
                                <Send size={14} className="block sm:hidden group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10">
                    {/* Copyright */}
                    <p className="text-xs text-light/30 flex items-center gap-1 flex-wrap justify-center">
                        © {new Date().getFullYear()} Nafisul Hasan. All rights reserved.
                        <span className="mx-2">|</span>
                        Crafted with
                        <Heart size={12} className="text-red-500 animate-pulse mx-1" />
                        using Next.js & Tailwind
                    </p>

                    {/* Legal Links */}
                    <div className="flex gap-4 text-xs flex-wrap justify-center">
                        <Link href="/privacy" className="text-light/30 hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-light/30 hover:text-primary transition-colors">
                            Terms of Service
                        </Link>
                    </div>

                    {/* Back to Top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 glass-effect rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all group flex-shrink-0"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={18} className="group-hover:text-primary transition-colors" />
                    </motion.button>
                </div>
            </div>

            {/* Floating decoration - with pointer-events-none to not interfere with clicks */}
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary/5 rounded-full filter blur-3xl -z-10 pointer-events-none" />
        </footer>
    )
}

export default Footer