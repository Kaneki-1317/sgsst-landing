import { useState } from 'react'
import Container from '../../ui/Container/Container'
import styles from './FAQ.module.css'

function IconChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6,9 12,15 18,9" />
    </svg>
  )
}

const questions = [
  '¿Es obligatorio implementar el SG-SST?',
  '¿Qué pasa si tengo una auditoría y no estoy al día?',
  '¿Ustedes nos representan ante el Ministerio?',
  '¿Cuánto tiempo tarda la implementación?',
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-title">
      <Container>
        <h2 id="faq-title" className={styles.title}>
          Preguntas Frecuentes
        </h2>

        <div className={styles.list}>
          {questions.map((question, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`

            return (
              <div key={question} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span>{question}</span>
                  <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>
                    <IconChevronDown />
                  </span>
                </button>
                {isOpen && (
                  <div id={panelId} className={styles.answer}>
                    {/* TODO: reemplazar por el texto real de la respuesta cuando se entregue */}
                    <p>Respuesta pendiente.</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default FAQ
