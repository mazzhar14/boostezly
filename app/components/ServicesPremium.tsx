"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ServicesPremium() {
  const ref = useRef<HTMLDivElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const yParallax = useTransform(scrollYProgress, [0, 1], [80, -80])

  return (
    <section
      ref={ref}
      id="services"
      className="relative py-28 bg-white overflow-hidden scroll-mt-24"
    >
      {/* Teal Glow Background */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute top-0 left-1/2 -translate-x-1/2
                   w-[600px] h-[600px]
                   bg-[#14B8A6]/15
                   blur-3xl rounded-full"
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Services
          </h2>
          <p className="text-gray-600 mt-4">
            High-impact digital solutions designed to scale your brand
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Web Development",
              desc: "High-performance websites built with modern technologies like Next.js and React.",
            },
            {
              title: "Automation",
              desc: "Streamline business processes with intelligent automation systems.",
            },
            {
              title: "AI Solutions",
              desc: "Leverage AI-powered tools to improve efficiency and innovation.",
            },
          ].map((service, index) => (
            <motion.div
  key={index}
  initial={{ opacity: 0, y: 60, scale: 0.95 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 0.7,
    delay: index * 0.2,
  }}
  viewport={{ once: true }}
  whileHover={{
    y: -8,
    boxShadow: "0px 25px 60px rgba(20,184,166,0.25)",
  }}
  className="p-8 rounded-2xl
             bg-white
             border border-gray-200
             transition-all duration-300"
>
  <h4 className="text-xl font-semibold mb-4 text-[#14B8A6]">
    {service.title}
  </h4>

  <p className="text-gray-600">
    {service.desc}
  </p>
</motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}