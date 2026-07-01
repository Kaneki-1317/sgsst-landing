import { motion } from 'framer-motion'
import { EASE, viewportDefault, makeSlideVariants } from './variants'
import { useIsStaggered } from './StaggerContext'

function AnimatedCard({
  children,
  as = 'article',
  distance = 24,
  delay = 0,
  duration = 0.6,
  once = true,
  restScale = 1,
  hoverY = -6,
  hoverScale = 1.02,
  tapScale = 0.98,
  className,
  ...rest
}) {
  const isStaggered = useIsStaggered()
  const Component = motion[as]
  const slide = makeSlideVariants('up', distance)
  const variants = {
    hidden: { ...slide.hidden, scale: restScale },
    visible: { ...slide.visible, scale: restScale },
  }
  const transition = { duration, delay, ease: EASE }
  const hoverProps = {
    whileHover: { y: hoverY, scale: hoverScale },
    whileTap: { scale: tapScale },
  }

  if (isStaggered) {
    return (
      <Component variants={variants} transition={transition} className={className} {...hoverProps} {...rest}>
        {children}
      </Component>
    )
  }

  return (
    <Component
      variants={variants}
      transition={transition}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: viewportDefault.amount }}
      {...hoverProps}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default AnimatedCard
