import { motion } from 'framer-motion';
import Chips3D from './Chips3D';

export default function About() {
    return (
        <section id="about" className="relative h-screen flex flex-col items-center justify-center bg-black text-white">

            <div
                className="absolute inset-0"
            >
                <Chips3D />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative max-w-3xl text-center px-6"
            >
                <div className="bg-black bg-opacity-50 backdrop-blur-md p-6 rounded-lg">
                    {/* About Title with Animated Gradient */}
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-violet-500">
                            About Me
                        </span>
                    </h2>

                    {/* About Text */}
                    <p className="text-white text-xl sm:text-xl mb-8 text-justify">
                        Étudiant en informatique dans l'école d'ingénieur Sup Galilée, je suis actuellement en parcours d'apprentissage chez Abeille Assurances dans le domaine de la <a href="https://fr.wikipedia.org/wiki/Gestion_des_identités_et_des_accès" className="underline text-blue-400" target="_blank" rel="noopener noreferrer">Gestion des Identités et des Accès</a>. Après l'obtention de mon diplôme, je souhaiterais m'orienter dans l'école doctorale Galilée pour effectuer une thèse dans le domaine de l'intelligence artificielle et de l'apprentissage profond avec une spécialisation dans le traitement d'image et la modélisation 3D et les techniques de rendus de phénomènes physiques (Ray Tracing, Path Tracing, Fluid Simulation...).
                    </p>
                </div>
            </motion.div>
        </section>
    );
}