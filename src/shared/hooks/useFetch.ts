import { useState, useEffect } from 'react'
// import api from 'services/api'
export function useFetch<T>(url: string, method: 'get' | 'post' = 'get') {
  const [data, setData] = useState<T>()
  const [isFetching, setIsFetching] = useState(true)
  const [error, setError] = useState<Error>()
  const [load, setLoad] = useState(true)
  useEffect(() => {
    function loadData() {
      // api[method](url)
      //   .then(({ data }) => {
      //     setData(data)
      //   })
      //   .catch((error) => setError(error))
      //   .finally(() => {
      //     setIsFetching(false)
      //     setLoad(false)
      //   })
    }
    load && loadData()
  }, [load, url])
  const reload = () => {
    setIsFetching(true)
    setLoad(true)
  }
  return { data, isFetching, error, reload }
}
