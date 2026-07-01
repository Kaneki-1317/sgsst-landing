import { useRef } from 'react'
import { motion } from 'framer-motion'
import Container from '../../ui/Container/Container'
import Reveal from '../../motion/Reveal'
import AnimatedCTA from '../../motion/AnimatedCTA'
import { useParallax } from '../../../hooks/useParallax'
import styles from './CTA.module.css'

function CTA() {
  const sectionRef = useRef(null)
  const blobPrimaryY = useParallax(sectionRef, { range: 34 })
  const blobAccentY = useParallax(sectionRef, { range: 26, invert: true })

  return (
    <section id="contact" ref={sectionRef} className={styles.cta} aria-labelledby="cta-title">
      <motion.div aria-hidden className={styles.blobPrimary} style={{ y: blobPrimaryY }} />
      <motion.div aria-hidden className={styles.blobAccent} style={{ y: blobAccentY }} />

      <Container>
        <Reveal as="div" className={styles.inner} distance={40} duration={0.85}>
          <h2 id="cta-title" className={styles.title}>
            Tu empresa necesita concentrarse en operar.
            <br />
            Nosotros nos encargamos del SG-SST.
          </h2>
          <p className={styles.subtitle}>
            Reduce riesgos, evita sanciones y mantén tu operación preparada
            para cualquier auditoría con nuestro acompañamiento experto.
          </p>
          <div className={styles.actions}>
            <AnimatedCTA
              as="a"
              href="https://api.whatsapp.com/send?phone=573014936649&text=Hola%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20gratuito%20de%20SG-SST%20para%20mi%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSolid}
              delay={0.3}
            >
              Solicitar Diagnóstico Sin Costo
            </AnimatedCTA>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default CTA
