import Navbar from '../Navbar/Navbar'
import Container from '../../ui/Container/Container'
import logo from '../../../assets/icons/LOGO AF SIN FONDO-17.png'
import logo2 from '../../../assets/icons/LOGO AF SIN FONDO-16.png'

import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <div className={styles.logoGroup}>
          <img src={logo} alt="AF Prevención" className={styles.logo} />
          <img src={logo2} alt="Prevención" className={styles.logo2} />
        </div>
        <Navbar />
      </Container>
    </header>
  )
}

export default Header
