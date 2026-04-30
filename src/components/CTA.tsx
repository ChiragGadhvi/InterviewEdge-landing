import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen } from 'lucide-react'

const DOWNLOAD_URL = 'https://github.com/ChiragGadhvi/InterviewEdge/releases/download/v1.1.0/InterviewEdge.1.1.0.exe'

export default function CTA() {
  return (
    <section id="download" className="w-full max-w-[1536px] mx-auto px-3 md:px-5 py-6 md:py-12">
      <div className="relative w-full h-[60vh] min-h-[420px] rounded-[1.5rem] md:rounded-[3rem] overflow-hidden flex flex-col items-center justify-center">
        {/* Background video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260427_104731_bfd355f7-1f84-4f81-ad88-52c2bca70bad.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8">
          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight tracking-[-0.03em] max-w-3xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Turn every interview into a win.
          </motion.h2>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a
              href={DOWNLOAD_URL}
              download
              className="group flex items-center gap-3 bg-white rounded-full pl-5 pr-2 py-2 text-[#1a1a2e] font-medium text-sm hover:bg-white/90 transition-colors"
            >
              Download for Windows
              <span className="bg-[#1a1a2e] rounded-full w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-3 text-white text-sm font-medium hover:bg-white/20 transition-colors border border-white/10"
            >
              <BookOpen className="w-4 h-4" />
              Read Docs
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
