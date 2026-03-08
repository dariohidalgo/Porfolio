import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return (
        <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-primary">
            {/* Navigation - Simple fixed header */}
            <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-surfaceHover/50">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="text-xl font-bold text-textMain font-mono">
                        DARIO<span className="text-primary">.DEV</span>
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-textMuted">
                        <a href="#about" className="hover:text-primary transition-colors">Sobre Mí</a>
                        <a href="#projects" className="hover:text-primary transition-colors">Proyectos</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
                    </div>
                </div>
            </nav>

            <Hero />
            <About />
            <Projects />
            <Contact />

        </main>
    );
}

export default App;
