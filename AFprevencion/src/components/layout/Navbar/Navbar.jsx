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
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {navLinks.map(({ label, href }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
