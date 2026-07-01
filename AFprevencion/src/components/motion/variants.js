export const EASE = [0.16, 1, 0.3, 1]

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
