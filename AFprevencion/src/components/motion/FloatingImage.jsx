import { motion } from 'framer-motion'

function FloatingImage({ children, as = 'div', amplitude = 10, duration = 5, className, ...rest }) {
  const Component = motion[as]

  return (
    <Component
      className={className}
      animate={{ y: [0, -amplitude, 0] }}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default FloatingImage
