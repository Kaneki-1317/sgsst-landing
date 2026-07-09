import styles from './InstagramFloatingButton.module.css'

const INSTAGRAM_URL = 'https://www.instagram.com/af_prevencion?igsh=ZGJkOXdvNThvYXM5&utm_source=qr'

function IconInstagram() {
  return (
    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="#ffffff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.6" stroke="#ffffff" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.15" fill="#ffffff" />
    </svg>
  )
}

function InstagramFloatingButton() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.instagram}
      aria-label="Abrir Instagram"
      title="Instagram"
    >
      <IconInstagram />
    </a>
  )
}

export default InstagramFloatingButton
