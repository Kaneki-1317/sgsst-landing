import Container from '../../ui/Container/Container'
import Reveal from '../../motion/Reveal'
import StaggerContainer from '../../motion/StaggerContainer'
import AnimatedCard from '../../motion/AnimatedCard'
import styles from './MoneyLeaks.module.css'

const leaks = [
  {
    number: '01',
    title: 'Reprocesos y correcciones',
    description:
      'Hacerlo mal sale caro. Corregir un sistema mal implementado cuesta el triple que hacerlo bien desde el inicio.',
  },
  {
    number: '02',
    title: 'Costos por accidentes',
    description:
      'Indemnizaciones y aumentos en la tasa de cotización ARL que desangran la utilidad operativa de su empresa.',
  },
  {
    number: '03',
    title: 'Paradas por auditoría',
    description:
      'Un requerimiento del Ministerio puede frenar su operación por días, causando pérdidas irrecuperables de facturación.',
  },
]

function MoneyLeaks() {
  return (
    <section id="money-leaks" className={styles.section} aria-labelledby="money-leaks-title">
      <Container>
        <Reveal as="h2" id="money-leaks-title" className={styles.title}>
          Evita estas 3 fugas de dinero silenciosas
        </Reveal>
        <StaggerContainer as="div" className={styles.grid} staggerChildren={0.1}>
          {leaks.map(({ number, title, description }) => (
            <AnimatedCard key={number} className={styles.card}>
              <span className={styles.number}>{number}</span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{description}</p>
            </AnimatedCard>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}

export default MoneyLeaks
