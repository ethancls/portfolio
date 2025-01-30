import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Une plateforme e-commerce moderne construite avec React et Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Application Mobile",
    description: "Application mobile de fitness avec suivi en temps réel",
    image: "https://images.unsplash.com/photo-1526502900236-e35bf93fe8b8?auto=format&fit=crop&q=80",
    tags: ["React Native", "Firebase", "Redux"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard d'analyse de données avec visualisations en temps réel",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    tags: ["Vue.js", "D3.js", "GraphQL"],
    github: "https://github.com",
    demo: "https://demo.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500"
        >
          Mes Projets
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-900 rounded-xl overflow-hidden"
    >
      <div className="relative h-48">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, i: number) => (
            <span 
              key={i}
              className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <Github size={20} />
            <span>Code</span>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <ExternalLink size={20} />
            <span>Demo</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}