/* eslint-disable sort-keys */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const InitialState = () => ({
  helloCount: 0,
})

const PersistedState = () => ({
  // Auth
  authToken: '',
  isAuthenticated: false,
  //
})

const ExtraActions = (set: (val: Partial<StoreState>) => void, _get: () => StoreState) => ({
  logoff: () => {
    set({
      ...InitialState(),
      authToken: '',
      isAuthenticated: false,
    })
  },
})

const StateActions = <T extends keyof StoreState>(set: (val: Partial<StoreState>) => void, _get: () => StoreState) =>
  Object.keys({ ...InitialState(), ...PersistedState() }).reduce(
    (c, key) => ({
      ...c,
      [`set${key}`]: (val: StoreState[T]) => {
        set({ [key]: val })
      },
    }),
    {} as addPrefixToObject<{ [key in keyof StoreState]: (v: StoreState[key]) => void }, 'set'>,
  )

type StoreState = ReturnType<typeof InitialState> & ReturnType<typeof PersistedState>
type SActions = ReturnType<typeof StateActions>
type EActions = ReturnType<typeof ExtraActions>
type StoreType = StoreState & SActions & EActions
const GlobalStore = create(
  persist<StoreType>(
    (set, get) => ({
      ...InitialState(),
      ...PersistedState(),
      ...StateActions(set, get),
      ...ExtraActions(set, get),
    }),
    {
      name: 'souv_store',
      partialize: state =>
        Object.keys(PersistedState()).reduce(
          (c, key) => ({ ...c, [key]: state[key as keyof StoreState] }),
          {} as StoreType,
        ),
      version: 1,
    },
  ),
)

export const useGlobalStore = GlobalStore

export const useGlobalState = <T extends keyof StoreState>(
  v: T,
): [StoreState[T], (v: StoreState[T] | ((prev: StoreState[T]) => StoreState[T])) => void] =>
  GlobalStore(state => {
    const get = state[v]
    const setKey: keyof SActions = `set${v}`
    const set = (val: StoreState[T] | ((prev: StoreState[T]) => StoreState[T])) => {
      const newVal = typeof val === 'function' ? val(get) : val
      const setter = state[setKey] as (v: StoreState[T]) => void
      setter(newVal)
    }
    return [get, set]
  })
export const getGlobalState = <T extends keyof (StoreState & EActions)>(v: T) => GlobalStore.getState()[v]
export const setGlobalState = <T extends keyof StoreState>(
  v: T,
  set: StoreState[T] | ((prev: StoreState[T]) => StoreState[T]),
) => GlobalStore.setState(prev => ({ [v]: typeof set === 'function' ? set(prev[v]) : set }))
