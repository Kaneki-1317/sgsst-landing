import RevealWords from './RevealWords'

function AnimatedHeading({ as = 'h2', wordStagger = 0.07, duration = 0.6, blur = 6, ...rest }) {
  return <RevealWords as={as} wordStagger={wordStagger} duration={duration} blur={blur} {...rest} />
}

export default AnimatedHeading
