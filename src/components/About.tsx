import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import WordsPullUpMultiStyle from './WordsPullUpMultiStyle'
import AnimatedLetter from './AnimatedLetter'

const bodyText =
  'Over the last few years, remote technical interviews have become the norm. InterviewEdge sits invisibly over your screen — capturing problems, generating structured solutions with brute force and optimal approaches, and disappearing before your interviewer ever notices. It never appears on screen recordings, Zoom, or Teams. Just you, your code, and your edge.'

export default function About() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })

  return (
    <section id="how-it-works" className="bg-black py-24 px-4 md:px-8">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] max-w-6xl mx-auto px-8 md:px-16 py-16 md:py-24 text-center">
        <p className="text-primary text-[10px] sm:text-xs mb-6 tracking-widest uppercase">
          Coding Interview AI
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-10">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'Meet InterviewEdge,', className: 'font-normal' },
              { text: 'your silent co-pilot.', className: 'font-serif italic' },
              { text: 'Built to solve DSA problems and guide you — live.', className: 'font-normal' },
            ]}
            containerClassName="text-[#E1E0CC]"
          />
        </h2>

        <div ref={ref} className="max-w-2xl mx-auto text-xs sm:text-sm md:text-base" style={{ color: '#DEDBC8' }}>
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
    </section>
  )
}
