import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import WordsPullUp from './WordsPullUp'

export default function Hero() {
  const [showContact, setShowContact] = useState(false)

  return (
    <section className="h-screen p-4 md:p-6">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Noise overlay */}
        <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

        {/* Hero content — bottom aligned */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-10">
          <div className="grid grid-cols-12 items-end gap-4">
            {/* Heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em]"
                style={{
                  fontSize: 'clamp(3rem, 16vw, 11rem)',
                  color: '#E1E0CC',
                  paddingBottom: '10px',
                }}
              >
                <WordsPullUp text="Interview" showAsterisk={false} />
                <WordsPullUp text="Edge*" showAsterisk={false} />
              </h1>
            </div>

            {/* Description + CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 pb-2">
              <motion.p
                className="text-primary/70 text-xs sm:text-sm md:text-base"
                style={{ lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                The invisible AI co-pilot for your next coding interview. Undetectable on any screen share, always one step ahead.
              </motion.p>

              <motion.div
                className="relative"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <button
                  onClick={() => setShowContact(v => !v)}
                  className="group inline-flex items-center gap-2 bg-primary rounded-full pl-4 pr-1 py-1 w-fit hover:gap-3 transition-all duration-300"
                >
                  <span className="text-black font-medium text-sm sm:text-base">Get Access</span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4 text-[#E1E0CC]" />
                  </span>
                </button>

                <AnimatePresence>
                  {showContact && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute bottom-full mb-3 left-0 bg-[#0f0f0f] border border-white/10 rounded-2xl p-4 w-72 shadow-2xl"
                    >
                      <button
                        onClick={() => setShowContact(false)}
                        className="absolute top-3 right-3 text-white/30 hover:text-white/70 transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      <p className="text-white/50 text-xs mb-3">Reach out to get access</p>
                      <a
                        href="mailto:chiraggadhvi7272@gmail.com"
                        className="block text-[#E1E0CC] text-sm font-medium hover:text-white transition-colors mb-1"
                      >
                        chiraggadhvi7272@gmail.com
                      </a>
                      <a
                        href="https://chiraggadhvi.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-[#E1E0CC]/60 text-sm hover:text-[#E1E0CC] transition-colors"
                      >
                        chiraggadhvi.in
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
