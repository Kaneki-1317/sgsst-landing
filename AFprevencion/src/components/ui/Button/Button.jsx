import styles from './Button.module.css'

function Button({ children, onClick, type = 'button', variant = 'primary', href, target, rel }) {
  const className = `${styles.button} ${styles[variant]}`

  if (href) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} className={className}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  )
}

export default Button
