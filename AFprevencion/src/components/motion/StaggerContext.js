import { createContext, useContext } from 'react'

const StaggerContext = createContext(false)

export function useIsStaggered() {
  return useContext(StaggerContext)
}

export const StaggerProvider = StaggerContext.Provider
