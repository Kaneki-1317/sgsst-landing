import { viewportDefault } from './variants'
import { useIsStaggered } from './StaggerContext'

export function useEntranceProps({ once = true, amount = viewportDefault.amount, trigger = 'inView' } = {}) {
  const isStaggered = useIsStaggered()

  if (isStaggered) return {}
  if (trigger === 'mount') return { initial: 'hidden', animate: 'visible' }
  return { initial: 'hidden', whileInView: 'visible', viewport: { once, amount } }
}
