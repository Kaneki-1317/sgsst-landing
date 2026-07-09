import Container from '../../ui/Container/Container'
import Reveal from '../../motion/Reveal'
import styles from './Coverage.module.css'

const cities = [
  { name: 'Barranquilla', x: 106.63, y: 44.41, labelX: 120, labelY: 41, anchor: 'start' },
  { name: 'Bucaramanga', x: 145.91, y: 135.6, labelX: 159, labelY: 132, anchor: 'start' },
]

const contactIconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

function IconMapPin({ className }) {
  return (
    <svg {...contactIconProps} className={className}>
      <path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

function IconPhone({ className }) {
  return (
    <svg {...contactIconProps} className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  )
}

function IconMail({ className }) {
  return (
    <svg {...contactIconProps} className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,6 12,13 22,6" />
    </svg>
  )
}

const contactDetails = [
  {
    icon: IconPhone,
    title: 'Canales de atención',
    body: (
      <p className={styles.itemText}>
        Cel / WhatsApp:{' '}
        <a className={styles.link} href="tel:+573052101188">
          3014936649
        </a>
      </p>
    ),
  },
  {
    icon: IconMail,
    title: 'Correo electrónico',
    body: (
      <p className={styles.itemText}>
        <a className={styles.link} href="mailto:gerenciaafprevencion@gmail.com">
          gerenciaafprevencion@gmail.com
        </a>
        <br />
        <a className={styles.link} href="mailto:comercialafprevencion@gmail.com">
          comercialafprevencion@gmail.com
        </a>
      </p>
    ),
  },
]

// Silueta nacional (departamentos disueltos en un solo contorno) derivada del mapa
// vectorial de Colombia de Simplemaps.com (uso comercial libre, simplemaps.com/resources/svg-license).
// Marcadores ubicados por coordenadas geográficas reales (lat/lon) de cada ciudad.
function ColombiaMap() {
  return (
    <svg
      className={styles.map}
      viewBox="0 0 300 410"
      role="img"
      aria-labelledby="coverage-map-title"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="coverage-map-title">
        Mapa de Colombia con atención presencial en Bucaramanga y Barranquilla
      </title>
      <path
        className={styles.country}
        d="M6 265.12 10.17 260.77 16.67 261.7 13.54 252.01 21.4 241.53 27.06 244.85 27.95 241.06 35.91 242.47 36.8 233.2 46.39 225.19 53.18 211.06 47.94 212.84 49.44 207.45 43.63 208.34 48.31 202.73 44.76 200.81 47.8 192.29 44.9 175.67 40.68 173.29 48.13 167.76 42.46 156.95 45.74 147.92 32.68 131.96 35.82 120.72 40.17 124.94 50.04 115.11 43.63 98.63 59.69 115.48 59.41 104.11 55.19 100.6 70.17 90.95 78.97 79.11 86.65 78.83 88.75 59.87 84.68 62.4 95.03 46.49 105.04 38.9 118.01 41.76 110.89 44.71 115.71 47.61 121.42 33.24 141.83 34.46 166.22 20.09 169.17 11.15 173.94 13.3 180.17 6 190 9.04 192.9 16.95 172.68 25.85 156.3 45.04 149.09 70.17 139.49 85.52 148.62 82.72 153.77 87.02 164.53 111.17 161.12 126.01 167.58 128.45 171.37 136.68 216.82 138.23 237.79 159.53 271.39 153.96 280.33 156.72 270.88 178.01 270.27 196.36 276.03 214.71 283.66 223.74 270.55 237.79 276.17 237.22 285.9 247.19 293.81 272.52 288.99 276.07 288.24 263.39 280.94 253.23 269.01 262.64 262.73 256.18 263.44 263.15 223.32 263.48 223.42 278.83 236.76 279.35 240.36 288.52 218.59 290.02 218.27 307.76 228.89 316.37 234.13 332.01 220.79 404.37 212.51 394.82 202.49 393.7 217.38 366.22 198.47 356.39 186.2 360.28 178.48 354.52 168.28 361.12 150.3 361.45 144.08 356.44 144.36 346.61 136.17 343.66 133.69 333.69 118.76 327 115.15 316.79 105.51 308 82.62 301.96 70.5 293.02 64.23 298.82 44.52 294.75 37.97 284.5 21.96 278.93 6 265.12 Z"
      />

      {cities.map(({ name, x, y, labelX, labelY, anchor }) => (
        <g key={name} className={styles.markerGroup}>
          <circle className={styles.markerPulse} cx={x} cy={y} r="6" />
          <circle className={styles.markerDot} cx={x} cy={y} r="4" />
          <text
            className={styles.markerLabel}
            x={labelX}
            y={labelY}
            textAnchor={anchor}
          >
            {name}
          </text>
        </g>
      ))}
    </svg>
  )
}

function Coverage() {
  return (
    <section id="coverage" className={styles.coverage} aria-labelledby="coverage-title">
      <Container>
        <Reveal as="div" className={styles.grid} distance={40} duration={0.85}>
          <div className={styles.mapCol}>
            <ColombiaMap />
          </div>

          <div className={styles.textCol}>
            <h2 id="coverage-title" className={styles.title}>
              Cobertura en todo el país
            </h2>
            <p className={styles.text}>
              Ofrecemos atención presencial en Bucaramanga y Barranquilla, además de planes
              híbridos accesibles para empresas en cualquier región de Colombia. Combinamos
              visitas presenciales y acompañamiento virtual para brindar soluciones efectivas
              en el cumplimiento de la normatividad del SG-SST y la preparación ante procesos
              de inspección por parte del Ministerio del Trabajo y demás autoridades
              competentes, garantizando respaldo y cobertura a nivel nacional.
            </p>
            <ul className={styles.contactList}>
              {contactDetails.map(({ icon: Icon, title, body }) => (
                <li key={title} className={styles.contactItem}>
                  <Icon className={styles.contactIcon} />
                  <div>
                    <p className={styles.itemTitle}>{title}</p>
                    {body}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}

export default Coverage
