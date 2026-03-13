import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EXTERNAL_LINKS } from "@/lib/constants"
import Link from "next/link"

const PROJECTS = [
    {
        id: "climas",
        client: "Servicio de Climas Premium",
        title: "Digitalizando el Mantenimiento Residencial e Industrial",
        problem: "Dependencia de recomendaciones de boca en boca y falta de presencia digital profesional que limitaba el alcance a clientes de alto perfil.",
        solution: "Sitio web moderno, rápido y enfocado en la conversión, destacando la experiencia, certificaciones y facilitando el contacto por WhatsApp.",
        result: "Mayor confianza percibida por prospectos corporativos y un aumento directo en solicitudes de mantenimiento preventivo a través de canales digitales.",
    },
    {
        id: "dentista",
        client: "Clínica Dental",
        title: "Experiencia Paciente desde el Primer Clic",
        problem: "Dificultad para explicar tratamientos complejos visualmente y una presencia web anticuada que no reflejaba la modernidad de las instalaciones de la clínica.",
        solution: "Rediseño completo de la experiencia de usuario (UX), incorporando un catálogo claro de servicios (Ortodoncia, Implantes, etc.) y un flujo de agendamiento sin fricciones.",
        result: "Reducción en el tiempo que el personal de recepción pasa explicando servicios básicos y un incremento en citas agendadas fuera de horario laboral.",
    },
    {
        id: "spa",
        client: "Spa & Bienestar Relax",
        title: "Lujo y Tranquilidad en Formato Digital",
        problem: "Imposibilidad de vender certificados de regalo online y un diseño web saturado que contradecía la promesa de relajación del negocio físico.",
        solution: "Estética minimalista (el poder del espacio en blanco), paletas de colores neutros/tierra y una integración fluida de paquetes de servicios.",
        result: "Aumento del 40% en ventas de paquetes de regalos para parejas y una mejora drástica en la retención de usuarios en la página de catálogo.",
    }
];

export default function ProyectosPage() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] pt-32">
            <Navigation />

            <div className="max-w-7xl mx-auto px-6 mb-20">
                <div className="text-center mb-24">
                    <span className="font-mono text-[#00FF00] text-sm tracking-[0.2em] font-bold inline-block mb-3">
                        NUESTRO TRABAJO
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-[1.1]">
                        <span className="block">Transformando</span>
                        <span className="block text-gray-500">Negocios con Código</span>
                    </h1>
                    <p className="mt-6 text-gray-400 font-mono max-w-2xl mx-auto text-lg">
                        No somos una galería de arte; somos desarrolladores orientados a resultados.
                        Conoce cómo hemos resuelto problemas reales.
                    </p>
                </div>

                {/* Proyectos Loop */}
                <div className="space-y-32">
                    {PROJECTS.map((project, index) => (
                        <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                            {/* Image Block (Left on EVEN index, Right on ODD) */}
                            <div className={`lg:col-span-7 ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#121212] border border-white/5 shadow-2xl flex items-center justify-center group">
                                    {/* Subtle Background Glow */}
                                    <div className="absolute inset-0 bg-[#00FF00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />

                                    {/* Placeholder Content for the User to Replace Later */}
                                    <div className="relative z-10 text-center">
                                        <svg className="w-16 h-16 text-white/10 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-white/30 font-mono text-sm">Espacio para Captura de Pantalla</p>
                                        <p className="text-[#00FF00]/50 font-mono text-xs mt-2 uppercase tracking-wider">{project.client}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Text Block */}
                            <div className={`lg:col-span-5 space-y-8 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-black text-white mb-2">{project.title}</h2>
                                    <p className="text-[#00FF00] font-mono text-sm tracking-widest uppercase">{project.client}</p>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> El Problema
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                            {project.problem}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> La Solución
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                            {project.solution}
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-white font-bold mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#00FF00]" /> El Resultado
                                        </h3>
                                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                                            {project.result}
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </main>
    )
}
