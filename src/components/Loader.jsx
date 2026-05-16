// components/Loader.jsx
import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <div className="fixed inset-0 bg-dark flex items-center justify-center z-50">
            <div className="relative">
                <motion.div
                    className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="text-primary font-bold">NH</span>
                </motion.div>
            </div>
        </div>
    )
}

export default Loader