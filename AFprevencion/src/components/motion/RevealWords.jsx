import { motion } from 'framer-motion'
import { EASE, viewportDefault } from './variants'
import { useEntranceProps } from './useEntrance'

function wordVariants(blur, duration, isEmphasized) {
  // `times` solo tiene sentido para `scale` (que sí es un keyframe array); si se aplica al
  // nivel superior de `transition`, Framer Motion intenta usarlo también para opacity/y/filter
  // (valores escalares) y esas propiedades dejan de animarse. Por eso `scale` lleva su propio
  // sub-transition y el resto usa uno simple.
  return {
    hidden: { opacity: 0, y: 24, filter: `blur(${blur}px)` },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: isEmphasized ? [1, 1, 1.18, 1] : 1,
      transition: isEmphasized
        ? {
            duration,
            ease: EASE,
            scale: { duration: duration + 0.35, times: [0, 0.55, 0.8, 1], ease: EASE },
          }
        : { duration, ease: EASE },
    },
  }
}

function RevealWords({
  children,
  as = 'h2',
  wordStagger = 0.07,
  duration = 0.6,
  blur = 6,
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
          variants={wordVariants(blur, duration, emphasizeWords.includes(word))}
          style={{ display: 'inline-block' }}
        >
          {word}
          {index < words.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </Component>
  )
}

export default RevealWords
