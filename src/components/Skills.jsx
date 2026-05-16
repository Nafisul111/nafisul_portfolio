// components/Skills.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
    Code2,
    Database,
    Cloud,
    Smartphone,
    Shield,
    Zap,
    Server,
    Layout,
    GitBranch,
    Terminal
} from 'lucide-react'

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const skillCategories = [
        {
            title: 'Frontend Magic',
            icon: Layout,
            skills: [
                { name: 'React.js', level: 95 },
                { name: 'Next.js', level: 90 },
                { name: 'TypeScript', level: 85 },
                { name: 'Tailwind CSS', level: 90 },
                { name: 'Redux Toolkit', level: 88 },
                { name: 'Framer Motion', level: 80 },
                { name: 'D3.js', level: 75 },
            ],
            color: 'from-blue-500 to-cyan-500',
        },
        {
            title: 'Backend Power',
            icon: Server,
            skills: [
                { name: 'Node.js', level: 92 },
                { name: 'Express.js', level: 90 },
                // { name: 'Python/FastAPI', level: 80 },
                { name: 'RESTful APIs', level: 95 },
                { name: 'Express Middleware', level: 92 },
                { name: 'WebSocket', level: 80 },
                { name: 'JWT Auth', level: 90 },
                { name: 'Microservices', level: 75 },
            ],
            color: 'from-green-500 to-emerald-500',
        },
        {
            title: 'Database & Storage',
            icon: Database,
            skills: [
                { name: 'MongoDB', level: 92 },
                { name: 'PostgreSQL', level: 85 },
                { name: 'MySQL', level: 85 },
                { name: 'Redis', level: 75 },
                { name: 'Sequelize', level: 82 },
                { name: 'Mongoose', level: 88 },
                { name: 'Firebase', level: 80 },
                // { name: 'Prisma', level: 78 },
            ],
            color: 'from-purple-500 to-pink-500',
        },
        {
            title: 'Cloud & DevOps',
            icon: Cloud,
            skills: [
                { name: 'AWS (S3/EC2)', level: 75 },
                { name: 'Docker', level: 70 },
                { name: 'CI/CD', level: 80 },
                { name: 'Vercel', level: 90 },
                { name: 'Netlify', level: 88 },
                { name: 'Git/GitHub', level: 92 },
                { name: 'Postman', level: 90 },
                { name: 'Linux', level: 75 },
            ],
            color: 'from-orange-500 to-red-500',
        },
        {
            title: 'Testing & Quality',
            icon: Shield,
            skills: [
                { name: 'Jest', level: 80 },
                { name: 'React Testing', level: 82 },
                { name: 'Cypress', level: 70 },
                { name: 'Unit Testing', level: 85 },
                { name: 'E2E Testing', level: 75 },
                { name: 'Performance', level: 85 },
                { name: 'Security', level: 78 },
                { name: 'Code Review', level: 88 },
            ],
            color: 'from-yellow-500 to-orange-500',
        },
        {
            title: 'Tools & Others',
            icon: Terminal,
            skills: [
                { name: 'VS Code', level: 95 },
                { name: 'Figma', level: 75 },
                { name: 'Jira', level: 80 },
                { name: 'Agile/Scrum', level: 85 },
                { name: 'Problem Solving', level: 92 },
                { name: 'Team Leadership', level: 80 },
                { name: 'Communication', level: 88 },
                { name: 'Documentation', level: 85 },
            ],
            color: 'from-indigo-500 to-purple-500',
        },
    ]

    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">
                        Technical <span className="gradient-text">Superpowers</span>
                    </h2>
                    <p className="section-subtitle">
                        A comprehensive toolkit for building modern web applications
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="glass-effect p-6 rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg`}>
                                    <category.icon className="w-5 h-5 text-white" />
                                </div>
                                <h3 className="text-lg font-semibold">{category.title}</h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <div className="flex justify-between mb-1">
                                            <span className="text-sm text-light/80">{skill.name}</span>
                                            <span className="text-sm text-primary">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={inView ? { width: `${skill.level}%` } : {}}
                                                transition={{
                                                    duration: 1,
                                                    delay: categoryIndex * 0.1 + skillIndex * 0.05,
                                                    ease: "easeOut"
                                                }}
                                                className={`h-full bg-gradient-to-r ${category.color}`}
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Skills Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-12 p-8 glass-effect rounded-2xl text-center"
                >
                    <Zap className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-bold mb-4">Always Learning, Always Growing</h3>
                    <p className="text-light/60 max-w-2xl mx-auto">
                        Currently diving deep into Web3, AI integration, and advanced cloud architecture.
                        The tech world never stops evolving, and neither do I.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

export default Skills