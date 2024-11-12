import { useEffect, useState } from "react"
import { get } from "../apis"

const useGenreList = () => {
  const [data, setData] = useState([])
  
  const getData = async () => {
    const res = await get({ currentPage: 1, pageSize: 5 })
    setData(res.data.items)
  }

  useEffect(() => {
    getData()
  }, [])

  return {
    data
  }
}

export default useGenreList