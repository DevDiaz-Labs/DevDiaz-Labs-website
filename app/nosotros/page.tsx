"use client"

import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Rocket, ShieldCheck, Heart, ImageIcon } from "lucide-react"

const FADE_UP = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } }
}

const STAGGER = {
    visible: { transition: { staggerChildren: 0.1 } }
}

const VALUES = [
    {
        icon: Rocket,
        title: "Innovación Constante",
        description:
            "Siempre a la vanguardia. No seguimos modas tecnológicas, seleccionamos el stack más eficiente, rápido y moderno para que tu proyecto destaque hoy y mañana.",
    },
    {
        icon: ShieldCheck,
        title: "Código Limpio y Seguro",
        description:
            "Calidad sobre cantidad. Desarrollamos bajo principios SOLID y estrictas prácticas de seguridad. Entregamos arquitecturas robustas, fáciles de mantener y listas para escalar.",
    },
    {
        icon: Heart,
        title: "Enfoque Humano",
        description:
            "Entendemos personas, no solo máquinas. Diseñamos interfaces intuitivas y experiencias de usuario (UI/UX) que conectan, retienen y facilitan la vida de quien las usa.",
    },
]

const TEAM = [
    {
        name: "Erick Díaz",
        role: "Co-Founder & CEO / Lead Developer",
        bio: "Ingeniero de Sistemas enfocado en la arquitectura de software y el desarrollo de soluciones integrales. Apasionado por el entorno Linux, el código limpio y la creación de aplicaciones nativas y plataformas web que no solo funcionan, sino que dominan el mercado.",
    },
    {
        name: "Hugo Díaz",
        role: "Co-Founder & Estrategia Digital",
        bio: "El motor detrás de la escalabilidad y la visión del producto. Especializado en aterrizar los requerimientos complejos de los clientes y transformarlos en flujos de trabajo eficientes y soluciones digitales de alta conversión.",
    },
]

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
                            Las mentes detrás{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF00] to-[#00AA00] drop-shadow-[0_0_60px_rgba(0,255,0,0.3)]">
                                del código.
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={FADE_UP}
                            className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed mb-14"
                        >
                            No solo escribimos código. Creamos experiencias digitales que transforman ideas abstractas en realidades escalables.
                        </motion.p>

                        {/* Stats row */}
                        <motion.div
                            variants={FADE_UP}
                            className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12"
                        >
                            {[
                                { value: "2+", label: "Años de experiencia" },
                                { value: "15+", label: "Proyectos entregados" },
                                { value: "100%", label: "Clientes satisfechos" },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="text-3xl md:text-4xl font-black text-white">{stat.value}</p>
                                    <p className="text-xs md:text-sm text-gray-500 font-medium tracking-wide mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>

                        {/* Scroll CTA */}
                        <motion.a
                            variants={FADE_UP}
                            href="#historia"
                            className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-[#00FF00] transition-colors"
                        >
                            Conoce nuestra historia
                            <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 2 — Nuestra Historia
            ═══════════════════════════════════════════════ */}
            <section id="historia" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-[#00FF00]/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="font-mono text-[#00FF00] text-sm tracking-[0.2em] font-bold inline-block mb-3">
                            NUESTRA HISTORIA
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            Cómo Empezó Todo
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
                            {/* Hook paragraph — larger, brighter, grabs attention */}
                            <p className="text-gray-200 text-xl md:text-2xl leading-relaxed font-medium">
                                Todo empezó con dos primos, un par de laptops y la terquedad de hacer las cosas bien.
                            </p>

                            {/* Supporting paragraph — green accent border */}
                            <div className="border-l-2 border-[#00FF00]/40 pl-6">
                                <p className="text-gray-400 text-base leading-relaxed">
                                    Lo que comenzó como una curiosidad por construir herramientas y aplicaciones para resolver
                                    problemas cotidianos, rápidamente se convirtió en una obsesión por crear tecnología de alto nivel.
                                    Nos dimos cuenta de que muchos negocios operaban con sistemas anticuados o no sabían cómo
                                    dar el salto digital.
                                </p>
                            </div>

                            {/* Mission callout */}
                            <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6">
                                <p className="text-gray-300 text-base leading-relaxed">
                                    Así nació <span className="text-[#00FF00] font-bold">DevDiaz Labs</span>: un laboratorio de software donde fusionamos
                                    la ingeniería de sistemas con el diseño moderno. Desde digitalizar procesos para clínicas
                                    hasta desarrollar aplicaciones móviles desde cero, nuestro objetivo siempre ha sido el mismo:
                                    <span className="text-white font-medium"> que cada línea de código tenga un propósito claro y un impacto real en tu negocio.</span>
                                </p>
                            </div>
                        </motion.div>

                        {/* Photo Placeholder */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="flex items-center justify-center"
                        >
                            <div className="w-full aspect-[4/3] max-w-lg rounded-3xl border-2 border-dashed border-white/10 bg-white/[0.02] flex flex-col items-center justify-center gap-4">
                                <ImageIcon className="w-16 h-16 text-white/10" />
                                <p className="text-white/20 font-mono text-sm tracking-wide">
                                    Foto de equipo próximamente
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 3 — ¿Qué nos define?
            ═══════════════════════════════════════════════ */}
            <section className="py-24 bg-[#121212] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <span className="font-mono text-[#00FF00] text-sm tracking-[0.2em] font-bold inline-block mb-3">
                            NUESTRA FILOSOFÍA
                        </span>
                        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                            ¿Qué nos define?
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {VALUES.map((value, i) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.6 }}
                                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-[#00FF00]/40 hover:shadow-[0_0_40px_rgba(0,255,0,0.1)]"
                            >
                                {/* Glassmorphism glow on hover */}
                                <div className="absolute inset-0 rounded-3xl bg-[#00FF00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                {/* Top accent line */}
                                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#00FF00]/30 to-transparent" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[#00FF00]/10 flex items-center justify-center group-hover:bg-[#00FF00] transition-colors duration-300 shrink-0">
                                            <value.icon className="w-7 h-7 text-[#00FF00] group-hover:text-black transition-colors duration-300" />
                                        </div>
                                        <span className="text-[#00FF00]/20 font-black text-4xl font-mono leading-none select-none">0{i + 1}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed flex-grow">{value.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                SECTION 4 — El Equipo
            ═══════════════════════════════════════════════ */}
            <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
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
                                    {/* Avatar placeholder — larger */}
                                    <div className="w-48 h-48 mx-auto mb-8 rounded-full border-2 border-dashed border-white/10 bg-white/[0.02] flex items-center justify-center group-hover:border-[#00FF00]/30 group-hover:shadow-[0_0_30px_rgba(0,255,0,0.1)] transition-all duration-300">
                                        <ImageIcon className="w-14 h-14 text-white/10" />
                                    </div>

                                    {/* Name & Role — centered */}
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                                        <p className="text-[#00FF00] font-mono text-sm font-bold tracking-wide">
                                            {member.role}
                                        </p>
                                    </div>

                                    {/* Green separator */}
                                    <div className="w-12 h-0.5 bg-[#00FF00]/30 mx-auto mb-6" />

                                    {/* Bio — left aligned for readability */}
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
                SECTION 5 — CTA + Footer (Reused)
            ═══════════════════════════════════════════════ */}
            <Footer />
        </main>
    )
}
