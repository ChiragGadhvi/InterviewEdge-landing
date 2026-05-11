import { motion, useTransform, MotionValue } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  progress: MotionValue<number>
  index: number
  total: number
}

export default function AnimatedLetter({ char, progress, index, total }: AnimatedLetterProps) {
  const charProgress = index / total
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.45, 1])

  return (
    <motion.span style={{ opacity }} className="inline-block whitespace-pre">
      {char}
    </motion.span>
  )
}
