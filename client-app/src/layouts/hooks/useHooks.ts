import React, { useEffect, useState } from "react"
import { getGenres } from "../../apis"

const useHooks = () => {
  const [genres, setGenres] = useState<any>([])

  const getData = async () => {
    const res = await getGenres()
    setGenres(res.data.items)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    genres
  }
}

export default useHooks