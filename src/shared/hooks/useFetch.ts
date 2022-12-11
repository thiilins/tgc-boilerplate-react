import api from '@services/api'
import { useState, useEffect } from 'react'
export function useFetch<T>(url: string) {
  const [data, setData] = useState<T>()
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error>()
  const [load, setLoad] = useState(true)
  useEffect(() => {
    function loadData() {
      api
        .get(url)
        .then(({ data }: { data: T }) => {
          setData(data)
        })
        .catch((error: Error) => setError(error))
        .finally(() => {
          setIsFetching(false)
          setLoad(false)
        })
    }
    load && loadData()
  }, [load, url])
  const reload = () => {
    setIsFetching(true)
    setLoad(true)
  }
  return { data, isFetching, error, reload }
}
