import { motion } from 'framer-motion'
import { EASE, EASE_SNAPPY, makeSlideVariants } from './variants'
import { useEntranceProps } from './useEntrance'

function AnimatedCTA({
  children,
  as = 'a',
  distance = 20,
  delay = 0,
  duration = 0.55,
  ease = EASE,
  once = true,
  hoverY = -4,
  hoverScale = 1.03,
  tapScale = 0.98,
  className,
  ...rest
}) {
  const Component = motion[as]
  const slide = makeSlideVariants('up', distance)
  const variants = {
    hidden: { ...slide.hidden, scale: 0.95 },
    visible: { ...slide.visible, scale: 1 },
  }
  const transition = { duration, delay, ease }
  // Gesture feedback (hover/tap) siempre responde rápido, independiente de cuánto dure la entrada.
  const gestureTransition = { duration: 0.25, ease: EASE_SNAPPY }
  const hoverProps = {
    whileHover: { y: hoverY, scale: hoverScale, transition: gestureTransition },
    whileTap: { scale: tapScale, transition: gestureTransition },
  }
  const entranceProps = useEntranceProps({ once })

  return (
    <Component
      variants={variants}
      transition={transition}
      className={className}
      {...entranceProps}
      {...hoverProps}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default AnimatedCTA
