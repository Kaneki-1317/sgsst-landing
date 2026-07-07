import { motion } from 'framer-motion'
import Container from '../../ui/Container/Container'
import Reveal from '../../motion/Reveal'
import StaggerContainer from '../../motion/StaggerContainer'
import { EASE_SNAPPY } from '../../motion/variants'
import logoMark from '../../../assets/icons/LOGO AF SIN FONDO-17.png'
import styles from './Footer.module.css'

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
              <img src={logoMark} alt="AF" className={styles.logoMark} />
              <span>Prevención</span>
            </div>
            <p className={styles.description}>
              Consultoría especializada en Seguridad y Salud en el Trabajo.
              Protegemos lo más valioso de su empresa: su gente y su
              estabilidad operativa.
            </p>
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

          <Reveal as="div" className={styles.column}>
            <h3 className={styles.heading}>Contacto</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <IconMail />
                <a href="mailto:gerenciaafprevencion@gmail.com">
                  gerenciaafprevencion@gmail.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <IconMail />
                <a href="mailto:comercialafprevencion@gmail.com">
                  comercialafprevencion@gmail.com
                </a>
              </li>
              <li className={styles.contactItem}>
                <IconPhone />
                <a href="tel:+573014936649">301 493 6649</a>
              </li>
            </ul>
            <p className={styles.coverageText}>
              Cobertura en Bucaramanga y su área metropolitana.
            </p>
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
