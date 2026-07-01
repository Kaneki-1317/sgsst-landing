import { motion } from 'framer-motion'
import { StaggerProvider } from './StaggerContext'
import { useEntranceProps } from './useEntrance'

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
  const entranceProps = useEntranceProps({ once, trigger })

  return (
    <Component variants={containerVariants} className={className} {...entranceProps} {...rest}>
      <StaggerProvider value>{children}</StaggerProvider>
    </Component>
  )
}

export default StaggerContainer
