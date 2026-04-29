import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'

const cards = [
  {
    type: 'video' as const,
    label: 'Your invisible edge.',
  },
  {
    type: 'feature' as const,
    number: '01',
    title: 'Instant Capture.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Screenshot any problem instantly',
      'Works with any IDE or browser',
      'Or type the problem manually',
      'Auto-sends to AI for analysis',
    ],
  },
  {
    type: 'feature' as const,
    number: '02',
    title: 'AI Solutions.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'Brute force + optimized approaches',
      'Time & space complexity analysis',
      'Interview-ready clean code',
    ],
  },
  {
    type: 'feature' as const,
    number: '03',
    title: 'Stealth Overlay.',
    icon: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Invisible to Zoom, Teams & screen recorders',
      'Click-through when not in use',
      'Always on top, never in the way',
    ],
  },
]

export default function Features() {
  const headerRef = useRef(null)
  const gridRef = useRef(null)
  const isGridInView = useInView(gridRef, { once: true, margin: '-100px' })

  return (
    <section id="features" className="min-h-screen bg-black relative py-24 px-4 md:px-8">
      {/* Noise bg */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Stealth-grade tools for serious candidates.', className: 'text-[#E1E0CC]' },
              ]}
            />
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
            <WordsPullUpMultiStyle
              segments={[
                { text: 'Built for clarity. Powered by AI.', className: 'text-gray-500' },
              ]}
            />
          </h3>
        </div>

        {/* Cards grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isGridInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {card.type === 'video' ? (
                <div className="relative w-full h-full min-h-[300px] lg:min-h-0">
                  <video
                    src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-base font-medium" style={{ color: '#E1E0CC' }}>
                      {card.label}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="bg-[#212121] w-full h-full min-h-[300px] lg:min-h-0 p-5 flex flex-col justify-between">
                  <div>
                    <img
                      src={card.icon}
                      alt=""
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded mb-4 object-cover"
                    />
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-[#E1E0CC] text-lg font-medium leading-tight">{card.title}</h3>
                      <span className="text-gray-600 text-sm font-light">{card.number}</span>
                    </div>
                    <ul className="space-y-2">
                      {card.items!.map((item, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-gray-400 text-xs sm:text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <button className="flex items-center gap-1 text-primary text-xs sm:text-sm hover:gap-2 transition-all duration-200">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5 -rotate-45" />
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
