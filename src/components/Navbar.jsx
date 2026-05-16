// components/Navbar.jsx
"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'Stories', href: '#about' },
        { name: 'Journey', href: '#experience' },
        { name: 'Creations', href: '#projects' },
        { name: 'Superpowers', href: '#skills' },
        { name: 'Connect', href: '#contact' },
    ]

    const handleLinkClick = () => {
        setIsOpen(false)
    }

    const handleResumeClick = () => {
       window.open('/Nafisul_Hasan_CV.pdf', '_blank', 'opener noreferrer');
    };

    if (!mounted) {
        return (
            <nav className={`fixed w-full z-50 transition-all duration-300 py-6`}>
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <Code2 className="w-8 h-8 text-primary" />
                            <span className="text-2xl font-bold gradient-text">Nafisul</span>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={mounted ? { y: 0 } : { y: -100 }}
                transition={{ duration: 0.5 }}
                className={`fixed w-full z-50 transition-all duration-300 overflow-x-hidden ${scrolled ? 'glass-effect py-4' : 'bg-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 max-w-full">
                    <div className="flex justify-between items-center">
                        <Link
                            href="#home"
                            className="flex items-center space-x-2 group"
                            onClick={handleLinkClick}
                        >
                            <Code2 className="w-8 h-8 text-primary group-hover:rotate-180 transition-transform duration-500 flex-shrink-0" />
                            <span className="text-2xl font-bold gradient-text">Nafisul</span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={item.href}
                                        className="text-light/80 hover:text-primary transition-colors duration-300 relative group"
                                        onClick={handleLinkClick}
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient-bg group-hover:w-full transition-all duration-300" />
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.button
                                initial={{ opacity: 0, scale: 0 }}
                                animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                transition={{ delay: 0.6 }}
                                onClick={handleResumeClick}
                                className="px-6 py-2 gradient-bg rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 whitespace-nowrap"
                            >
                                Resume
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden text-light relative z-50 p-2 glass-effect rounded-lg"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Mobile Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 w-64 h-full glass-effect lg:hidden z-50 overflow-y-auto"
                        >
                            <div className="flex flex-col items-center justify-center min-h-full py-20 px-4">
                                <div className="space-y-6 w-full">
                                    {navItems.map((item, index) => (
                                        <motion.div
                                            key={item.name}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="text-center"
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                className="text-xl text-light/80 hover:text-primary transition-colors block py-2"
                                            >
                                                {item.name}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="text-center pt-4"
                                    >
                                        <button
                                            onClick={handleResumeClick}
                                            className="px-8 py-3 gradient-bg rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 w-full"
                                        >
                                            Resume
                                        </button>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar