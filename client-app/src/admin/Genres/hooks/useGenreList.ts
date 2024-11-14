import { useEffect, useState } from "react"
import { get } from "../apis"

const useGenreList = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  
  const getData = async () => {
    setLoading(true)
    const res = await get({ currentPage: 1, pageSize: 5 })
    setLoading(false)
    setData(res.data.items)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    data,
    loading
  }
}

export default useGenreList