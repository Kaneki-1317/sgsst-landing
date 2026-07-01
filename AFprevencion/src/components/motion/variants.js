// Curva "premium": decelera con calma. Para revelado de contenido (títulos, párrafos, cards, imágenes).
export const EASE = [0.16, 1, 0.3, 1]

// Curva "snappy": respuesta más inmediata. Para microinteracciones pequeñas (botones, CTAs, iconos).
export const EASE_SNAPPY = [0.25, 0.46, 0.45, 0.94]

// Curva "elástica": rebasa el destino y rebota antes de asentarse. Para efectos deliberadamente llamativos.
export const EASE_BOUNCE = [0.34, 1.56, 0.64, 1]

export const viewportDefault = { once: true, amount: 0.2 }

export const DIRECTION_OFFSETS = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
  none: {},
}

export function makeSlideVariants(direction = 'up', distance = 30) {
  const offset = DIRECTION_OFFSETS[direction] ?? DIRECTION_OFFSETS.up
  const hidden = { opacity: 0 }
  if (offset.y) hidden.y = offset.y * distance
  if (offset.x) hidden.x = offset.x * distance

  return {
    hidden,
    visible: { opacity: 1, x: 0, y: 0 },
  }
}
