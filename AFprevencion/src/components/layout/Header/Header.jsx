import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import Container from '../../ui/Container/Container'
import logo from '../../../assets/icons/LOGO AF SIN FONDO-17.png'
import logo2 from '../../../assets/icons/LOGO AF SIN FONDO-16.png'
import styles from './Header.module.css'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <Container className={styles.inner}>
        <div className={styles.logoGroup}>
          <div className={styles.logoImages}>
            <img src={logo} alt="AF Prevención" className={styles.logo} />
            <img src={logo2} alt="Prevención" className={styles.logo2} />
          </div>
          <span className={styles.logoText} aria-hidden="true">
            <span className={styles.logoTextAccent}>AF</span> Prevención
          </span>
        </div>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header
