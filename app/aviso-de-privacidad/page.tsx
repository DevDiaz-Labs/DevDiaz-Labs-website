"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyNotice() {
    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#00FF00]/30">
            <Navigation />

            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[#00FF00] hover:text-[#00FF00]/80 transition-colors mb-12 group font-mono text-sm"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        VOLVER AL INICIO
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                        Aviso de <span className="text-[#00FF00]">Privacidad</span>
                    </h1>
                    <p className="text-gray-600 font-mono text-xs mb-12">
                    </p>

                    <div className="space-y-10 text-gray-400 leading-relaxed font-mono text-sm md:text-base">

                        {/* 1. Identidad y Domicilio */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                <span className="text-[#00FF00] mr-2">01.</span>
                                Identidad y Domicilio del Responsable
                            </h2>
                            <p>
                                <strong className="text-white">DevDiaz Labs</strong>, nombre comercial bajo el cual operan <strong className="text-white">Erick Gustavo Díaz García</strong> y <strong className="text-white">Hugo López Díaz</strong>, personas físicas con actividad empresarial bajo el Régimen Simplificado de Confianza (RESICO), con domicilio en Tamaulipas, México,es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:
                            </p>
                        </section>

                        {/* 2. Datos Personales que se Recaban */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                <span className="text-[#00FF00] mr-2">02.</span>
                                Datos Personales que Recabamos
                            </h2>
                            <p>
                                Para las finalidades señaladas en el presente aviso de privacidad, recabamos sus datos personales únicamente cuando usted nos los proporciona directamente a través de nuestros canales oficiales de contacto (WhatsApp o correo electrónico).
                            </p>
                            <p className="text-white font-bold text-sm mt-4 mb-2">Datos de contacto y proyecto:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Nombre completo o alias.</li>
                                <li>Número de teléfono (WhatsApp).</li>
                                <li>Correo electrónico.</li>
                                <li>Información sobre su proyecto, idea de negocio o requerimientos técnicos.</li>
                            </ul>
                            <p className="text-white font-bold text-sm mt-6 mb-2">Datos fiscales (en caso de facturación):</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Registro Federal de Contribuyentes (RFC).</li>
                                <li>Razón social o nombre fiscal.</li>
                                <li>Código postal fiscal.</li>
                                <li>Régimen fiscal.</li>
                                <li>Correo electrónico para recepción de facturas.</li>
                            </ul>
                        </section>

                        {/* 3. Finalidades del Tratamiento */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                <span className="text-[#00FF00] mr-2">03.</span>
                                Finalidades del Tratamiento
                            </h2>

                            <ul className="list-disc pl-5 space-y-2">
                                <li>Elaborar cotizaciones y propuestas técnicas para sus proyectos.</li>
                                <li>Desarrollar el software, sitio web, aplicación móvil o solución digital contratada.</li>
                                <li>Emitir facturas y comprobantes fiscales digitales (CFDI) cuando sea solicitado.</li>
                                <li>Brindar soporte técnico y seguimiento post-entrega.</li>
                                <li>Comunicarnos con usted para coordinar avances del proyecto.</li>
                            </ul>
                        </section>

                        {/* 4. Cookies y Tecnologías de Rastreo */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                <span className="text-[#00FF00] mr-2">04.</span>
                                Uso de Cookies y Tecnologías de Rastreo
                            </h2>
                            <p>
                                Nuestro sitio web <strong className="text-white">devdiazlabs.com</strong> utiliza tecnologías mínimas de navegación para garantizar la seguridad y el rendimiento:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>
                                    <strong className="text-white">Registros del Servidor (Logs):</strong> Debido al uso de infraestructura técnica (Cloudflare) para la protección y entrega del contenido, se recopilan de forma automática datos técnicos básicos como su dirección IP, tipo de navegador y páginas visitadas. Estos datos se utilizan <strong className="text-white">exclusivamente</strong> para fines de seguridad (mitigación de ataques DDoS), diagnóstico de errores y optimización del rendimiento, sin asociarlos a su identidad personal.
                                </li>
                                <li>
                                    <strong className="text-white">Sin Rastreo Publicitario:</strong> No utilizamos cookies de terceros para fines de marketing, remarketing, publicidad o perfiles de comportamiento del usuario.
                                </li>
                            </ul>
                        </section>

                        {/* 5. Transferencia de Datos */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                <span className="text-[#00FF00] mr-2">05.</span>
                                Transferencia de Datos
                            </h2>
                            <p>
                                DevDiaz Labs <strong className="text-white">no vende, alquila ni comercializa</strong> sus datos personales a terceros.
                            </p>
                            <p>
                                Sin embargo, para la operación de nuestros servicios, utilizamos infraestructura técnica de terceros que cuentan con estrictos protocolos de seguridad:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li><strong className="text-white">Hosting y Entrega de Contenido (Cloudflare):</strong> Para asegurar que nuestro sitio cargue rápido y sea resistente a ataques cibernéticos.</li>
                                <li><strong className="text-white">Comunicación (WhatsApp / Meta):</strong> Como canal de atención directa a clientes.</li>
                                <li><strong className="text-white">Infraestructura Tecnológica:</strong> Para almacenamiento seguro de activos digitales y código fuente.</li>
                            </ul>
                            <p>
                                Estos proveedores operan bajo sus propias políticas de privacidad y estándares de seguridad internacionales. Las transferencias se realizan conforme a lo dispuesto por la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
                            </p>
                        </section>

                        {/* 6. Medidas de Seguridad */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                <span className="text-[#00FF00] mr-2">06.</span>
                                Medidas de Seguridad
                            </h2>
                            <p>
                                En DevDiaz Labs implementamos medidas de seguridad técnicas, administrativas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado. Entre las medidas que aplicamos se encuentran:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Conexiones cifradas mediante protocolo HTTPS/SSL en todos nuestros sitios.</li>
                                <li>Buenas prácticas de desarrollo seguro en el código que producimos.</li>
                                <li>Acceso restringido a la información de clientes únicamente a personal autorizado.</li>
                                <li>Uso de plataformas con estándares de seguridad certificados para el almacenamiento de datos.</li>
                            </ul>
                        </section>

                        {/* 7. Derechos ARCO y Revocación */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                <span className="text-[#00FF00] mr-2">07.</span>
                                Derechos ARCO y Revocación del Consentimiento
                            </h2>
                            <p>
                                Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (<strong className="text-white">Acceso</strong>). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (<strong className="text-white">Rectificación</strong>); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (<strong className="text-white">Cancelación</strong>); así como oponerse al uso de sus datos personales para fines específicos (<strong className="text-white">Oposición</strong>).
                            </p>

                            <div className="bg-white/5 border border-[#00FF00]/20 rounded-2xl p-6 mt-4 space-y-3">
                                <p className="text-white font-bold text-sm">Para ejercer sus Derechos ARCO o revocar su consentimiento:</p>
                                <ol className="list-decimal pl-5 space-y-2 text-sm">
                                    <li>Envíe un correo electrónico a <strong className="text-[#00FF00]">devdiazlabs@gmail.com</strong> con el asunto &quot;Solicitud ARCO&quot;.</li>
                                    <li>Incluya su nombre completo, una descripción clara de los datos sobre los cuales desea ejercer su derecho, y cualquier documento que acredite su identidad.</li>
                                    <li>Recibirá una respuesta en un plazo máximo de <strong className="text-white">20 días hábiles</strong> a partir de la recepción de su solicitud.</li>
                                    <li>De resultar procedente, los cambios solicitados se harán efectivos dentro de los <strong className="text-white">15 días hábiles</strong> siguientes a la respuesta.</li>
                                </ol>
                            </div>
                        </section>

                        {/* 8. Cambios al Aviso */}
                        <section className="space-y-4">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                <span className="text-[#00FF00] mr-2">08.</span>
                                Cambios al Aviso de Privacidad
                            </h2>
                            <p>
                                DevDiaz Labs se reserva el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad, para la atención de novedades legislativas, políticas internas o nuevos requerimientos para la prestación u ofrecimiento de nuestros servicios.
                            </p>
                            <p>
                                Cualquier modificación al presente aviso de privacidad será publicada en nuestro sitio web:{" "}
                                <a href="https://devdiazlabs.com/aviso-de-privacidad" className="text-[#00FF00] hover:underline">
                                    devdiazlabs.com/aviso-de-privacidad
                                </a>
                            </p>
                        </section>

                        {/* 9. Consentimiento */}
                        <section className="pt-8 border-t border-white/10 space-y-4">
                            <h2 className="text-xl font-bold text-white tracking-tight">
                                <span className="text-[#00FF00] mr-2">09.</span>
                                Consentimiento
                            </h2>
                            <p>
                                Al utilizar nuestros servicios, proporcionar sus datos a través de nuestros canales de contacto, o continuar navegando en nuestro sitio web, usted acepta los términos del presente aviso de privacidad. Si no está de acuerdo con las prácticas descritas en este aviso, le pedimos que no proporcione información personal a través de nuestros canales de comunicación.
                            </p>
                        </section>

                        {/* Footer del Aviso */}
                        <section className="pt-10 border-t border-white/5 space-y-2">
                            <p className="text-xs text-gray-600 italic">
                                DevDiaz Labs — Reynosa, Tamaulipas, México.
                            </p>
                            <p className="text-xs text-gray-600 italic">
                                Última actualización: Febrero 2026.
                            </p>
                        </section>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </main>
    )
}
