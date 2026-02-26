"use client"

import type React from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useRef } from "react"

import Link from "next/link"
import { EXTERNAL_LINKS } from "@/lib/constants"
import { useMediaQuery } from "@/hooks/use-media-query"

/* ── Magnetic Icon Sub-component ─────────────────────────────── */
function MagneticIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLAnchorElement>(null)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15 })
  const springY = useSpring(y, { stiffness: 200, damping: 15 })

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isDesktop) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    x.set(dx * 0.35)
    y.set(dy * 0.35)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={isDesktop ? { x: springX, y: springY } : undefined}
      className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/50 hover:text-[#00FF00] hover:border-[#00FF00]/40 hover:shadow-[0_0_18px_rgba(0,255,0,0.2)] transition-colors duration-300"
    >
      {children}
    </motion.a>
  )
}

/* ── Social Links Config ─────────────────────────────────────── */
const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/devdiaz_labs?igsh=MXMzbmx1dDhzdzM2OA==",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    href: "https://www.facebook.com/share/17jmbhbGgB/",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    href: "https://www.tiktok.com/@devdiazlabs?_r=1&_t=ZS-93s7OAopWW9",
    label: "TikTok",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M16.6 5.82A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.57 0-1.42 1.18-2.58 2.6-2.58.27 0 .53.04.78.11V9.72c-.26-.04-.52-.06-.78-.06A6.164 6.164 0 003.72 15.8 6.164 6.164 0 009.86 22a6.164 6.164 0 006.14-6.14V9.72a7.698 7.698 0 004.5 1.44V8.07a4.278 4.278 0 01-3.9-2.25z" />
      </svg>
    ),
  },
]

/* ── Footer Component ────────────────────────────────────────── */
export function Footer() {
  return (
    <footer id="contact" className="relative bg-[#121212] pt-24 pb-6 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#00FF00]/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          id="contacto-final"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] mb-6">
            <motion.span
              className="block"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              ¿LISTO PARA TRANSFORMAR
            </motion.span>
            <motion.span
              className="block text-[#00FF00]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              TUS IDEAS?
            </motion.span>
          </h2>

          <motion.p
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-mono leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Llevamos tu proyecto del concepto al código. Cuéntanos qué quieres construir y hagámoslo realidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href={EXTERNAL_LINKS.WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Cotizar proyecto por WhatsApp"
              className="inline-flex items-center gap-3 bg-[#00FF00] text-black font-bold px-8 py-4 rounded-full hover:shadow-[0_0_30px_rgba(0,255,0,0.4)] transition-all duration-300 md:text-lg group"
            >
              {/* Official WhatsApp Logo SVG */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Cotizar mi Proyecto Ahora
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-white/60 font-mono text-xs max-w-xl mx-auto leading-relaxed">
            DevDiaz Labs es un estudio de desarrollo de software especializado en crear soluciones que transforman la vida de las personas.
          </p>
        </motion.div>

        {/* Social Icons – Magnetic Band */}
        <motion.div
          className="flex justify-center items-center gap-5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {SOCIAL_LINKS.map((social) => (
            <MagneticIcon key={social.label} href={social.href} label={social.label}>
              {social.icon}
            </MagneticIcon>
          ))}
        </motion.div>

        {/* Minimalist Footer Bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/10 gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="text-xl font-black">
              <span className="text-white">DevDiaz</span>
              <span className="text-[#00FF00]">Labs</span>
            </span>
          </motion.div>

          <Link href="/aviso-de-privacidad">
            <p className="text-white/40 font-mono text-xs hover:text-[#00FF00] cursor-pointer transition-colors duration-300">
              Aviso de Privacidad
            </p>
          </Link>

          <p className="text-white/40 font-mono text-xs">© 2026 DevDiaz Labs</p>

        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[10rem] md:text-[20rem] font-black text-white/[0.02] pointer-events-none select-none leading-none whitespace-nowrap"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        DevDiaz
      </motion.div>
    </footer>
  )
}
