import { motion } from 'framer-motion'
import { EASE, EASE_SNAPPY, viewportDefault, makeSlideVariants } from './variants'
import { useEntranceProps } from './useEntrance'

function Reveal({
  children,
  as = 'div',
  direction = 'up',
  distance = 30,
  delay = 0,
  duration = 0.7,
  ease = EASE,
  blur = 0,
  scale,
  rotate,
  hoverY,
  hoverScale,
  once = true,
  amount = viewportDefault.amount,
  trigger = 'inView',
  className,
  ...rest
}) {
  const Component = motion[as]
  const baseVariants = makeSlideVariants(direction, distance)
  const variants = {
    hidden: {
      ...baseVariants.hidden,
      ...(blur ? { filter: `blur(${blur}px)` } : {}),
      ...(scale !== undefined ? { scale } : {}),
      ...(rotate !== undefined ? { rotate } : {}),
    },
    visible: {
      ...baseVariants.visible,
      ...(blur ? { filter: 'blur(0px)' } : {}),
      ...(scale !== undefined ? { scale: 1 } : {}),
      ...(rotate !== undefined ? { rotate: 0 } : {}),
    },
  }
  const transition = { duration, delay, ease }
  const entranceProps = useEntranceProps({ once, amount, trigger })
  const hoverProps =
    hoverY !== undefined || hoverScale !== undefined
      ? {
          whileHover: {
            y: hoverY ?? 0,
            scale: hoverScale ?? 1,
            transition: { duration: 0.25, ease: EASE_SNAPPY },
          },
        }
      : {}

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

export default Reveal
