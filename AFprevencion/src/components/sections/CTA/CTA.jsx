import Container from '../../ui/Container/Container'
import styles from './CTA.module.css'

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
          <a
            href="https://api.whatsapp.com/send?phone=573014936649&text=Hola%2C%20quiero%20solicitar%20un%20diagn%C3%B3stico%20gratuito%20de%20SG-SST%20para%20mi%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaSolid}
          >
            Solicitar Diagnóstico Sin Costo
          </a>
        </div>
      </Container>
    </section>
  )
}

export default CTA
