"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
    Banknote,
    Briefcase,
    Rocket,
    Building2,
    Trophy,
    CheckCircle2,
    ChevronDown,
    ArrowRight
} from "lucide-react"
import { useState } from "react"

const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } }
}

const STAGGER = {
    visible: { transition: { staggerChildren: 0.1 } }
}

export default function ReferidosPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null)

    const faqs = [
        {
            q: "¿Cómo participo?",
            a: "Es muy sencillo. Regístrate siguiéndonos en Facebook e Instagram y enviándonos tus capturas por WhatsApp. Una vez registrado, solo asegúrate de que tu referido nos mencione al contactarnos; nosotros nos encargamos del resto y te notificaremos al cerrar la venta."
        },
        {
            q: "¿Cuándo recibo mis $200 MXN?",
            a: "El pago se libera el viernes inmediato posterior a que el cliente referido realice el pago del proyecto."
        },
        {
            q: "¿Cuándo se reinicia el conteo anual?",
            a: "El concurso es anual. Cada 1 de enero el contador vuelve a cero para dar oportunidad a todos de ganar el mantenimiento o el bono 7+."
        },
        {
            q: "¿Qué pasa si hay un empate en el Nivel Empresarial?",
            a: "Ganará el negocio cuyo valor total de referidos sea mayor. Si el monto es idéntico, se premiará a quien haya llegado primero a la cifra."
        },
        {
            q: "¿Qué pasa si hay un empate en el Nivel 7+?",
            a: "Ganará la persona cuyo valor total de referidos sea mayor. Si el monto es idéntico, se premiará a quien haya llegado primero a la cifra."
        },
        {
            q: "¿Que incluye el mantenimiento?",
            a: "El mantenimiento incluye actualizaciones de seguridad, corrección de errores, optimización de rendimiento y cambios menores en textos, imágenes y enlaces. No incluye el desarrollo de nuevas funcionalidades. No incluye el nombre de dominio."
        }
    ]

    return (
        <main className="min-h-screen bg-[#121212] text-white selection:bg-[#00FF00]/30">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00FF00]/10 to-transparent opacity-20 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FF00]/10 rounded-full blur-[128px] pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={STAGGER}
                    >
                        <motion.span
                            variants={FADE_UP}
                            className="inline-block py-1 px-4 rounded-full bg-[#00FF00]/10 text-[#00FF00] text-xs font-bold tracking-widest uppercase mb-6 border border-[#00FF00]/20"
                        >
                            Programa de Referidos 2026
                        </motion.span>

                        <motion.h1
                            variants={FADE_UP}
                            className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-[1.1]"
                        >
                            Recomienda DevDiaz Labs <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#00AA00]">
                                y Gana con Nosotros
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={FADE_UP}
                            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            Convierte tus recomendaciones en ingresos en efectivo directos a tu cuenta o en mantenimiento gratuito de alto nivel para tu negocio.
                        </motion.p>

                        <motion.div
                            variants={FADE_UP}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <a
                                href="#recompensas"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-[#00FF00] rounded-full hover:shadow-[0_0_25px_rgba(0,255,0,0.4)] transition-all hover:scale-105"
                            >
                                Ver Recompensas
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </a>
                            <a
                                href="#faq"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-white/10 rounded-full hover:bg-white/5 transition-all"
                            >
                                Cómo Funciona
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Rewards Grid */}
            <section className="py-24 bg-[#0a0a0a] relative" id="recompensas">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-sm font-bold text-[#00FF00] uppercase tracking-widest mb-3"
                        >
                            Recompensas Directas
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-3xl md:text-4xl font-black text-white"
                        >
                            Gana por cada cliente cerrado
                        </motion.h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Reward Card 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative p-8 bg-[#121212] rounded-3xl border border-white/5 hover:border-[#00FF00]/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110">
                                <Banknote size={180} className="text-[#00FF00]" />
                            </div>

                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00FF00]/10 text-[#00FF00] mb-8">
                                <Briefcase size={28} />
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-3">Para Negocios y Personas</h4>
                            <p className="text-gray-400 mb-8 max-w-sm">Ideal para freelancers, agencias y consultores que conocen negocios que necesitan Página Web.</p>

                            <div className="space-y-6">
                                <div className="flex items-end gap-2">
                                    <span className="text-5xl font-black text-white tracking-tighter">$200</span>
                                    <span className="text-gray-500 mb-2 font-medium">MXN</span>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.03] border-l-4 border-[#00FF00]">
                                    <p className="text-sm text-gray-400">
                                        Por cada venta cerrada.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Reward Card 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="group relative p-8 bg-[#121212] rounded-3xl border border-white/5 hover:border-[#00FF00]/30 transition-all duration-500 overflow-hidden"
                        >
                            <div className="absolute -top-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 transform group-hover:scale-110 rotate-12">
                                <Rocket size={180} className="text-[#00FF00]" />
                            </div>

                            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00FF00]/10 text-[#00FF00] mb-8">
                                <Rocket size={28} />
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-3">Sin Límites</h4>
                            <p className="text-gray-400 mb-8 max-w-sm">No hay tope en tus ganancias. Mientras más recomiendes, más ganas mes a mes.</p>

                            <div className="space-y-6">
                                <div className="flex flex-wrap gap-4">
                                    <span className="flex items-center text-sm font-semibold text-gray-300">
                                        <span className="w-2 h-2 rounded-full bg-[#00FF00] mr-2"></span> Pago por transferencia Bancaria
                                    </span>
                                </div>
                                <div className="p-4 rounded-xl bg-white/[0.03] border-l-4 border-[#00FF00]">
                                    <p className="text-sm text-gray-400">
                                        Pagos rápidos y transparentes. Coordinación directa vía WhatsApp.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Major Prizes */}
            <section className="py-24 bg-[#121212] overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="inline-block py-1 px-3 rounded text-[10px] font-black tracking-[0.2em] uppercase bg-yellow-500/10 text-yellow-500 mb-4 border border-yellow-500/20"
                        >
                            El Gran Concurso Anual
                        </motion.span>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black text-white mb-4"
                        >
                            Premios Mayores
                        </motion.h3>
                        <p className="text-gray-500 font-medium">Recompensa adicional para nuestros Top Referrers del año.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                        {/* Business Tier */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-3xl bg-[#0a0a0a] border border-white/5 p-8 md:p-10"
                        >
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#00FF00]/5 rounded-bl-full pointer-events-none" />

                            <div className="flex items-center gap-5 mb-10">
                                <div className="p-4 bg-white/[0.03] rounded-2xl text-[#00FF00] border border-white/5">
                                    <Building2 size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white leading-none mb-2">Nivel Empresarial</h4>
                                    <p className="text-sm text-[#00FF00]/70 font-bold uppercase tracking-wider">Para dueños de negocios</p>
                                </div>
                            </div>

                            <h5 className="text-3xl font-black text-white mb-6">Mantenimiento Anual GRATIS</h5>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Para negocios con 5+ referidos exitosos.",
                                    "Soporte técnico prioritario 24/7.",
                                    "Hosting premium y actualizaciones de seguridad."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-400">
                                        <CheckCircle2 size={18} className="text-[#00FF00] shrink-0 mt-1" />
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Individual Tier */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00FF00]/10 to-transparent border border-[#00FF00]/20 p-8 md:p-10"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF00]/10 blur-[80px] rounded-full pointer-events-none" />

                            <div className="flex items-center gap-5 mb-10 relative z-10">
                                <div className="p-4 bg-black rounded-2xl text-[#00FF00] border border-[#00FF00]/30 shadow-[0_0_20px_rgba(0,255,0,0.15)]">
                                    <Trophy size={32} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white leading-none mb-2">Nivel Individual</h4>
                                    <p className="text-sm text-[#00FF00] font-bold uppercase tracking-wider">El Súper Bono 7+</p>
                                </div>
                            </div>

                            <h5 className="text-3xl font-black text-white mb-8 relative z-10">Elige tu Recompensa</h5>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 relative z-10">
                                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-5 border border-white/10 group hover:border-[#00FF00]/50 transition-colors">
                                    <span className="block text-[#00FF00] font-black text-sm uppercase tracking-wider mb-2">Opción A</span>
                                    <p className="text-white font-bold leading-tight">Página Web Profesional Gratis</p>
                                    <span className="block text-[10px] text-gray-500 font-bold mt-2 uppercase tracking-wide">(Valor $2,500 MXN)</span>
                                </div>
                                <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-5 border border-white/10 group hover:border-[#00FF00]/50 transition-colors">
                                    <span className="block text-[#00FF00] font-black text-sm uppercase tracking-wider mb-2">Opción B</span>
                                    <p className="text-white font-bold leading-tight">+$100 MXN Bono Extra</p>
                                    <span className="block text-[10px] text-gray-500 font-bold mt-2 uppercase tracking-wide">Por cada referido</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 bg-[#0a0a0a]" id="faq">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-3xl md:text-5xl font-black text-white mb-4"
                        >
                            Reglas del Juego
                        </motion.h2>
                        <p className="text-gray-500 font-medium italic">Todo claro, sin letras chiquitas.</p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group"
                            >
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className={`w-full text-left p-6 rounded-2xl bg-[#121212] border transition-all duration-300 flex items-center justify-between ${openFaq === i ? 'border-[#00FF00]/30 shadow-[0_0_20px_rgba(0,255,0,0.05)]' : 'border-white/5 hover:border-white/10'
                                        }`}
                                >
                                    <span className={`text-lg font-bold transition-colors ${openFaq === i ? 'text-[#00FF00]' : 'text-gray-200 group-hover:text-white'}`}>
                                        {faq.q}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-[#00FF00]' : 'text-gray-500'}`} />
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-2 text-gray-400 leading-relaxed font-medium">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
