import { useCallback, useState } from 'react'
export default (initialState = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState)
  const toggle = useCallback((): void => setState(state => !state), [])
  return [state, toggle]
}
