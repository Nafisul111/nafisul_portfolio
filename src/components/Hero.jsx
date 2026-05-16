// components/Hero.jsx
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Github, Linkedin, Twitter, Mail, Sparkles } from 'lucide-react'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000" />

                {/* Floating particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-primary/30 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [null, -30, 30, -30],
                            x: [null, 30, -30, 30],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 10,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring" }}
                        className="hidden lg:inline-flex  items-center gap-2 glass-effect px-4 py-2 rounded-full mb-8"
                    >
                        <Sparkles size={16} className="text-accent" />
                        <span className="text-sm">Available for opportunities</span>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl mt-10 sm:mt-auto md:text-7xl font-bold mb-4"
                    >
                        Hi, I'm{' '}
                        <span className="gradient-text relative">
                            Nafisul Hasan Siddiqui
                            <motion.span
                                className="absolute bottom-0 left-0 w-full h-1 gradient-bg rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ delay: 1, duration: 0.8 }}
                            />
                        </span>
                    </motion.h1>

                    {/* Animated Title */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-2xl md:text-3xl mb-6 text-light/80"
                    >
                        <TypeAnimation
                            sequence={[
                                'Full Stack MERN Developer',
                                2000,
                                'React.js Specialist',
                                2000,
                                'Next.js Expert',
                                2000,
                                'Problem Solver',
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="gradient-text"
                        />
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-10 text-light/60 leading-relaxed"
                    >
                        I craft digital experiences that live on the internet. With 5 years of
                        experience in turning complex problems into beautiful, interactive solutions.
                        Let's build something extraordinary together.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-wrap justify-center gap-4 mb-12"
                    >
                        <Link
                            href="#contact"
                            className="group px-8 py-4 gradient-bg rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center gap-2"
                        >
                            Start a Conversation
                            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
                        </Link>
                        <Link
                            href="#projects"
                            className="group px-8 py-4 glass-effect rounded-full font-semibold hover:shadow-lg hover:shadow-white/10 transition-all duration-300 flex items-center gap-2"
                        >
                            View My Work
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1 }}
                        className="flex justify-center gap-6"
                    >
                        {[
                            { icon: Github, href: 'https://github.com/Nafisul111', label: 'GitHub' },
                            { icon: Linkedin, href: 'https://www.linkedin.com/in/nafisul-hasan-siddiqui-4a5a60316/', label: 'LinkedIn' },
                            { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                            { icon: Mail, href: 'mailto:nafisulhasan072@gmail.com', label: 'Email' },
                        ].map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 glass-effect rounded-full hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 group"
                                aria-label={social.label}
                            >
                                <social.icon size={20} className="group-hover:text-primary transition-colors" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                    >
                        <Link href="#about" className="flex flex-col items-center gap-2 group">
                            <span className="text-sm text-light/50 group-hover:text-light transition-colors">
                                Scroll to explore
                            </span>
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowDown size={20} className="text-light/50 group-hover:text-primary transition-colors" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero