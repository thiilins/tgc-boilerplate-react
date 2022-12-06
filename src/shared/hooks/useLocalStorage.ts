const useLocalStorage = () => {
  const prefix = import.meta.env.VITE_STORAGE_PREFIX
  const { localStorage } = window

  const setItem = (key: string, value: string) => {
    return localStorage.setItem(`${prefix}:${key}`, value)
  }

  const getItem = (key: string) => {
    return localStorage.getItem(`${prefix}:${key}`)
  }

  const removeItem = (key: string) => {
    return localStorage.removeItem(`${prefix}:${key}`)
  }

  const clear = () => {
    const itemsInLS: string[] = []

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) || ''

      if (key?.includes(prefix)) {
        itemsInLS.push(key)
      }
    }

    itemsInLS.forEach((itemInLS) => localStorage.removeItem(itemInLS))
  }
  const clearSelectedItems = (partOfKey: string) => {
    const itemsInLS: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i) || ''
      if (key?.includes(`${prefix}:${partOfKey}`)) {
        itemsInLS.push(key)
      }
    }

    itemsInLS.forEach((itemInLS) => localStorage.removeItem(itemInLS))
  }

  return {
    setItem,
    getItem,
    removeItem,
    clear,
    clearSelectedItems
  }
}

export default useLocalStorage
