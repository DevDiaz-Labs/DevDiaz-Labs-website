"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Search, Palette, Code2, Rocket } from "lucide-react"

/* ── Animation Variants ──────────────────────────────────────── */
const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } }
}

const STAGGER = {
    visible: { transition: { staggerChildren: 0.1 } }
}

const SLIDE_LEFT = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const } }
}

const SLIDE_RIGHT = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const } }
}

const SCALE_UP = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const } }
}

/* ── Data Constants ──────────────────────────────────────────── */
const PROCESS_STEPS = [
    {
        number: "01",
        icon: Search,
        title: "Descubrimiento",
        description: "Entendemos tu negocio y tus objetivos antes de escribir una sola línea de código.",
    },
    {
        number: "02",
        icon: Palette,
        title: "Diseño",
        description: "Creamos prototipos que priorizan la conversión y la experiencia del usuario final.",
    },
    {
        number: "03",
        icon: Code2,
        title: "Desarrollo",
        description: "Código limpio, rápido y seguro. Construimos lo mejor para tu negocio.",
    },
    {
        number: "04",
        icon: Rocket,
        title: "Entrega",
        description: "Lanzamiento optimizado y visible en Google, lista para recibir clientes desde el minuto uno.",
    },
]

const TEAM = [
    {
        name: "Hugo Díaz",
        initials: "HD",
        role: "Cofundador & Lead Developer",
        bio: "Lidera la arquitectura técnica de cada proyecto. Se encarga de que cada plataforma sea rápida, segura y construida para escalar.",
    },
    {
        name: "Erick Díaz",
        initials: "ED",
        role: "Cofundador & Developer",
        bio: "Desarrollador con pensamiento estratégico para crear soluciones digitales que impactan en los resultados del cliente.",
    },
]

/* ── Page Component ──────────────────────────────────────────── */
export default function NosotrosPage() {
    return (
        <main className="min-h-screen bg-[#121212] text-white selection:bg-[#00FF00]/30">
            <Navigation />

            {/* ═══════════════════════════════════════════════
                SECTION 1 — Hero
            ═══════════════════════════════════════════════ */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                {/* Background glows */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#00FF00]/10 to-transparent opacity-25 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00FF00]/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#00FF00]/8 rounded-full blur-[120px] pointer-events-none" />

                {/* Radial vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#121212_85%)] pointer-events-none" />

                {/* Subtle grid lines */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(0,255,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,0,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                    <motion.div initial="hidden" animate="visible" variants={STAGGER}>
                        <motion.span
                            variants={FADE_UP}
                            className="inline-block py-1.5 px-5 rounded-full bg-[#00FF00]/10 text-[#00FF00] text-xs font-bold tracking-widest uppercase mb-8 border border-[#00FF00]/20 shadow-[0_0_20px_rgba(0,255,0,0.1)]"
                        >
                            Sobre Nosotros
                        </motion.span>

                        <motion.h1
                            variants={FADE_UP}
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6 leading-[1.05]"
                        >
                            Código que convierte{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#00AA00] drop-shadow-[0_0_60px_rgba(0,255,0,0.3)]">
                                clientes.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={FADE_UP}
                            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-14"
                        >
                            No somos una agencia tradicional. Somos un laboratorio de desarrollo enfocado en crear plataformas rápidas, seguras y diseñadas para escalar las ventas de tu negocio.
                        </motion.p>

                        {/* Scroll CTA */}
                        <motion.a
                            variants={FADE_UP}
                            href="#problema"
                            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#00FF00] transition-colors"
                        >
                            Descubre cómo trabajamos
                            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 2 — El Problema / La Solución
            ═══════════════════════════════════════════════ */}
            <section id="problema" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-[#00FF00]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="font-mono text-[#00FF00] text-sm tracking-[0.2em] font-bold inline-block mb-3">
                            POR QUÉ EXISTIMOS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            El problema que resolvemos
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                        {/* The Problem */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={SLIDE_LEFT}
                            className="relative bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-10"
                        >
                            {/* Red accent */}
                            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]" />
                                <h3 className="text-xl font-bold text-white">El Problema</h3>
                            </div>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Muchos negocios tienen un producto increíble, pero su presencia digital no le hace justicia.
                                Páginas lentas, diseños anticuados y cero estrategia de conversión les cuestan
                                clientes cada día <span className="text-white font-medium">sin que lo sepan.</span>
                            </p>
                        </motion.div>

                        {/* The Solution */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={SLIDE_RIGHT}
                            className="relative bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-3xl p-8 md:p-10"
                        >
                            {/* Green accent */}
                            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00FF00]/40 to-transparent" />

                            <div className="flex items-center gap-3 mb-6">
                                <span className="w-3 h-3 rounded-full bg-[#00FF00] shadow-[0_0_12px_rgba(0,255,0,0.5)]" />
                                <h3 className="text-xl font-bold text-white">La Solución</h3>
                            </div>
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                Construimos plataformas que trabajan por ti las 24 horas: rápidas, seguras,
                                optimizadas para convertir visitantes en clientes.
                                <span className="text-white font-medium"> Sin plantillas genéricas, sin código desechable.</span>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 3 — Nuestro Proceso
            ═══════════════════════════════════════════════ */}
            <section className="py-24 bg-[#121212] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-20"
                    >
                        <span className="font-mono text-[#00FF00] text-sm tracking-[0.2em] font-bold inline-block mb-3">
                            METODOLOGÍA
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Nuestro Proceso
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        {PROCESS_STEPS.map((step, i) => (
                            <motion.div
                                key={step.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={SCALE_UP}
                                transition={{ delay: i * 0.12 }}
                                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-3xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#00FF00]/40 hover:shadow-[0_0_40px_rgba(0,255,0,0.1)]"
                            >
                                {/* Glow overlay */}
                                <div className="absolute inset-0 rounded-3xl bg-[#00FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Top accent */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00FF00]/30 to-transparent" />

                                <div className="relative z-10 flex flex-col h-full">
                                    {/* Step number + icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-[#00FF00]/10 flex items-center justify-center group-hover:bg-[#00FF00] transition-colors duration-300 shrink-0">
                                            <step.icon className="w-6 h-6 text-[#00FF00] group-hover:text-black transition-colors duration-300" />
                                        </div>
                                        <span className="text-[#00FF00]/15 font-black text-5xl font-mono leading-none select-none">{step.number}</span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{step.description}</p>

                                    {/* Connector line (not on last) */}
                                    {i < PROCESS_STEPS.length - 1 && (
                                        <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#00FF00]/30 to-transparent pointer-events-none" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 4 — Nuestro Origen
            ═══════════════════════════════════════════════ */}
            <section id="origen" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-[#00FF00]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="font-mono text-[#00FF00] text-sm tracking-[0.2em] font-bold inline-block mb-3">
                            NUESTRO ORIGEN
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            De una madrugada de código a un estudio de desarrollo.
                        </h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className="space-y-8"
                        >
                            {/* Hook — authentic, professional */}
                            <p className="text-gray-200 text-xl md:text-2xl leading-relaxed font-medium">
                                DevDiaz Labs no nació en una sala de juntas, sino de una obsesión compartida por la tecnología entre dos desarrolladores.
                            </p>

                            {/* Context — green accent border */}
                            <div className="border-l-2 border-[#00FF00]/40 pl-6">
                                <p className="text-gray-400 text-base leading-relaxed">
                                    Lo que comenzó como la creación de nuestras propias aplicaciones, nos reveló un problema mayor:
                                    negocios locales increíbles perdiendo clientes por tener una presencia digital invisible o rota.
                                    Decidimos usar nuestro background en ingeniería de software para cambiar las reglas del juego.
                                </p>
                            </div>

                            {/* Mission callout */}
                            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Hoy, cada proyecto que tomamos pasa por el mismo filtro:{" "}
                                    <span className="text-[#00FF00] font-bold">¿esto realmente va a generar un impacto medible?</span>{" "}
                                    Si la respuesta no es sí, volvemos a la pizarra.
                                </p>
                            </div>
                        </motion.div>

                        {/* Visual — Stylized monogram */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="flex items-center justify-center"
                        >
                            <div className="w-full aspect-[4/3] max-w-lg rounded-3xl border border-white/5 bg-white/[0.02] flex items-center justify-center overflow-hidden relative">
                                {/* Gradient glow background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#00FF00]/10 via-transparent to-[#00FF00]/5 pointer-events-none" />
                                {/* Terminal-style decorative element */}
                                <div className="relative z-10 text-center">
                                    <div className="font-mono text-[#00FF00]/20 text-[6rem] md:text-[8rem] font-black leading-none select-none">
                                        DL
                                    </div>
                                    <p className="text-white/30 font-mono text-xs tracking-[0.3em] uppercase mt-2">
                                        Desde 2024
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 5 — El Equipo
            ═══════════════════════════════════════════════ */}
            <section className="py-24 bg-[#121212] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#00FF00]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="font-mono text-[#00FF00] text-sm tracking-[0.2em] font-bold inline-block mb-3">
                            LAS MENTES CREATIVAS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            El Equipo
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {TEAM.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15, duration: 0.7 }}
                                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#00FF00]/30 hover:shadow-[0_0_40px_rgba(0,255,0,0.08)]"
                            >
                                {/* Hover glow overlay */}
                                <div className="absolute inset-0 rounded-3xl bg-[#00FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="relative z-10">
                                    {/* Avatar — stylized initials */}
                                    <div className="w-48 h-48 mx-auto mb-8 rounded-full border border-white/10 bg-gradient-to-br from-[#00FF00]/15 via-[#00FF00]/5 to-transparent flex items-center justify-center group-hover:border-[#00FF00]/40 group-hover:shadow-[0_0_40px_rgba(0,255,0,0.15)] transition-all duration-300">
                                        <span className="text-5xl font-black text-[#00FF00]/60 group-hover:text-[#00FF00]/90 transition-colors duration-300 select-none">
                                            {member.initials}
                                        </span>
                                    </div>

                                    {/* Name & Role */}
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                        <p className="text-[#00FF00] font-mono text-sm font-bold tracking-wide">
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* Green separator */}
                                    <div className="w-12 h-0.5 bg-[#00FF00]/30 mx-auto mb-6" />

                                    {/* Bio */}
                                    <p className="text-gray-400 text-sm leading-relaxed text-left">
                                        {member.bio}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 6 — CTA + Footer
            ═══════════════════════════════════════════════ */}
            <Footer />
        </main>
    )
}
