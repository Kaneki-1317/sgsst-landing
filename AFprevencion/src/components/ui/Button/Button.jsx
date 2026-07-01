import { motion } from 'framer-motion'
import { EASE } from '../../motion/variants'
import styles from './Button.module.css'

const hoverProps = {
  whileHover: { y: -3, scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2, ease: EASE },
}

function Button({ children, onClick, type = 'button', variant = 'primary', href, target, rel }) {
  const className = `${styles.button} ${styles[variant]}`

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} onClick={onClick} className={className} {...hoverProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} className={className} {...hoverProps}>
      {children}
    </motion.button>
  )
}

export default Button
