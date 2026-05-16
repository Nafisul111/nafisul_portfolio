// components/About.jsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Coffee, Code2, Globe, Rocket, Heart, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    const stats = [
        { label: 'Years Experience', value: '5+', icon: Rocket },
        { label: 'Projects Completed', value: '20+', icon: Code2 },
        { label: 'Happy Clients', value: '10+', icon: Users },
        { label: 'Coffee Consumed', value: '∞', icon: Coffee },
    ]

    const interests = [
        'Building scalable web applications',
        'Exploring new technologies',
        'Open source contributions',
        'Tech blogging',
        'Mentoring junior developers',
        'Problem solving',
    ]

    // Don't render animations until component is mounted
    if (!mounted) {
        return (
            <section id="about" className="py-12 sm:py-16 md:py-20 bg-dark/50 overflow-x-hidden">
                <div className="container mx-auto px-3 sm:px-4">
                    <div className="text-center mb-8 sm:mb-10 md:mb-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                            Crafting Digital <span className="gradient-text">Stories</span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-light/60 max-w-2xl mx-auto px-2">
                            Beyond just code - I'm a problem solver, creative thinker, and technology enthusiast
                        </p>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start">
                        {/* Static placeholder while loading */}
                        <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl min-h-75 sm:min-h-75 md:min-h-100" />
                        <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl min-h-75 sm:min-h-75 md:min-h-100" />
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section id="about" className=" py-12 sm:py-14 md:py-18 bg-dark/50 overflow-x-hidden w-full">
            <div className="container mx-auto px-3 sm:px-4 max-w-full overflow-hidden">
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="text-center mb-8 sm:mb-10 md:mb-12 w-full"
                >
                    <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
                        Crafting Digital <span className="gradient-text">Stories</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className="text-sm sm:text-base md:text-lg text-light/60 max-w-2xl mx-auto px-3">
                        Beyond just code - I'm a problem solver, creative thinker, and technology enthusiast
                    </motion.p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-start w-full">
                    {/* Left Column - My Journey */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView && mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full overflow-hidden"
                    >
                        <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl h-full">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                                <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                                <span className="wrap-break-words">My Journey</span>
                            </h3>
                            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base text-light/80 leading-relaxed">
                                <p className="wrap-break-words">
                                    My coding journey began 5 years ago when I wrote my first line of JavaScript.
                                    Today, I've evolved into a Full Stack MERN Developer who doesn't just write code,
                                    but creates experiences that users love.
                                </p>
                                <p className="wrap-break-words">
                                    I believe in the power of technology to transform ideas into reality.
                                    From e-commerce platforms to OTT applications, I've built solutions that
                                    scale, perform, and delight users.
                                </p>
                                <p className="wrap-break-words">
                                    What drives me? The moment when a complex problem finally clicks into place,
                                    and you see the solution come alive on screen. It's not just about making things work -
                                    it's about making them work beautifully.
                                </p>
                            </div>

                            {/* Quick Stats - Responsive Grid */}
                            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 mt-4 sm:mt-6 md:mt-8">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={inView && mounted ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="glass-effect p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl text-center"
                                    >
                                        <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary mx-auto mb-1 sm:mb-2" />
                                        <div className="text-base sm:text-lg md:text-2xl font-bold gradient-text">
                                            {stat.value}
                                        </div>
                                        <div className="text-[10px] sm:text-xs md:text-sm text-light/60 truncate">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - What Drives Me */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={inView && mounted ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="w-full overflow-hidden"
                    >
                        <div className="glass-effect p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl h-full">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                                <Globe className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary flex-shrink-0" />
                                <span className="wrap-break-words">What Drives Me</span>
                            </h3>

                            {/* Interests - Responsive Grid */}
                            <div className="grid grid-cols-1 gap-2 sm:gap-3 mb-4 sm:mb-6 md:mb-8">
                                {interests.map((interest, index) => (
                                    <motion.div
                                        key={interest}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={inView && mounted ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.4 + index * 0.1 }}
                                        className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 glass-effect rounded-lg"
                                    >
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 gradient-bg rounded-full flex-shrink-0" />
                                        <span className="text-xs sm:text-sm md:text-base text-light/80 break-words">
                                            {interest}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Philosophy */}
                            <div className="border-t border-white/10 pt-4 sm:pt-5 md:pt-6">
                                <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3">
                                    My Philosophy
                                </h4>
                                <blockquote className="text-xs sm:text-sm md:text-base text-light/60 italic break-words">
                                    "Great software is not just about functionality - it's about creating
                                    experiences that feel magical. Every line of code should have a purpose,
                                    and every feature should tell a story."
                                </blockquote>
                            </div>

                            {/* Current Focus */}
                            <div className="mt-4 sm:mt-5 md:mt-6 p-3 sm:p-4 gradient-bg/20 rounded-lg sm:rounded-xl">
                                <h4 className="text-xs sm:text-sm md:text-base font-semibold mb-1 sm:mb-2 flex items-center gap-1 sm:gap-2">
                                    <Rocket size={14} className="text-accent flex-shrink-0 sm:w-4 sm:h-4 md:w-[18px] md:h-[18px]" />
                                    <span className="wrap-break-words">Currently Exploring</span>
                                </h4>
                                <p className="text-xs sm:text-sm text-light/70 break-words">
                                    Diving deep into AWS cloud architecture, mastering Next.js 14,
                                    and building AI-powered web applications.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default About