import Container from '../../ui/Container/Container'
import StaggerContainer from '../../motion/StaggerContainer'
import Reveal from '../../motion/Reveal'
import laPlaca from '../../../assets/images/LaPlaca.webp'
import dubaiFastFood from '../../../assets/images/DubaiFastFood.jpeg'
import ingenieriaRZ from '../../../assets/images/IngeneriaRZ.jpeg'
import nexus from '../../../assets/images/Nexuz.jpeg'
import mrServer from '../../../assets/images/MrServer.png'
import styles from './Testimonials.module.css'

// Arreglo de empresas: agregar o quitar aquí para actualizar la galería de logos.
const companies = [
  {
    name: 'LaPlaca',
    logo: laPlaca,
    alt: 'Logo de LaPlaca, Car Customization Shop',
    review: 'Servicio profesional, oportuno y confiable.',
  },
  {
    name: 'Dubai Fast Food',
    logo: dubaiFastFood,
    alt: 'Logo de Dubai Fast Food',
    review: 'Atención ágil y asesoría de alta calidad.',
  },
  {
    name: 'Ingeniería RZ',
    logo: ingenieriaRZ,
    alt: 'Logo de Ingeniería RZ',
    review: 'Un aliado estratégico para nuestra empresa.',
  },
  {
    name: 'Nexus Ingeniería y Soluciones',
    logo: nexus,
    alt: 'Logo de Nexus Ingeniería y Soluciones',
    review: 'Recomendados por su profesionalismo y compromiso.',
  },
  {
    name: 'Mr. Server',
    logo: mrServer,
    alt: 'Logo de Mr. Server, Servicio Técnico',
    review: 'Soluciones efectivas adaptadas a nuestras necesidades.',
  },
]

function IconStar() {
  return (
    <svg className={styles.star} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5l2.9 6.32 6.6.6-5 4.53 1.5 6.55L12 16.9l-5.99 3.6 1.5-6.55-5-4.53 6.6-.6z" />
    </svg>
  )
}

function StarRow() {
  return (
    <div className={styles.stars} role="img" aria-label="5 de 5 estrellas">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} />
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials} aria-labelledby="testimonials-title">
      <Container>
        <Reveal as="div" className={styles.header} duration={0.65}>
          <h2 id="testimonials-title" className={styles.title}>
            Empresas que confían en nosotros
          </h2>
          <p className={styles.subtitle}>
            Empresas de diferentes sectores han confiado en nuestros servicios de Seguridad y
            Salud en el Trabajo para fortalecer el cumplimiento de la normatividad y proteger a
            sus colaboradores.
          </p>
        </Reveal>

        <StaggerContainer as="div" className={styles.grid} staggerChildren={0.08}>
          {companies.map(({ name, logo, alt, review }) => (
            <Reveal key={name} as="div" className={styles.logoItem} distance={20}>
              <img src={logo} alt={alt} loading="lazy" decoding="async" className={styles.logoImg} />
              <StarRow />
              <p className={styles.review}>{review}</p>
            </Reveal>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  )
}

export default Testimonials
