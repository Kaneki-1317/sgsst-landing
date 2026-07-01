import { useRef } from 'react'
import { motion } from 'framer-motion'
import Container from '../../ui/Container/Container'
import Button from '../../ui/Button/Button'
import StaggerContainer from '../../motion/StaggerContainer'
import Reveal from '../../motion/Reveal'
import FloatingImage from '../../motion/FloatingImage'
import { useParallax } from '../../../hooks/useParallax'
import { EASE_BOUNCE } from '../../motion/variants'
import styles from './Hero.module.css'

const badges = ['Cumplimiento', 'Evidencias', 'Auditorías', 'Acompañamiento']

function Hero() {
  const sectionRef = useRef(null)
  const blobPrimaryY = useParallax(sectionRef, { range: 30 })
  const blobAccentY = useParallax(sectionRef, { range: 24, invert: true })

  return (
    <section id="hero" ref={sectionRef} className={styles.hero} aria-labelledby="hero-title">
      <motion.div aria-hidden className={styles.blobPrimary} style={{ y: blobPrimaryY }} />
      <motion.div aria-hidden className={styles.blobAccent} style={{ y: blobAccentY }} />

      <Container className={styles.inner}>
        <StaggerContainer as="div" className={styles.content} staggerChildren={0.1} trigger="mount">
          <Reveal as="h1" id="hero-title" className={styles.title} duration={1.1} distance={70} ease={EASE_BOUNCE}>
            Evita sanciones, pérdidas y paradas operativas.
          </Reveal>
          <Reveal as="p" className={styles.subtitle} duration={1.1} distance={60} ease={EASE_BOUNCE}>
            Implementamos y administramos tu SG-SST para que tu empresa cumpla
            la normativa, reduzca riesgos y esté preparada para auditorías del
            Ministerio de Trabajo.
          </Reveal>
          <div className={styles.actions}>
            <Button
              variant="primary"
              href="https://api.whatsapp.com/send?phone=573014936649&text=Hola%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20gratuito%20de%20SG-SST%20para%20mi%20empresa."
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar diagnóstico gratuito
            </Button>
          </div>
          <Reveal as="ul" className={styles.badges} duration={0.9} distance={50} ease={EASE_BOUNCE}>
            {badges.map((badge) => (
              <li key={badge} className={styles.badge}>
                {badge}
              </li>
            ))}
          </Reveal>
        </StaggerContainer>

        <Reveal
          as="div"
          className={styles.media}
          direction="up"
          distance={90}
          duration={1.3}
          delay={0.25}
          rotate={-8}
          ease={EASE_BOUNCE}
          trigger="mount"
        >
          <FloatingImage amplitude={24} duration={3.5} rotate={5} className={styles.statCard}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Cumplimiento Normativo</span>
          </FloatingImage>
        </Reveal>
      </Container>
    </section>
  )
}

export default Hero
