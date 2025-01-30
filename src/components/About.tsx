import { motion } from 'framer-motion';
import Chips3D from './Chips3D'; // Make sure to import the Cubic3D component

export default function About() {
    return (
        <section id="about" className="relative h-screen flex flex-col items-center justify-center bg-black text-white">
            <div className="absolute inset-0">
                <Chips3D />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative max-w-3xl text-center px-6"
            >
                {/* About Title with Animated Gradient */}
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-violet-500">
                        About Me
                    </span>
                </h2>

                {/* About Text */}
                <p className="text-white text-xl sm:text-xl mb-8 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                    Passionate about creating innovative experiences, I specialize in building efficient and 
                    user-friendly applications. Always eager to explore new technologies and push boundaries.
                </p>
            </motion.div>
        </section>
    );
}