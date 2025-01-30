import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Scene3D from './Scene3D';

export default function Hero() {
  return (
    <div className="relative h-screen bg-black overflow-hidden">
      <div className="absolute inset-0">
        <Scene3D />
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Creative Developer
              </span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl mb-8">
              Crafting digital experiences through code and creativity
            </p>
            
            <div className="flex space-x-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium"
              >
                Get in touch
              </motion.a>
              
              <div className="flex space-x-4 items-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:your.email@example.com"
                  className="text-gray-300 hover:text-white"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}