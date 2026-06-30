import Container from '../../ui/Container/Container'
import Button from '../../ui/Button/Button'
import styles from './Hero.module.css'

const badges = ['Cumplimiento', 'Evidencias', 'Auditorías', 'Acompañamiento']

function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-title">
      <Container className={styles.inner}>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            Evita sanciones, pérdidas y paradas operativas.
          </h1>
          <p className={styles.subtitle}>
            Implementamos y administramos tu SG-SST para que tu empresa cumpla
            la normativa, reduzca riesgos y esté preparada para auditorías del
            Ministerio de Trabajo.
          </p>
          <div className={styles.actions}>
            <Button variant="primary">Solicitar diagnóstico gratuito</Button>
          </div>
          <ul className={styles.badges}>
            {badges.map((badge) => (
              <li key={badge} className={styles.badge}>
                {badge}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.media}>
          <div className={styles.statCard}>
            <span className={styles.statNumber}>100%</span>
            <span className={styles.statLabel}>Cumplimiento Normativo</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
