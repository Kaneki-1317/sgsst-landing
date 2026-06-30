import { useState } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Problemas', href: '#problems' },
  { label: 'Servicios', href: '#services' },
  { label: 'Características', href: '#features' },
  { label: 'Planes', href: '#pricing' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  function close() {
    setIsOpen(false)
  }

  return (
    <nav className={styles.navbar}>
      <button
        type="button"
        className={styles.toggle}
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span className={`${styles.toggleBar} ${isOpen ? styles.toggleBarOpen : ''}`} />
        <span className={`${styles.toggleBar} ${isOpen ? styles.toggleBarOpen : ''}`} />
        <span className={`${styles.toggleBar} ${isOpen ? styles.toggleBarOpen : ''}`} />
      </button>

      <ul id="navbar-menu" className={`${styles.list} ${isOpen ? styles.listOpen : ''}`}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href} onClick={close}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
