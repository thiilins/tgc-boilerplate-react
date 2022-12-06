import { useState, useEffect, Dispatch, SetStateAction } from 'react'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

function usePersistedState<T>(
  key: string,
  initialState: T,
  isString = false,
  havePrefix = true
): Response<T> {
  const prefix = import.meta.env.VITE_STORAGE_PREFIX
  const keyValue = havePrefix ? `${prefix}:${key}` : key
  const [state, setState] = useState(() => {
    const storageValue = localStorage.getItem(keyValue)

    if (storageValue) {
      return isString ? storageValue : JSON.parse(storageValue)
    } else {
      return initialState
    }
  })

  useEffect(() => {
    localStorage.setItem(keyValue, isString ? state : JSON.stringify(state))
  }, [key, state, isString, keyValue])

  return [state, setState]
}

export default usePersistedState
