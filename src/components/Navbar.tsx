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
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], 
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="flex items-center text-2xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-green-400 via-blue-500 via-70% to-violet-500 bg-[length:200%_200%]"
          >
            <img 
              src="/avatar.jpeg" 
              alt="Avatar" 
              className="w-8 h-8 rounded-full mr-2"
            />
            NICOLAS Ethan
          </motion.a>

          <div className="flex space-x-6 md:space-x-8">
            <NavLink href="#home" icon={<Home size={24} />} text="Accueil" />
            <NavLink href="#projects" icon={<Code size={24} />} text="Projets" />
            <NavLink href="#about" icon={<User size={24} />} text="À propos" />
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
      <span className="hidden sm:inline">{text}</span>
    </motion.a>
  );
}