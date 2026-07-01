import Container from '../../ui/Container/Container'
import Reveal from '../../motion/Reveal'
import StaggerContainer from '../../motion/StaggerContainer'
import AnimatedCard from '../../motion/AnimatedCard'
import styles from './Services.module.css'

const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function IconClipboardUser() {
  return (
    <svg {...iconProps}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <rect x="8" y="1.5" width="8" height="3" rx="1" />
      <circle cx="12" cy="12" r="2" />
      <path d="M8.5 17c.5-2 2-3 3.5-3s3 1 3.5 3" />
    </svg>
  )
}

function IconTrendUp() {
  return (
    <svg {...iconProps}>
      <polyline points="3,17 9,11 13,15 21,7" />
      <polyline points="15,7 21,7 21,13" />
    </svg>
  )
}

function IconShieldSearch() {
  return (
    <svg {...iconProps}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <circle cx="11" cy="11" r="2.3" />
      <line x1="12.8" y1="12.8" x2="14.5" y2="14.5" />
    </svg>
  )
}

function IconGraduationCap() {
  return (
    <svg {...iconProps}>
      <path d="M2 9l10-5 10 5-10 5-10-5z" />
      <path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      <line x1="22" y1="9" x2="22" y2="15" />
    </svg>
  )
}

function IconGrid() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  )
}

const services = [
  {
    icon: IconClipboardUser,
    title: 'Implementación SG-SST',
    description:
      'Diseño completo desde cero, adaptado a su actividad económica y número de trabajadores bajo el decreto 1072 de 2015.',
    wide: true,
  },
  {
    icon: IconTrendUp,
    title: 'Administración Mensual',
    description:
      'Nosotros somos su departamento de SST. Mantenemos todo al día mientras usted opera.',
  },
  {
    icon: IconShieldSearch,
    title: 'Auditorías Internas',
    description:
      'Evaluación objetiva del cumplimiento previo a visitas del Ministerio o entes certificadores.',
  },
  {
    icon: IconGraduationCap,
    title: 'Capacitaciones',
    description:
      'Entrenamiento técnico y obligatorio para brigadas, comités y personal operativo.',
  },
  {
    icon: IconGrid,
    title: 'Matrices de Riesgo',
    description:
      'Identificación técnica GTC 45 para control efectivo de peligros laborales.',
  },
]

function Services() {
  return (
    <section id="services" className={styles.services} aria-labelledby="services-title">
      <Container>
        <Reveal as="div" className={styles.header}>
          <h2 id="services-title" className={styles.title}>
            Servicios Especializados
          </h2>
          <p className={styles.subtitle}>
            Soluciones integrales para la seguridad y salud en el trabajo.
          </p>
        </Reveal>

        <StaggerContainer as="div" className={styles.grid} staggerChildren={0.1}>
          {services.map(({ icon: Icon, title, description, wide }) => (
            <AnimatedCard
              key={title}
              className={`${styles.card} ${wide ? styles.cardWide : ''}`}
            >
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

export default Services
