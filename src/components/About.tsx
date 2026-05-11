import { useRef, useEffect } from 'react'
import { motion, useScroll } from 'framer-motion'
import AnimatedLetter from './AnimatedLetter'

const bodyText =
  'InterviewEdge sits invisibly over your screen — capturing problems, generating solutions, and disappearing before your interviewer ever notices. Never appears on Zoom, Teams, or any screen recording. Just you, your code, and your edge.'

const stats = [
  { value: '< 5s', label: 'Solution speed' },
  { value: '100%', label: 'Undetectable' },
  { value: '10+', label: 'Languages' },
  { value: '∞', label: 'Problem types' },
]

const bullets = [
  { label: 'Invisible overlay', desc: 'Never shows on screen share or recordings' },
  { label: 'Any problem type', desc: 'LeetCode, System Design, DevOps, Frontend, Backend' },
  { label: 'Instant answers', desc: 'Screenshot → structured solution in seconds' },
  { label: 'Your language', desc: 'Python, JS, Go, Java, C++ — you choose' },
]

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    document.body.appendChild(script)
    return () => { document.body.removeChild(script) }
  }, [])

  return (
    <section id="how-it-works" className="bg-black py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4">

        {/* LEFT — details card */}
        <motion.div
          className="bg-[#0f0f0f] border border-white/[0.06] rounded-2xl md:rounded-[2rem] p-8 md:p-10 flex flex-col gap-7"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Top */}
          <div className="flex flex-col gap-3">
            <p className="text-white/30 text-[10px] uppercase tracking-widest">
              Coding Interview AI
            </p>

            <h2
              className="font-medium text-[#E1E0CC] leading-[1.0] tracking-[-0.05em]"
              style={{ fontSize: 'clamp(3.1rem, 6.5vw, 5.2rem)' }}
            >
              Your silent<br />
              <span className="font-serif italic text-white/50">co-pilot.</span>
            </h2>

            <div ref={ref} className="text-base md:text-lg text-white/45 leading-relaxed max-w-sm">
              {bodyText.split('').map((char, i) => (
                <AnimatedLetter
                  key={i}
                  char={char}
                  progress={scrollYProgress}
                  index={i}
                  total={bodyText.length}
                />
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-4 gap-2 border-t border-white/[0.06] pt-4">
            {stats.map(s => (
              <div key={s.label} className="flex flex-col gap-1">
                <span
                  className="font-medium text-[#E1E0CC] leading-none tracking-tight"
                  style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)' }}
                >
                  {s.value}
                </span>
                <span className="text-white/30 text-[10px] leading-snug">{s.label}</span>
              </div>
            ))}
          </div>

          {/* Bullet grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {bullets.map(b => (
              <div
                key={b.label}
                className="bg-white/[0.03] border border-white/[0.05] rounded-xl px-4 py-3"
              >
                <p className="text-[#E1E0CC] text-base font-medium leading-snug">{b.label}</p>
                <p className="text-white/30 text-sm leading-snug mt-0.5">{b.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — X post card */}
        <motion.div
          className="bg-[#0f0f0f] border border-white/[0.06] rounded-2xl md:rounded-[2rem] p-8 md:p-12 flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-white/30 text-[10px] uppercase tracking-widest self-start">
            See it in action
          </p>

          <div className="w-full flex justify-center">
            <blockquote className="twitter-tweet" data-dnt="true" data-theme="dark">
              <p lang="en" dir="ltr">
                Wasn&#39;t gonna pay{' '}
                <a href="https://twitter.com/im_roy_lee?ref_src=twsrc%5Etfw">@im_roy_lee</a> $200/month
                so I built my own 😭 Introducing Interview Edge — my version of{' '}
                <a href="https://twitter.com/InterviewCoder?ref_src=twsrc%5Etfw">@InterviewCoder</a>{' '}
                for Leetcode prep 🚀{' '}
                <a href="https://twitter.com/hashtag/BuiltInPublic?src=hash&amp;ref_src=twsrc%5Etfw">#BuiltInPublic</a>{' '}
                <a href="https://t.co/251LmjAmxA">pic.twitter.com/251LmjAmxA</a>
              </p>
              &mdash; Chirag Gadhvi (@Chirag__Gadhvi){' '}
              <a href="https://twitter.com/Chirag__Gadhvi/status/2050232040596140530?ref_src=twsrc%5Etfw">
                May 1, 2026
              </a>
            </blockquote>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
