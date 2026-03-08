import { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setResult("");
        const formData = new FormData(event.target);
        formData.append("access_key", "e4a3c6fb-29b9-43bf-a24a-817faaf23aa2");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.success) {
                setResult("¡Mensaje enviado con éxito!");
                event.target.reset();
            } else {
                setResult("Error al enviar el mensaje. Inténtalo de nuevo.");
            }
        } catch (error) {
            setResult("Error de conexión al intentar enviar.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-4 w-full text-left">
            <div>
                <input
                    type="text"
                    name="name"
                    placeholder="Tu Nombre"
                    required
                    className="w-full bg-surface/50 border border-surfaceHover text-textMain placeholder-textMuted rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
            </div>
            <div>
                <input
                    type="email"
                    name="email"
                    placeholder="Tu Email"
                    required
                    className="w-full bg-surface/50 border border-surfaceHover text-textMain placeholder-textMuted rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
            </div>
            <div>
                <textarea
                    name="message"
                    placeholder="¿En qué puedo ayudarte?"
                    required
                    rows="4"
                    className="w-full bg-surface/50 border border-surfaceHover text-textMain placeholder-textMuted rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                ></textarea>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center px-8 py-4 text-sm font-medium text-background bg-primary rounded-lg hover:bg-primaryHover transition-colors focus:ring-2 focus:ring-primary/50 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
                {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                ) : (
                    <Send className="w-5 h-5 mr-2" />
                )}
                {isLoading ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {result && (
                <div className={`text-sm font-medium text-center p-3 rounded-lg mt-2 ${result.includes("Error") ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"}`}>
                    {result}
                </div>
            )}
        </form>
    );
}