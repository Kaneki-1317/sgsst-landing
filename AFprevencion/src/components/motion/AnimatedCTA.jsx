import { motion } from 'framer-motion'
import { EASE_BOUNCE, makeSlideVariants } from './variants'
import { useEntranceProps } from './useEntrance'

function AnimatedCTA({
  children,
  as = 'a',
  distance = 50,
  delay = 0,
  duration = 0.85,
  ease = EASE_BOUNCE,
  rotate = -6,
  once = true,
  hoverY = -10,
  hoverScale = 1.15,
  tapScale = 0.88,
  className,
  ...rest
}) {
  const Component = motion[as]
  const slide = makeSlideVariants('up', distance)
  const variants = {
    hidden: { ...slide.hidden, scale: 0.85, rotate },
    visible: { ...slide.visible, scale: 1, rotate: 0 },
  }
  const transition = { duration, delay, ease }
  // Gesture feedback (hover/tap) siempre responde rápido, independiente de cuánto dure la entrada.
  const gestureTransition = { duration: 0.3, ease: EASE_BOUNCE }
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
