import AnimatedCTA from '../../motion/AnimatedCTA'
import styles from './Button.module.css'

function Button({ children, onClick, type = 'button', variant = 'primary', href, target, rel }) {
  const className = `${styles.button} ${styles[variant]}`

  if (href) {
    return (
      <AnimatedCTA as="a" href={href} target={target} rel={rel} onClick={onClick} className={className}>
        {children}
      </AnimatedCTA>
    )
  }

  return (
    <AnimatedCTA as="button" type={type} onClick={onClick} className={className}>
      {children}
    </AnimatedCTA>
  )
}

export default Button
