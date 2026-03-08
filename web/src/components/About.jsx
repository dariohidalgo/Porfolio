import { motion } from 'framer-motion';
import { Layers, Zap, Terminal } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-24 px-4 bg-surface/30 border-y border-surfaceHover">
            <div className="container mx-auto max-w-5xl">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold mb-6"
                        >
                            Arquitectura & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Rendimiento</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="space-y-6 text-textMuted text-lg"
                        >
                            <p>
                                Construyo software pensando en el largo plazo. Mi enfoque se basa en interfaces rápidas, código limpio y sistemas escalables que resuelven problemas reales del negocio.
                            </p>
                            <p>
                                A lo largo de los últimos años, he liderado el desarrollo de productos desde la concepción hasta el despliegue, trabajando estrechamente con clientes para asegurar que la tecnología impulse sus objetivos.
                            </p>
                        </motion.div>
                    </div>

                    <div className="space-y-4">
                        {[
                            {
                                icon: Terminal,
                                title: 'Desarrollo Frontend',
                                desc: 'React, TypeScript, Tailwind CSS, Arquitectura de Componentes.'
                            },
                            {
                                icon: Layers,
                                title: 'Backend & APIs',
                                desc: 'Node.js, Bases de Datos Relacionales (SQL) y NoSQL, APIs RESTful.'
                            },
                            {
                                icon: Zap,
                                title: 'Performance & UX',
                                desc: 'Optimización de tiempos de carga, animaciones fluidas y accesibilidad.'
                            }
                        ].map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-surface p-6 rounded-2xl border border-surfaceHover flex gap-4"
                            >
                                <div className="mt-1">
                                    <skill.icon className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{skill.title}</h4>
                                    <p className="text-textMuted text-sm">{skill.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
