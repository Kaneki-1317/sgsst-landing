import { motion } from 'framer-motion'
import { viewportDefault } from './variants'
import { StaggerProvider } from './StaggerContext'

function StaggerContainer({
  children,
  as = 'div',
  staggerChildren = 0.1,
  delayChildren = 0,
  once = true,
  trigger = 'inView',
  className,
  ...rest
}) {
  const Component = motion[as]
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  }

  const triggerProps =
    trigger === 'mount'
      ? { initial: 'hidden', animate: 'visible' }
      : { initial: 'hidden', whileInView: 'visible', viewport: { once, amount: viewportDefault.amount } }

  return (
    <Component variants={containerVariants} className={className} {...triggerProps} {...rest}>
      <StaggerProvider value>{children}</StaggerProvider>
    </Component>
  )
}

export default StaggerContainer
