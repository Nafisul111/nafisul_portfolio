"use client"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    Mail,
    MapPin,
    Phone,
    Send,
    Clock,
    MessageCircle,
    Github,
    Linkedin,
    Twitter,
    Globe
} from 'lucide-react'
import { useState, useEffect } from 'react'

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        setSubmitStatus('success')
        setIsSubmitting(false)

        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'nafisulhasan072@gmail.com',
            link: 'mailto:nafisulhasan072@gmail.com',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 9554598319',
            link: 'tel:+919554598319',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Lucknow, India (Remote)',
            link: 'https://maps.google.com',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Clock,
            label: 'Available',
            value: 'Mon - Fri, 9AM - 6PM IST',
            link: null,
            color: 'from-orange-500 to-red-500',
        },
    ]

    const socialLinks = [
        { icon: Github, href: 'https://github.com/nafisul111', label: 'GitHub', username: '@nafisul' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/nafisul-hasan-siddiqui-4a5a60316/', label: 'LinkedIn', username: 'nafisul-hasan' },
        { icon: Twitter, href: 'https://twitter.com/', label: 'Twitter', username: '@nafisul' },
        { icon: Globe, href: 'https://whizbytes.in', label: 'Website', username: 'whizbytes.in' },
    ]

    // Don't render animations until component is mounted
    if (!mounted) {
        return (
            <section id="contact" className="py-12 sm:py-16 md:py-20 bg-dark/50 overflow-x-hidden w-full">
                <div className="container mx-auto px-3 sm:px-4">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-light/60 max-w-2xl mx-auto px-2">
                            Have a project in mind? I'd love to hear about it. Let's turn your ideas into reality.
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 min-h-[300px] sm:min-h-[350px] md:min-h-[400px]">
                        <div className="lg:col-span-2 glass-effect p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl" />
                        <div className="lg:col-span-3 glass-effect p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl" />
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="contact" className="py-12 sm:py-16 md:py-20 bg-dark/50 overflow-x-hidden w-full">
            <div className="container mx-auto px-3 sm:px-4 max-w-full overflow-hidden">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView && mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 sm:mb-10 md:mb-12 w-full"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg text-light/60 max-w-2xl mx-auto px-3">
                        Have a project in mind? I'd love to hear about it. Let's turn your ideas into reality.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 w-full">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView && mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2 w-full overflow-hidden"
                    >
                        <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl h-full w-full">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6 flex items-center gap-2">
                                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                                <span className="break-words">Get in Touch</span>
                            </h3>

                            <p className="text-xs sm:text-sm md:text-base text-light/60 mb-4 sm:mb-6 md:mb-8 break-words">
                                I'm always excited to collaborate on interesting projects or just chat about tech.
                                Feel free to reach out through any of these channels.
                            </p>

                            {/* Contact Cards */}
                            <div className="space-y-2 sm:space-y-3 md:space-y-4 mb-6 sm:mb-7 md:mb-8">
                                {contactInfo.map((info, index) => {
                                    const Content = (
                                        <>
                                            <div className={`p-2 sm:p-2.5 md:p-3 bg-gradient-to-br ${info.color} rounded-lg ${info.link ? 'group-hover:scale-110 transition-transform' : ''} flex-shrink-0`}>
                                                <info.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-[10px] sm:text-xs md:text-sm text-light/60 truncate">{info.label}</p>
                                                <p className={`text-xs sm:text-sm md:text-base font-medium truncate ${info.link ? 'group-hover:text-primary transition-colors' : ''}`}>
                                                    {info.value}
                                                </p>
                                            </div>
                                        </>
                                    );

                                    return (
                                        <motion.div
                                            key={info.label}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={inView && mounted ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                        >
                                            {info.link ? (
                                                <a
                                                    href={info.link}
                                                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 glass-effect rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group w-full overflow-hidden"
                                                >
                                                    {Content}
                                                </a>
                                            ) : (
                                                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 glass-effect rounded-lg sm:rounded-xl group cursor-default w-full overflow-hidden">
                                                    {Content}
                                                </div>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-3 sm:mb-4">
                                    Connect on Social Media
                                </h4>
                                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={inView && mounted ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.6 + index * 0.1 }}
                                            className="flex items-center gap-1 sm:gap-2 p-2 sm:p-2.5 md:p-3 glass-effect rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group w-full overflow-hidden"
                                        >
                                            <social.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 group-hover:text-primary transition-colors flex-shrink-0" />
                                            <div className="text-[10px] sm:text-xs md:text-sm min-w-0 flex-1">
                                                <p className="font-medium group-hover:text-primary transition-colors truncate">
                                                    {social.label}
                                                </p>
                                                <p className="text-[8px] sm:text-[10px] md:text-xs text-light/50 truncate">
                                                    {social.username}
                                                </p>
                                            </div>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView && mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3 w-full overflow-hidden"
                    >
                        <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl w-full">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-5 md:mb-6">
                                Send a Message
                            </h3>

                            {submitStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8 sm:py-10 md:py-12 w-full overflow-hidden"
                                >
                                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 gradient-bg rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                                        <Send className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                                    </div>
                                    <h4 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Message Sent!</h4>
                                    <p className="text-xs sm:text-sm md:text-base text-light/60 mb-4 sm:mb-5 md:mb-6 px-2">
                                        Thanks for reaching out. I'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setSubmitStatus(null)}
                                        className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 glass-effect rounded-full hover:shadow-lg transition-all text-xs sm:text-sm md:text-base"
                                    >
                                        Send Another Message
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6 w-full">
                                    <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                                        <div className="w-full overflow-hidden">
                                            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-light/70">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                placeholder="John Doe"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                            />
                                        </div>
                                        <div className="w-full overflow-hidden">
                                            <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-light/70">
                                                Email Address
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="john@example.com"
                                                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                            />
                                        </div>
                                    </div>

                                    <div className="w-full overflow-hidden">
                                        <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-light/70">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            placeholder="What's this about?"
                                            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        />
                                    </div>

                                    <div className="w-full overflow-hidden">
                                        <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2 text-light/70">
                                            Message
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows="4"
                                            placeholder="Tell me about your project..."
                                            className="w-full px-3 sm:px-4 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 gradient-bg rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-1 sm:gap-2 disabled:opacity-50 disabled:cursor-not-allowed group text-xs sm:text-sm md:text-base"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-3 h-3 sm:w-4 sm:h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                                <span>Sending...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span>Send Message</span>
                                                <Send size={14} className="group-hover:translate-x-1 transition-transform sm:w-4 sm:h-4 md:w-4.5 md:h-4.5" />
                                            </>
                                        )}
                                    </button>

                                    <p className="text-[10px] sm:text-xs text-center text-light/40">
                                        I typically respond within 24 hours. Your information is kept confidential.
                                    </p>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact