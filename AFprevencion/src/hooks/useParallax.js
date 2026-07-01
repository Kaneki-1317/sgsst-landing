import { useScroll, useTransform } from 'framer-motion'

export function useParallax(targetRef, { range = 40, invert = false } = {}) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  })
  const output = invert ? [range, -range] : [-range, range]

  return useTransform(scrollYProgress, [0, 1], output)
}
