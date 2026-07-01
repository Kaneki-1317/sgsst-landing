import { motion } from 'framer-motion'

function FloatingImage({ children, as = 'div', amplitude = 10, rotate = 0, duration = 5, className, ...rest }) {
  const Component = motion[as]
  const animate = { y: [0, -amplitude, 0] }
  if (rotate) animate.rotate = [0, -rotate, rotate, 0]

  return (
    <Component
      className={className}
      animate={animate}
      transition={{ duration, repeat: Infinity, ease: 'easeInOut' }}
      {...rest}
    >
      {children}
    </Component>
  )
}

export default FloatingImage
