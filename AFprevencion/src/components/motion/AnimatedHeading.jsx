import RevealWords from './RevealWords'
import { EASE_BOUNCE } from './variants'

function AnimatedHeading({
  as = 'h2',
  wordStagger = 0.12,
  duration = 0.85,
  distance = 45,
  blur = 12,
  ease = EASE_BOUNCE,
  ...rest
}) {
  return (
    <RevealWords
      as={as}
      wordStagger={wordStagger}
      duration={duration}
      distance={distance}
      blur={blur}
      ease={ease}
      {...rest}
    />
  )
}

export default AnimatedHeading
