import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import atlasImage from '../images/atlas.png';
import gameOfLifeImage from '../images/gun.png';
import puissance4Image from '../images/puissance4.jpeg';
import hsReactImage from '../images/hsreact.png';
import undergroundImage from '../images/underground.png';
import adnImage from '../images/adn.webp';
import zoomImage from '../images/chat.png';
import inversionImage from '../images/schur.png';

const projects = [
  {
    title: "Atlas",
    description: "Une plateforme pour découvrir les films et séries TV utilisant l'API TMDB.",
    image: atlasImage,
    tags: ["React", "Node.js", "NextJS", "TailwindCSS"],
    github: "https://github.com/ethancls/Atlas",
    demo: "https://atlas-galilee.vercel.app",
    infos: "Connexion avec admin/admin",
  },
  {
    title: "Jeu de la vie",
    description: "Modélisation Java du jeu de la vie de Conway avec visualisation en 2D et 3D.",
    image: gameOfLifeImage,
    tags: ["Java", "JavaFX", "XML"], 
    github: "https://github.com/ethancls/gameoflife",
  },
  {
    title: "Puissance 4 avec IA",
    description: "Création d'un jeu de puissance 4 avec une IA (Alpha-Beta Pruning) en C.",
    image: puissance4Image,
    tags: ["C", "Algorithmie (Alpha-Beta)", "Gesion de mémoire"],
    github: "https://github.com/ethancls/puissance4",
  },
  {
    title: "hsReact",
    description: "Modélisation d'évolutions de systèmes chimiques en Haskell.",
    image: hsReactImage,
    tags: ["Haskell", "Programmation fonctionnelle", "Modélisation"],
    github: "https://github.com/ethancls/hsReact",
  },
  {
    title: "Underground",
    description: "Un simulateur de trains en JavaScript qui permet de créer des circuits et de les tester.",
    image: undergroundImage,
    tags: ["JavaScript"],
    github: "https://github.com/ethancls/underground",
  },
  {
    title: "ADN",
    description: "Résolution d'agencement d'ADN (classe NP-difficile) à l'aide d'une métaheuristique (algorithme génétique).",
    image: adnImage,
    tags: ["C", "Métaheuristique", "I/O"],
    github: "https://github.com/ethancls/adn",
  },
  {
    title: "Zoom via splines cubiques",
    description: "Outil permettant de réaliser une interpolation d’un ensemble de points (méthode des splines cubiques) et appliquerez cela à un algorithme d’agrandissement d’images.",
    image: zoomImage,
    tags: ["C", "Interpolation", "Image I/O"],
    github: "https://github.com/ethancls/zoom_splines_cubiques",
  },
  {
    title: "Inversion de matrice",
    description: "Outil pour l'inversion de matrices utilisant la décomposition de Schur.",
    image: inversionImage,
    tags: ["C", "Calcul matriciel", "Optimisation"],
    github: "https://github.com/ethancls/inversion_matrices",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500"
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

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  infos?: string;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
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
        
        <div className="flex space-x-4 items-center">
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
          {project.demo && (
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
          )}
          {project.infos && (
            <span className="text-xs text-gray-500 ml-2">{project.infos}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}