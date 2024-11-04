import axios from 'axios'

export const getGenres = async () => {
  const res = axios.get(`http://localhost:5077/api/genre?currentPage=1&pageSize=5`)
  return await res
}