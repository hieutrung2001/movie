import axios from "axios"
import { BASE_URL, ResponseData } from "../../../constants"
import { GenreModel, Pagination } from "../../constants"

const URL = `${BASE_URL}/genre`

export const get = async (params: Pagination) => {
  const res = await axios.get(`${URL}`, {params})
    .then(response => {
      return ResponseData(response.status, response.statusText, response.data)
    })
    .catch(error => {
      return ResponseData(error.response.status, 'Genres not found')
    })

    return res
}