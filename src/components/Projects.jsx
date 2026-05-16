// components/Projects.jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Star, GitFork, Code2 } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    })

    const [filter, setFilter] = useState('all')

    const projects = [
        {
            name: 'Agile AI Dashboard',
            description: 'An intelligent analytics platform that transforms complex data into beautiful visualizations. Features real-time updates and predictive analytics.',
            longDescription: 'Built for data-driven teams, this dashboard provides actionable insights through intuitive D3.js visualizations. Integrated with FastAPI for real-time data processing.',
            tech: ['React.js', 'D3.js', 'FastAPI', 'Tailwind CSS', 'Redux Toolkit'],
            category: 'fullstack',
            metrics: {
                stars: 45,
                forks: 12,
                views: '2.5k',
            },
            image: 'agile-ai',
            color: 'from-blue-500 to-cyan-500',
            github: 'https://github.com',
            live: 'https://example.com',
            featured: true,
        },
        {
            name: 'Service Manager SaaS',
            description: 'Enterprise-grade multi-tenant platform revolutionizing service management with AI-powered automation and real-time collaboration.',
            longDescription: 'A comprehensive solution for service businesses featuring automated billing, role-based access control, and intelligent resource allocation.',
            tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Stripe', 'Redis'],
            category: 'saas',
            metrics: {
                stars: 89,
                forks: 23,
                views: '5.1k',
            },
            image: 'saas-platform',
            color: 'from-purple-500 to-pink-500',
            github: 'https://github.com',
            live: 'https://example.com',
            featured: true,
        },
        {
            name: 'Style Chamber',
            description: 'Luxury e-commerce experience with AI-powered recommendations and seamless checkout. Achieved 98+ Lighthouse score.',
            longDescription: 'A modern fashion platform featuring virtual try-on, personalized recommendations, and lightning-fast performance with Next.js SSR.',
            tech: ['Next.js', 'Stripe', 'Framer Motion', 'Tailwind CSS', 'Prisma'],
            category: 'ecommerce',
            metrics: {
                stars: 156,
                forks: 34,
                views: '12k',
            },
            image: 'ecommerce',
            color: 'from-green-500 to-emerald-500',
            github: 'https://github.com',
            live: 'https://example.com',
            featured: true,
        },
        {
            name: 'Exam System Pro',
            description: 'Secure, scalable assessment platform trusted by educational institutions for conducting high-stakes online examinations.',
            longDescription: 'Features include AI-powered proctoring, real-time session monitoring, and advanced anti-cheating mechanisms.',
            tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
            category: 'edtech',
            metrics: {
                stars: 67,
                forks: 18,
                views: '8.3k',
            },
            image: 'exam-system',
            color: 'from-orange-500 to-red-500',
            github: 'https://github.com',
            live: 'https://example.com',
            featured: false,
        },
        {
            name: 'HealthTrack AI',
            description: 'Personal health analytics platform using machine learning to predict and prevent health issues.',
            tech: ['React Native', 'Node.js', 'TensorFlow.js', 'MongoDB'],
            category: 'mobile',
            metrics: {
                stars: 234,
                forks: 56,
                views: '15k',
            },
            image: 'health-track',
            color: 'from-teal-500 to-cyan-500',
            github: 'https://github.com',
            live: 'https://example.com',
            featured: false,
        },
        {
            name: 'DevCollab Hub',
            description: 'Collaborative platform for developers with real-time code sharing and video conferencing.',
            tech: ['Next.js', 'WebRTC', 'Socket.io', 'Tailwind CSS'],
            category: 'collaboration',
            metrics: {
                stars: 178,
                forks: 42,
                views: '9.8k',
            },
            image: 'dev-collab',
            color: 'from-indigo-500 to-purple-500',
            github: 'https://github.com',
            live: 'https://example.com',
            featured: false,
        },
    ]

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(p => p.category === filter)

    const categories = [
        { value: 'all', label: 'All Projects' },
        { value: 'fullstack', label: 'Full Stack' },
        { value: 'saas', label: 'SaaS' },
        { value: 'ecommerce', label: 'E-Commerce' },
        { value: 'edtech', label: 'EdTech' },
        { value: 'mobile', label: 'Mobile' },
        { value: 'collaboration', label: 'Collaboration' },
    ]

    return (
        <section id="projects" className="py-20 bg-dark/50">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="section-title">
                        Featured <span className="gradient-text">Creations</span>
                    </h2>
                    <p className="section-subtitle">
                        Real projects, real impact - each line of code tells a story
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat.value}
                            onClick={() => setFilter(cat.value)}
                            className={`px-4 py-2 rounded-full transition-all duration-300 ${filter === cat.value
                                    ? 'gradient-bg text-white'
                                    : 'glass-effect text-light/70 hover:text-light'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="glass-effect rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 h-full flex flex-col">
                                {/* Project Image Placeholder */}
                                <div className={`h-48 bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        {/* <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 glass-effect rounded-full hover:scale-110 transition-transform"
                                        > */}
                                        <span className="p-3 glass-effect rounded-full hover:scale-110 transition-transform"> <ExternalLink size={20} /></span>
                                           
                                        {/* </a> */}
                                        {/* <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 glass-effect rounded-full hover:scale-110 transition-transform"
                                        > */}
                                        <span className="p-3 glass-effect rounded-full hover:scale-110 transition-transform"> <Github size={20} /></span>
                                           
                                        {/* </a> */}
                                    </div>
                                    <Code2 className="w-16 h-16 text-white/20 absolute -bottom-4 -right-4" />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                            {project.name}
                                        </h3>
                                        {project.featured && (
                                            <span className="text-xs px-2 py-1 gradient-bg rounded-full">
                                                Featured
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-light/60 text-sm mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    {/* Metrics */}
                                    <div className="flex gap-4 mb-4 text-sm text-light/50">
                                        <span className="flex items-center gap-1">
                                            <Star size={14} /> {project.metrics.stars}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <GitFork size={14} /> {project.metrics.forks}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Eye size={14} /> {project.metrics.views}
                                        </span>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs bg-white/5 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && (
                                            <span className="px-2 py-1 text-xs bg-white/5 rounded-full">
                                                +{project.tech.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Hover Details */}
                                    <motion.div
                                        initial={false}
                                        whileHover={{ height: 'auto' }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-sm text-light/70 border-t border-white/10 pt-3 mt-2">
                                            {project.longDescription}
                                        </p>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <button className="px-8 py-3 glass-effect rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group">
                        View All Projects
                        <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform">→</span>
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects