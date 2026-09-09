// components/Experience.jsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Award, Zap, TrendingUp, Users, Code } from 'lucide-react'
import { useState, useEffect } from 'react'

const Experience = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [mounted, setMounted] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Check for mobile view
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 769)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const experiences = [
        {
            role: 'Software Developer',
            company: 'Jublitech Solutions Pvt Ltd',
            period: 'Aug 2025 - Present',
            location: 'Remote',
            description: 'Developing scalable, responsive, and high-performance web applications using the MERN stack',
            achievements: [
                'Built and maintained full-stack web applications using React.js, Node.js, Express.js, and MongoDB',
                'Developed reusable and scalable UI components using React.js, Redux Toolkit, React Hooks, and Tailwind CSS',
                'Designed and integrated RESTful APIs for seamless communication between frontend and backend systems',
                'Implemented MongoDB CRUD operations, aggregation pipelines, and efficient database queries',
                'Diagnosed and resolved complex frontend, backend, API, and database issues through systematic problem-solving',
                'Optimized application performance by improving component rendering, API handling, and database operations',
                'Collaborated with developers and stakeholders to understand requirements and deliver reliable software solutions',
            ],
            impact: 'Delivered robust MERN stack solutions with a strong focus on problem solving, performance, scalability, and maintainable code',
            icon: Award,
        },
        {
            role: 'React.js Developer',
            company: 'Rhobos IT Solutions',
            period: 'Oct 2024 - Aug 2025',
            location: 'Pune, Maharashtra',
            description: 'Pushing the boundaries of frontend performance',
            achievements: [
                'Boosted application performance by 30% through code splitting and lazy loading',
                'Implemented complex state management solutions with Redux Toolkit',
                'Built real-time features using React Query and WebSocket integration',
                'Collaborated with UI/UX team to create stunning user interfaces',
            ],
            impact: 'Reduced bounce rate by 25% through improved UX',
            icon: Zap,
        },
        {
            role: 'React.js Developer',
            company: 'LAHagora Pvt. Ltd',
            period: 'June 2024 - Sep 2024',
            location: 'Surat, Gujarat',
            description: 'Building the future of entertainment',
            achievements: [
                'Developed responsive OTT platform with seamless video streaming',
                'Transformed Figma designs into pixel-perfect, reusable components',
                'Implemented smooth animations for enhanced user engagement',
                'Optimized performance for low-bandwidth scenarios',
            ],
            impact: 'Platform reached 10K+ users in first month',
            icon: TrendingUp,
        },
        {
            role: 'Software Developer',
            company: 'INFRAINX Technologies',
            period: 'Feb 2022 - Jan 2024',
            location: 'Lucknow, India',
            description: 'Building robust, scalable solutions',
            achievements: [
                'Engineered complete MERN stack applications with MVC architecture',
                'Integrated Stripe payment gateway with secure transaction handling',
                'Implemented comprehensive testing strategies ensuring 95% code coverage',
                'Designed scalable MongoDB schemas for complex data relationships',
            ],
            impact: 'Processed $100K+ in transactions through payment integrations',
            icon: Code,
        },
        // {
        //     role: 'Jr. Software Developer',
        //     company: 'PIE INFOTECH',
        //     period: 'Jul 2020 - Jan 2022',
        //     location: 'Lucknow, India',
        //     description: 'Where it all began',
        //     achievements: [
        //         'Started journey with JavaScript and React.js development',
        //         'Built responsive web applications with mobile-first approach',
        //         'Modernized legacy codebases with contemporary practices',
        //         'Learned the art of writing clean, maintainable code',
        //     ],
        //     impact: 'Laid foundation for a promising tech career',
        //     icon: Users,
        // },
    ]

    // Don't render animations until component is mounted
    if (!mounted) {
        return (
            <section id="experience" className="py-12 md:py-20 overflow-x-hidden w-full">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8 md:mb-12">
                        <h2 className="section-title text-2xl md:text-4xl">
                            Professional <span className="gradient-text">Journey</span>
                        </h2>
                        <p className="section-subtitle text-sm md:text-base">
                            5 years of evolution, growth, and impact in the tech world
                        </p>
                    </div>
                    <div className="relative min-h-[400px]">
                        {/* Placeholder timeline */}
                        <div className="absolute left-4 h-full w-0.5 gradient-bg opacity-30" />
                    </div>
                </div>
            </section>
        )
    }

    // Mobile view (less than 769px)
    if (isMobile) {
        return (
            <section id="experience" className="py-12 overflow-x-hidden w-full">
                <div className="container mx-auto px-4">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView && mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-8 w-full"
                    >
                        <h2 className="text-2xl font-bold mb-2">
                            Professional <span className="gradient-text">Journey</span>
                        </h2>
                        <p className="text-sm text-light/70 max-w-md mx-auto">
                            5 years of evolution, growth, and impact in the tech world
                        </p>
                    </motion.div>

                    <div className="relative w-full">
                        {/* Vertical timeline line for mobile */}
                        <div className="absolute left-4 transform h-full w-0.5 gradient-bg" />

                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={inView && mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative flex mb-6 last:mb-0"
                            >
                                {/* Timeline dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={inView && mounted ? { scale: 1 } : { scale: 0 }}
                                    transition={{ delay: index * 0.1 + 0.2 }}
                                    className="absolute left-4 transform -translate-x-1/2 w-3 h-3 gradient-bg rounded-full z-10"
                                >
                                    <div className="absolute inset-0 gradient-bg rounded-full animate-ping opacity-75" />
                                </motion.div>

                                {/* Content */}
                                <div className="ml-8 w-full">
                                    <div className="glass-effect p-4 rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 w-full">
                                        {/* Header section */}
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className="p-2 gradient-bg/20 rounded-lg shrink-0">
                                                <exp.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-bold truncate">{exp.role}</h3>
                                                <p className="text-primary text-sm font-medium truncate">{exp.company}</p>
                                            </div>
                                        </div>

                                        {/* Meta information */}
                                        <div className="flex flex-wrap gap-2 mb-3 text-xs text-light/60">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={12} className="shrink-0" />
                                                <span className="truncate">{exp.period}</span>
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <MapPin size={12} className="shrink-0" />
                                                <span className="truncate">{exp.location}</span>
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-light/80 italic text-sm mb-3 wrap-break-word">"{exp.description}"</p>

                                        {/* Achievements list */}
                                        <div className="space-y-1.5 mb-3">
                                            {exp.achievements.map((achievement, i) => (
                                                <div key={i} className="flex items-start gap-2 text-light/80 text-xs">
                                                    <span className="text-primary mt-0.5 shrink-0">•</span>
                                                    <span className="wrap-break-word leading-relaxed">{achievement}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Impact section */}
                                        <div className="mt-3 p-2 gradient-bg/10 rounded-lg">
                                            <span className="text-xs font-semibold text-primary">Impact: </span>
                                            <span className="text-xs text-light/80 wrap-break-word">{exp.impact}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    // Desktop view (769px and above)
    return (
        <section id="experience" className="py-20 overflow-x-hidden w-full">
            <div className="container mx-auto px-4 max-w-full overflow-hidden">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView && mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 w-full"
                >
                    <h2 className="section-title">
                        Professional <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="section-subtitle">
                        5 years of evolution, growth, and impact in the tech world
                    </p>
                </motion.div>

                <div className="relative w-full overflow-hidden">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 gradient-bg" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={inView && mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row mb-12 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={inView && mounted ? { scale: 1 } : { scale: 0 }}
                                transition={{ delay: index * 0.2 + 0.3 }}
                                className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 gradient-bg rounded-full z-10"
                            >
                                <div className="absolute inset-0 gradient-bg rounded-full animate-ping opacity-75" />
                            </motion.div>

                            {/* Content */}
                            <div className={`ml-12 md:ml-0 md:w-1/2 md:px-8 w-full overflow-hidden ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                                }`}>
                                <div className="glass-effect p-6 rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 w-full">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 gradient-bg/20 rounded-lg shrink-0">
                                            <exp.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="text-xl font-bold truncate">{exp.role}</h3>
                                            <p className="text-primary font-medium truncate">{exp.company}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-light/60">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} className="shrink-0" />
                                            <span className="truncate">{exp.period}</span>
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MapPin size={14} className="shrink-0" />
                                            <span className="truncate">{exp.location}</span>
                                        </span>
                                    </div>

                                    <p className="text-light/80 italic mb-4 wrap-break-word">"{exp.description}"</p>

                                    <ul className="space-y-2 mb-4">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i} className="flex items-start gap-2 text-light/80">
                                                <span className="text-primary mt-1 shrink-0">•</span>
                                                <span className="wrap-break-word">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-4 p-3 gradient-bg/10 rounded-lg wrap-break-word">
                                        <span className="text-sm font-semibold text-primary">Impact: </span>
                                        <span className="text-sm text-light/80">{exp.impact}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Experience