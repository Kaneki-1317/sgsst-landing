import { motion } from 'framer-motion'
import { EASE, viewportDefault, makeSlideVariants } from './variants'
import { useIsStaggered } from './StaggerContext'

function Reveal({
  children,
  as = 'div',
  direction = 'up',
  distance = 30,
  delay = 0,
  duration = 0.7,
  once = true,
  amount = viewportDefault.amount,
  trigger = 'inView',
  className,
  ...rest
}) {
  const isStaggered = useIsStaggered()
  const Component = motion[as]
  const variants = makeSlideVariants(direction, distance)
  const transition = { duration, delay, ease: EASE }

  if (isStaggered) {
    return (
      <Component variants={variants} transition={transition} className={className} {...rest}>
        {children}
      </Component>
    )
  }

  const triggerProps =
    trigger === 'mount'
      ? { initial: 'hidden', animate: 'visible' }
      : { initial: 'hidden', whileInView: 'visible', viewport: { once, amount } }

  return (
    <Component variants={variants} transition={transition} className={className} {...triggerProps} {...rest}>
      {children}
    </Component>
  )
}

export default Reveal
