import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2 } from 'lucide-react';

export default function Hero() {
    const titles = [
        "Construyendo Soluciones",
        "Diseñando Experiencias",
        "Escribiendo Código",
        "Optimizando la Web"
    ];

    const [titleIndex, setTitleIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTitleIndex((prev) => (prev + 1) % titles.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4">

            {/* Abstract Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="flex flex-col items-center text-center space-y-8">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-surface shadow-2xl ring-4 ring-primary/20"
                    >
                        <img
                            src="/img/Dario.webp"
                            alt="Dario Hidalgo"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="inline-flex items-center space-x-2 bg-surface border border-surfaceHover px-4 py-2 rounded-full"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-sm font-mono text-primary">Disponible para nuevos proyectos</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-textMain"
                    >
                        Desarrollador Front/End <br className="hidden md:block" />
                        <span className="inline-grid pt-2">
                            <AnimatePresence>
                                <motion.span
                                    key={titleIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary col-start-1 row-start-1"
                                >
                                    {titles[titleIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-textMuted max-w-2xl"
                    >
                        Especializado en crear aplicaciones web modernas, escalables y orientadas al rendimiento. Transformo problemas complejos en experiencias digitales elegantes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 pt-4"
                    >
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-background bg-primary rounded-lg hover:bg-primaryHover transition-colors focus:ring-2 focus:ring-primary/50 focus:outline-none"
                        >
                            Ver Proyectos
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-textMain bg-surface border border-surfaceHover rounded-lg hover:bg-surfaceHover transition-colors focus:ring-2 focus:ring-surface focus:outline-none"
                        >
                            <Code2 className="mr-2 h-4 w-4 text-primary" />
                            Contactar
                        </a>
                    </motion.div>

                    {/* Metric Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full mt-16 pt-16 border-t border-surfaceHover/50"
                    >
                        {[
                            { label: 'Años Experiencia', value: '+3' },
                            { label: 'Proyectos Entregados', value: '+15' },
                            { label: 'Satisfacción', value: '100%' },
                            { label: 'Stack', value: 'MERN / React' },
                        ].map((stat, i) => (
                            <div key={i} className="flex flex-col items-center justify-center p-4 bg-surface/30 rounded-xl border border-surfaceHover/30">
                                <span className="text-3xl font-mono font-bold text-primary mb-1">{stat.value}</span>
                                <span className="text-sm text-textMuted">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
