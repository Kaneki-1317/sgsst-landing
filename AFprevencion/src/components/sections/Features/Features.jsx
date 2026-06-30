import Container from '../../ui/Container/Container'
import styles from './Features.module.css'

const iconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function IconShieldCheck() {
  return (
    <svg {...iconProps}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <polyline points="9,12 11,14 15,10" />
    </svg>
  )
}

function IconBarChart() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="4" width="18" height="17" rx="2" />
      <line x1="7" y1="16" x2="7" y2="13" />
      <line x1="12" y1="16" x2="12" y2="9" />
      <line x1="17" y1="16" x2="17" y2="11" />
    </svg>
  )
}

function IconSearch() {
  return (
    <svg {...iconProps}>
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </svg>
  )
}

function IconHeadset() {
  return (
    <svg {...iconProps}>
      <path d="M4 13a8 8 0 0 1 16 0" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19v1a3 3 0 0 1-3 3h-3" />
    </svg>
  )
}

function IconCalendar() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="16" y1="3" x2="16" y2="7" />
    </svg>
  )
}

function IconFileText() {
  return (
    <svg {...iconProps}>
      <path d="M6 2h9l4 4v16H6z" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="15" y2="17" />
    </svg>
  )
}

function IconFileCheck() {
  return (
    <svg {...iconProps}>
      <path d="M6 2h9l4 4v16H6z" />
      <polyline points="9,13 11,15 15,11" />
    </svg>
  )
}

function IconScale() {
  return (
    <svg {...iconProps}>
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="5" y1="7" x2="19" y2="7" />
      <path d="M5 7l-3 6a3 3 0 0 0 6 0z" />
      <path d="M19 7l-3 6a3 3 0 0 0 6 0z" />
    </svg>
  )
}

const features = [
  {
    icon: IconShieldCheck,
    title: 'Diagnóstico de riesgos',
    description: 'Evaluación profunda inicial.',
  },
  {
    icon: IconBarChart,
    title: 'Indicadores y seguimiento',
    description: 'Control mensual real.',
  },
  {
    icon: IconSearch,
    title: 'Investigación de incidentes',
    description: 'Gestión técnica proactiva.',
  },
  {
    icon: IconHeadset,
    title: 'Acompañamiento especializado',
    description: 'Soporte experto continuo.',
  },
  {
    icon: IconCalendar,
    title: 'Plan anual de trabajo',
    description: 'Cronograma 100% legal.',
  },
  {
    icon: IconFileText,
    title: 'Gestión documental',
    description: 'Archivos siempre al día.',
  },
  {
    icon: IconFileCheck,
    title: 'Evidencias verificables',
    description: 'Soporte legal robusto.',
  },
  {
    icon: IconScale,
    title: 'Soporte ante auditorías',
    description: 'Defensa técnica presencial.',
  },
]

function Features() {
  return (
    <section id="features" className={styles.features} aria-labelledby="features-title">
      <Container className={styles.inner}>
        <div className={styles.content}>
          <h2 id="features-title" className={styles.title}>
            Te dejamos el SG-SST listo para soportar auditorías y operar sin
            improvisación.
          </h2>

          <ul className={styles.list}>
            {features.map(({ icon: Icon, title, description }) => (
              <li key={title} className={styles.item}>
                <span className={styles.icon}>
                  <Icon />
                </span>
                <div>
                  <h3 className={styles.itemTitle}>{title}</h3>
                  <p className={styles.itemText}>{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.media}>
          {/* TODO: reemplazar por <img> con la foto real (laptop + carpetas) cuando se entregue el archivo */}
          <div className={styles.imagePlaceholder} role="img" aria-label="Laptop con panel de gestión y carpetas de documentación" />
        </div>
      </Container>
    </section>
  )
}

export default Features
