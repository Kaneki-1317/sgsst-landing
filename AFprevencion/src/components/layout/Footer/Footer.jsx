import { motion } from 'framer-motion'
import Container from '../../ui/Container/Container'
import Reveal from '../../motion/Reveal'
import StaggerContainer from '../../motion/StaggerContainer'
import { EASE } from '../../motion/variants'
import styles from './Footer.module.css'

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,6 12,13 22,6" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-7.2 7-12a7 7 0 0 0-14 0c0 4.8 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function IconSend() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 11l18-8-8 18-2-7-8-3z" />
    </svg>
  )
}

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Problemas', href: '#problems' },
  { label: 'Servicios', href: '#services' },
  { label: 'Características', href: '#features' },
  { label: 'Planes', href: '#pricing' },
  { label: 'Testimonios', href: '#testimonials' },
  { label: 'Preguntas Frecuentes', href: '#faq' },
  { label: 'Contacto', href: '#contact' },
]
const legal = ['Términos de Servicio', 'Privacidad', 'Normatividad']

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <StaggerContainer as="div" className={styles.grid} staggerChildren={0.08}>
          <Reveal as="div" className={styles.about}>
            <div className={styles.logo}>
              <IconShield />
              <span>AF Prevención</span>
            </div>
            <p className={styles.description}>
              Consultoría especializada en Seguridad y Salud en el Trabajo.
              Protegemos lo más valioso de su empresa: su gente y su
              estabilidad operativa.
            </p>
            <div className={styles.iconRow}>
              <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: EASE }}>
                <IconMail />
              </motion.span>
              <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: EASE }}>
                <IconPhone />
              </motion.span>
              <motion.span whileHover={{ y: -2 }} transition={{ duration: 0.2, ease: EASE }}>
                <IconMapPin />
              </motion.span>
            </div>
          </Reveal>

          <Reveal as="nav" className={styles.column} aria-label="Enlaces">
            <h3 className={styles.heading}>Enlaces</h3>
            <ul className={styles.list}>
              {links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="nav" className={styles.column} aria-label="Legal">
            <h3 className={styles.heading}>Legal</h3>
            <ul className={styles.list}>
              {legal.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" className={styles.column}>
            <h3 className={styles.heading}>Suscripción Técnica</h3>
            <p className={styles.description}>
              Reciba actualizaciones sobre normatividad SG-SST en Colombia.
            </p>
            <form className={styles.subscribeForm} onSubmit={(e) => e.preventDefault()}>
              <label className={styles.srOnly} htmlFor="footer-email">
                Su email
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Su email"
                className={styles.input}
              />
              <motion.button
                type="submit"
                className={styles.submitButton}
                aria-label="Suscribirse"
                whileHover={{ y: -2, scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ duration: 0.2, ease: EASE }}
              >
                <IconSend />
              </motion.button>
            </form>
          </Reveal>
        </StaggerContainer>

        <Reveal as="div" className={styles.bottom} distance={12} amount={0.6}>
          <p className={styles.copyright}>
            &copy; 2026 AF Prevención. Todos los derechos reservados.
            Consultoría SG-SST Especializada. <a href="#">Colombia.</a>
          </p>
        </Reveal>
      </Container>
    </footer>
  )
}

export default Footer
