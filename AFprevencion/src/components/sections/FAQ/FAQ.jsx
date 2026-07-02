import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Container from '../../ui/Container/Container'
import Reveal from '../../motion/Reveal'
import StaggerContainer from '../../motion/StaggerContainer'
import { EASE_SNAPPY } from '../../motion/variants'
import styles from './FAQ.module.css'

function IconChevronDown() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6,9 12,15 18,9" />
    </svg>
  )
}

const questions = [
  {
    question: '¿Es obligatorio implementar el SG-SST?',
    answer:
      'Sí. Toda empresa con uno o más trabajadores debe implementar el Sistema de Gestión de Seguridad y Salud en el Trabajo (SG-SST), de acuerdo con la normatividad colombiana. Su cumplimiento ayuda a prevenir riesgos laborales y evitar sanciones.',
  },
  {
    question: '¿Qué pasa si tengo una auditoría y no estoy al día?',
    answer:
      'Si tu empresa no cumple con los requisitos del SG-SST, puede recibir requerimientos, sanciones económicas e incluso la suspensión de actividades en casos graves. Nosotros te ayudamos a prepararte para afrontar auditorías con tranquilidad.',
  },
  {
    question: '¿Ustedes nos representan ante el Ministerio?',
    answer:
      'Sí. Brindamos acompañamiento durante visitas, requerimientos y procesos relacionados con las autoridades competentes, ofreciendo asesoría técnica para que tu empresa responda de manera adecuada.',
  },
  {
    question: '¿Cuánto tiempo tarda la implementación?',
    answer:
      'Depende del tamaño de la empresa y del estado actual de cumplimiento. En la mayoría de los casos, la implementación inicial puede realizarse en pocas semanas, siguiendo un cronograma adaptado a las necesidades de cada organización.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(index) {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-title">
      <Container>
        <Reveal as="h2" id="faq-title" className={styles.title} duration={0.65}>
          Preguntas Frecuentes
        </Reveal>

        <StaggerContainer as="div" className={styles.list} staggerChildren={0.06}>
          {questions.map(({ question, answer }, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`

            return (
              <Reveal as="div" key={question} className={styles.item} distance={16} duration={0.5}>
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
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      className={styles.answer}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE_SNAPPY }}
                    >
                      <div className={styles.answerInner}>
                        <p>{answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            )
          })}
        </StaggerContainer>
      </Container>
    </section>
  )
}

export default FAQ
