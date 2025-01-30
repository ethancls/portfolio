import { motion } from 'framer-motion';
import { Code, Home, User } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/50 backdrop-blur-lg"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.a 
            href="#"
            whileHover={{ scale: 1.1 }}
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
          >
            Portfolio
          </motion.a>
          
          <div className="flex space-x-8">
            <NavLink href="#home" icon={<Home size={20} />} text="Accueil" />
            <NavLink href="#projects" icon={<Code size={20} />} text="Projets" />
            <NavLink href="#about" icon={<User size={20} />} text="À propos" />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function NavLink({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) {
  return (
    <motion.a
      href={href}
      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
      whileHover={{ scale: 1.1 }}
    >
      {icon}
      <span>{text}</span>
    </motion.a>
  );
}