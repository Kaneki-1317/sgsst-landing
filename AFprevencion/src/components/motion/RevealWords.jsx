import { motion } from 'framer-motion'
import { EASE, viewportDefault } from './variants'
import { useEntranceProps } from './useEntrance'

function wordVariants(blur, distance, duration, ease, isEmphasized) {
  // `times` solo tiene sentido para `scale`/`rotate` (keyframe arrays); si se aplica al nivel
  // superior de `transition`, Framer Motion intenta usarlo también para opacity/y/filter
  // (valores escalares) y esas propiedades dejan de animarse. Por eso cada una lleva su propio
  // sub-transition y el resto usa uno simple.
  return {
    hidden: { opacity: 0, y: distance, filter: `blur(${blur}px)` },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: isEmphasized ? [1, 1, 1.35, 1] : 1,
      rotate: isEmphasized ? [0, -8, 8, 0] : 0,
      transition: isEmphasized
        ? {
            duration,
            ease,
            scale: { duration: duration + 0.45, times: [0, 0.5, 0.75, 1], ease },
            rotate: { duration: duration + 0.45, times: [0, 0.5, 0.75, 1], ease },
          }
        : { duration, ease },
    },
  }
}

function RevealWords({
  children,
  as = 'h2',
  wordStagger = 0.07,
  duration = 0.6,
  distance = 24,
  blur = 6,
  ease = EASE,
  delay = 0,
  once = true,
  amount = viewportDefault.amount,
  trigger = 'inView',
  emphasizeWords = [],
  className,
  ...rest
}) {
  const Component = motion[as]
  const words = typeof children === 'string' ? children.split(' ') : []
  const entranceProps = useEntranceProps({ once, amount, trigger })

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: wordStagger, delayChildren: delay } },
  }

  return (
    <Component aria-label={children} variants={container} className={className} {...entranceProps} {...rest}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          variants={wordVariants(blur, distance, duration, ease, emphasizeWords.includes(word))}
          style={{ display: 'inline-block', marginRight: index < words.length - 1 ? '0.28em' : 0 }}
        >
          {word}
        </motion.span>
      ))}
    </Component>
  )
}

export default RevealWords
