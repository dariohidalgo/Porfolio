import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, MessageCircle } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-3xl text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-surface/50 border border-surfaceHover rounded-3xl p-12 relative overflow-hidden"
                >
                    {/* Subtle glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-primary/10 blur-[100px] pointer-events-none"></div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
                        ¿Listo para construir algo <span className="text-primary">increíble</span>?
                    </h2>
                    <p className="text-textMuted text-lg mb-10 max-w-xl mx-auto relative z-10">
                        Comencemos a hablar sobre tu próximo proyecto. Envía un mensaje y veamos cómo puedo ayudarte a alcanzar tus objetivos tecnológicos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <a
                            href="mailto:dhidalgo651@gmail.com"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-background bg-primary rounded-lg hover:bg-primaryHover transition-colors focus:ring-2 focus:ring-primary/50 focus:outline-none"
                        >
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                        </a>
                        <a
                            href="https://wa.me/543512481573"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-textMain bg-surface border border-surfaceHover rounded-lg hover:bg-surfaceHover transition-colors focus:ring-2 focus:ring-surface focus:outline-none"
                        >
                            <MessageCircle className="mr-2 h-4 w-4 text-primary" />
                            WhatsApp
                        </a>
                    </div>

                    <div className="flex justify-center gap-6 mt-12 pt-12 border-t border-surfaceHover relative z-10">
                        <a href="https://www.linkedin.com/in/dario-hidalgo-a68b3390/" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/dariohidalgo" target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-primary transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>

                <p className="text-textMuted text-sm mt-16 pb-8">
                    © {new Date().getFullYear()} Dario Hidalgo. Construido con React & Tailwind.
                </p>
            </div>
        </section>
    );
}
