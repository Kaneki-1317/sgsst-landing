import Container from '../../ui/Container/Container'
import styles from './CTA.module.css'

function IconMessage() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-4-1L3 20l1-4.5a8.4 8.4 0 0 1-1-4A8.5 8.5 0 0 1 11.5 3 8.5 8.5 0 0 1 21 11.5z" />
    </svg>
  )
}

function CTA() {
  return (
    <section id="contact" className={styles.cta} aria-labelledby="cta-title">
      <Container className={styles.inner}>
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
          <button type="button" className={styles.ctaSolid}>
            Solicitar Diagnóstico Sin Costo
          </button>
          <button type="button" className={styles.ctaOutline}>
            <IconMessage />
            Hablar con un Consultor
          </button>
        </div>
      </Container>
    </section>
  )
}

export default CTA
