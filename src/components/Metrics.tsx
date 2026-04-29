import { motion } from 'framer-motion'

const metrics = [
  { value: '14K+', label: 'Active Installations' },
  { value: '< 500ms', label: 'AI Response Time' },
  { value: '5', label: 'Languages Supported' },
  { value: '100%', label: 'Invisible on Screen Share' },
]

export default function Metrics() {
  return (
    <section className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-6 md:py-12">
      <div
        className="rounded-[1.5rem] md:rounded-[3rem] p-8 md:p-16"
        style={{
          background: 'rgba(30,50,90,0.02)',
          border: '1px solid rgba(30,50,90,0.05)',
        }}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0" style={{ borderColor: 'rgba(30,50,90,0.1)' }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="px-6 py-8 md:px-10 first:pl-0 last:pr-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-3xl md:text-5xl font-medium tracking-tight text-[#1a1a2e] mb-2">
                {m.value}
              </p>
              <p className="text-sm md:text-base text-[rgba(30,50,90,0.5)] leading-snug">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
