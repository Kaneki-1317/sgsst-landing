import { motion } from 'framer-motion'
import { EASE_BOUNCE, makeSlideVariants } from './variants'
import { useEntranceProps } from './useEntrance'

function AnimatedCard({
  children,
  as = 'article',
  distance = 60,
  delay = 0,
  duration = 0.9,
  ease = EASE_BOUNCE,
  rotate = 3,
  once = true,
  restScale = 1,
  hoverY = -14,
  hoverScale = 1.08,
  tapScale = 0.92,
  className,
  ...rest
}) {
  const Component = motion[as]
  const slide = makeSlideVariants('up', distance)
  const variants = {
    hidden: { ...slide.hidden, scale: restScale, rotate },
    visible: { ...slide.visible, scale: restScale, rotate: 0 },
  }
  const transition = { duration, delay, ease }
  // Gesture feedback (hover/tap) siempre responde rápido, independiente de cuánto dure la entrada.
  const gestureTransition = { duration: 0.35, ease: EASE_BOUNCE }
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

export default AnimatedCard
