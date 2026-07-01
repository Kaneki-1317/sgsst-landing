import Container from '../../ui/Container/Container'
import Reveal from '../../motion/Reveal'
import StaggerContainer from '../../motion/StaggerContainer'
import AnimatedCard from '../../motion/AnimatedCard'
import styles from './Problems.module.css'

const iconProps = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function IconDocumentX() {
  return (
    <svg {...iconProps}>
      <line x1="3" y1="6" x2="15" y2="6" />
      <line x1="3" y1="12" x2="11" y2="12" />
      <line x1="3" y1="18" x2="13" y2="18" />
      <line x1="17" y1="14" x2="23" y2="20" />
      <line x1="23" y1="14" x2="17" y2="20" />
    </svg>
  )
}

function IconImageX() {
  return (
    <svg {...iconProps}>
      <rect x="2" y="4" width="16" height="14" rx="2" />
      <circle cx="7" cy="9" r="1.5" />
      <path d="M2 16l5-5 4 4 3-3 4 4" />
      <line x1="16" y1="3" x2="23" y2="10" />
      <line x1="23" y1="3" x2="16" y2="10" />
    </svg>
  )
}

function IconAlertTriangle() {
  return (
    <svg {...iconProps}>
      <path d="M12 3l10 18H2L12 3z" />
      <line x1="12" y1="10" x2="12" y2="15" />
      <line x1="12" y1="18" x2="12" y2="18" />
    </svg>
  )
}

function IconClockHistory() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="13" r="8" />
      <polyline points="12,9 12,13 15,15" />
      <path d="M5 5l-2 1" />
    </svg>
  )
}

function IconClipboardClock() {
  return (
    <svg {...iconProps}>
      <rect x="4" y="4" width="13" height="17" rx="2" />
      <rect x="8" y="2" width="5" height="3" rx="1" />
      <circle cx="18" cy="17" r="5" />
      <polyline points="18,14.5 18,17 19.5,18" />
    </svg>
  )
}

function IconXCircle() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="9" />
      <line x1="9" y1="9" x2="15" y2="15" />
      <line x1="15" y1="9" x2="9" y2="15" />
    </svg>
  )
}

const problems = [
  {
    icon: IconDocumentX,
    title: 'Documentos desactualizados',
    description:
      'Normatividad vigente ignorada que invalida sus protocolos ante visitas oficiales.',
  },
  {
    icon: IconImageX,
    title: 'Evidencias incompletas',
    description:
      'Sin registros fotográficos o firmas válidas, su empresa no tiene defensa legal real.',
  },
  {
    icon: IconAlertTriangle,
    title: 'Auditorías desgastantes',
    description:
      'Semanas de caos intentando "organizar" lo que no se hizo durante el año.',
  },
  {
    icon: IconClockHistory,
    title: 'Reportes tardíos',
    description:
      'Sanciones automáticas por no reportar accidentes laborales dentro de los tiempos de ley.',
  },
  {
    icon: IconClipboardClock,
    title: 'Falta de seguimiento',
    description:
      'Matrices de riesgo que nadie revisa y se convierten en trampas de responsabilidad.',
  },
  {
    icon: IconXCircle,
    title: 'Acciones sin control',
    description:
      'Accidentes repetitivos por no implementar planes de mejora real tras incidentes.',
  },
]

function Problems() {
  return (
    <section id="problems" className={styles.problems} aria-labelledby="problems-title">
      <Container>
        <Reveal as="div" className={styles.header} duration={0.65}>
          <h2 id="problems-title" className={styles.title}>
            Lo que más le cuesta a una empresa no es implementar SG-SST.
            <br />
            Es improvisarlo.
          </h2>
          <p className={styles.subtitle}>
            La improvisación genera huecos legales que se traducen en multas
            millonarias y cierres preventivos.
          </p>
        </Reveal>

        <StaggerContainer as="div" className={styles.grid} staggerChildren={0.14}>
          {problems.map(({ icon: Icon, title, description }) => (
            <AnimatedCard key={title} className={styles.card}>
              <span className={styles.icon}>
                <Icon />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{description}</p>
            </AnimatedCard>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}

export default Problems
