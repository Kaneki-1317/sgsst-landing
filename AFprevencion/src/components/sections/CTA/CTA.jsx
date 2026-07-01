import { useRef } from 'react'
import { motion } from 'framer-motion'
import Container from '../../ui/Container/Container'
import Reveal from '../../motion/Reveal'
import { useParallax } from '../../../hooks/useParallax'
import { EASE } from '../../motion/variants'
import styles from './CTA.module.css'

function CTA() {
  const sectionRef = useRef(null)
  const blobPrimaryY = useParallax(sectionRef, { range: 26 })
  const blobAccentY = useParallax(sectionRef, { range: 20, invert: true })

  return (
    <section id="contact" ref={sectionRef} className={styles.cta} aria-labelledby="cta-title">
      <motion.div aria-hidden className={styles.blobPrimary} style={{ y: blobPrimaryY }} />
      <motion.div aria-hidden className={styles.blobAccent} style={{ y: blobAccentY }} />

      <Container>
        <Reveal as="div" className={styles.inner}>
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
            <motion.a
              href="https://api.whatsapp.com/send?phone=573014936649&text=Hola%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20gratuito%20de%20SG-SST%20para%20mi%20empresa."
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaSolid}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2, ease: EASE }}
            >
              Solicitar Diagnóstico Sin Costo
            </motion.a>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default CTA
