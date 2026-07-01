import Reveal from './Reveal'

function RevealText({ as = 'p', distance = 18, duration = 0.6, ...rest }) {
  return <Reveal as={as} direction="up" distance={distance} duration={duration} {...rest} />
}

export default RevealText
