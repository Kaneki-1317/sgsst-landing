import styles from './Pricing.module.css'
import Container from '../../ui/Container/Container'

function IconCheck() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20,6 9,17 4,12" />
    </svg>
  )
}

function IconCross() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

const plans = [
  {
    name: 'Básico',
    tag: 'Implementación Inicial',
    price: 'Desde $450k',
    priceSuffix: '/pago único',
    features: [
      { text: 'Diagnóstico Inicial', included: true },
      { text: 'Diseño de Políticas', included: true },
      { text: 'Matriz Legal y de Riesgos', included: true },
      { text: 'Administración Mensual', included: false },
    ],
    cta: 'Empezar ahora',
    variant: 'outline',
  },
  {
    name: 'Premium',
    tag: 'Implementación + Administración',
    price: 'Consulte su Tarifa',
    badge: 'RECOMENDADO',
    featured: true,
    features: [
      { text: 'Todo el Plan Básico', included: true },
      { text: 'Gestión Documental Mensual', included: true },
      { text: 'Ejecución de Plan de Trabajo', included: true },
      { text: 'Soporte Auditoría Ministerio', included: true },
    ],
    cta: 'Contactar Consultor',
    variant: 'solid',
  },
  {
    name: 'Gold',
    tag: 'Integral + Continua',
    price: 'Personalizado',
    features: [
      { text: 'Administración Ilimitada', included: true },
      { text: 'Capacitaciones Especializadas', included: true },
      { text: 'Auditoría Semestral', included: true },
      { text: 'Dashboard Gerencial Tiempo Real', included: true },
    ],
    cta: 'Solicitar Cotización',
    variant: 'outline',
  },
]

function Pricing() {
  return (
    <section id="pricing" className={styles.pricing} aria-labelledby="pricing-title">
      <Container>
        <div className={styles.header}>
          <h2 id="pricing-title" className={styles.title}>
            Planes Diseñados para su Empresa
          </h2>
          <p className={styles.subtitle}>
            Escalabilidad y cumplimiento garantizado.
          </p>
          <span className={styles.hotBadge}>Planes desde $450.000</span>
        </div>

        <div className={styles.grid}>
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.cardFeatured : ''}`}
            >
              {plan.badge && <span className={styles.badge}>{plan.badge}</span>}

              <h3 className={styles.planName}>{plan.name}</h3>
              <p className={styles.planTag}>{plan.tag}</p>

              <p className={styles.price}>
                {plan.price}
                {plan.priceSuffix && (
                  <span className={styles.priceSuffix}>{plan.priceSuffix}</span>
                )}
              </p>

              <ul className={styles.features}>
                {plan.features.map(({ text, included }) => (
                  <li
                    key={text}
                    className={`${styles.feature} ${!included ? styles.featureExcluded : ''}`}
                  >
                    <span className={styles.featureIcon}>
                      {included ? <IconCheck /> : <IconCross />}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className={`${styles.cta} ${plan.variant === 'solid' ? styles.ctaSolid : styles.ctaOutline}`}
              >
                {plan.cta}
              </button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Pricing
