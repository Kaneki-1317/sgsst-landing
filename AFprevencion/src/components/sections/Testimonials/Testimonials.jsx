import Container from '../../ui/Container/Container'
import Reveal from '../../motion/Reveal'
import StaggerContainer from '../../motion/StaggerContainer'
import AnimatedCard from '../../motion/AnimatedCard'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    role: 'Gerente de Logística',
    company: 'TransAndes',
    quote:
      '"Logramos pasar una auditoría del Ministerio de Trabajo sin un solo hallazgo. La organización de AF Prevención es impecable."',
  },
  {
    name: 'Mariana Gómez',
    role: 'Dir. Gestión Humana',
    company: 'ConstruCol',
    quote:
      '"Administrar el SG-SST era un dolor de cabeza hasta que los contratamos. Ahora nos enfocamos en crecer, ellos se encargan de la seguridad."',
  },
  {
    name: 'Jorge Herrera',
    role: 'Op. Manager',
    company: 'TechFab',
    quote:
      '"Su acompañamiento en la investigación de accidentes evitó que tuviéramos demandas legales. Son verdaderos expertos en la materia."',
  },
]

function getInitials(name) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials} aria-labelledby="testimonials-title">
      <Container>
        <Reveal as="h2" id="testimonials-title" className={styles.title}>
          Confían en AF Prevención
        </Reveal>

        <StaggerContainer as="div" className={styles.grid} staggerChildren={0.1}>
          {testimonials.map(({ name, role, company, quote }) => (
            <AnimatedCard key={name} className={styles.card}>
              <div className={styles.header}>
                {/* TODO: reemplazar por <img> con la foto real cuando se entregue el archivo */}
                <span className={styles.avatar} aria-hidden="true">
                  {getInitials(name)}
                </span>
                <div>
                  <p className={styles.name}>{name}</p>
                  <p className={styles.meta}>
                    {role} <span className={styles.company}>· {company}</span>
                  </p>
                </div>
              </div>
              <p className={styles.quote}>{quote}</p>
            </AnimatedCard>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}

export default Testimonials
