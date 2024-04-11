import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CredencialesModel } from '@/types/models/app'

interface State {
  isAuthenticated: boolean
  user?: CredencialesModel
  setAuthState: (status: boolean, user?: CredencialesModel) => void
}

export const useAppDataStore = create<State>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: undefined,
      setAuthState: (isAuthenticated, user) => {
        set({ isAuthenticated, user })
      }
    }),
    { name: 'appStore' }
  )
)
