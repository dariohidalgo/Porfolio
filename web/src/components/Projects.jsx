import { motion } from 'framer-motion';
import { ExternalLink, Github, Stethoscope, Microscope, Store, GraduationCap } from 'lucide-react';

const PROJECTS = [
    {
        title: 'Bevet',
        description: 'Sistema integral de gestión veterinaria. Manejo de pacientes, historiales clínicos, turnos y facturación con una interfaz rápida y segura.',
        tech: ['React', 'Node.js', 'Tailwind', 'PostgreSQL'],
        icon: Stethoscope,
        color: 'from-emerald-400 to-teal-500',
        demoLink: 'https://bevet.com.br'
    },
    {
        title: 'SmartLab',
        description: 'Plataforma para laboratorios clínicos. Digitalización de resultados, rastreo de muestras y portal de pacientes integrado.',
        tech: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
        icon: Microscope,
        color: 'from-blue-400 to-indigo-500',
        demoLink: 'https://smartlab.vet.br'
    },
    {
        title: 'Web Estudio de Arquitectura',
        description: 'Landing page profesional y moderna con alto rendimiento, optimización SEO y diseño responsive que destaca la marca personal.',
        tech: ['Astro', 'Tailwind', 'Framer Motion'],
        icon: Store,
        color: 'from-orange-400 to-rose-500',
        demoLink: 'https://vyharquitectura.vercel.app/'
    },
    {
        title: 'Plataforma de Cursos',
        description: 'Plataforma e-learning completa. Reproducción de video, sistema de progreso, pasarela de pagos y panel de administración.',
        tech: ['Next.js', 'React', 'Tailwind', 'Stripe'],
        icon: GraduationCap,
        color: 'from-primary to-secondary',
        demoLink: '#'
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">

                <div className="mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Proyectos <span className="text-primary">Destacados</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-textMuted max-w-2xl text-lg"
                    >
                        Una selección del software que he construido. Cada proyecto representa un desafío técnico resuelto con código limpio e interfaces escalables.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative bg-surface border border-surfaceHover rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            {/* Abstract decorative header */}
                            <div className={`h-32 w-full bg-gradient-to-r opacity-10 group-hover:opacity-20 transition-opacity ${project.color}`}></div>

                            <div className="p-8 relative -mt-16">
                                <div className="bg-background w-16 h-16 rounded-xl border border-surfaceHover flex items-center justify-center mb-6">
                                    <project.icon className="w-8 h-8 text-primary" />
                                </div>

                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="text-textMuted mb-6 min-h-[80px]">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="text-xs font-mono px-3 py-1 bg-surfaceHover rounded-full text-textMain/80">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 border-t border-surfaceHover/50 pt-6">
                                    {project.demoLink && project.demoLink !== '#' ? (
                                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                        </a>
                                    ) : (
                                        <span className="inline-flex items-center text-sm font-medium text-textMuted/50 cursor-not-allowed">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                                        </span>
                                    )}
                                    <a href="#" className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors text-textMuted">
                                        <Github className="w-4 h-4 mr-2" /> Código
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
