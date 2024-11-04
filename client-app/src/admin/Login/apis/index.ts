import axios, { AxiosError } from "axios"
import { BASE_URL, ResponseData } from "../../../constants"
import { LoginModel } from "../constants"

const URL = `${BASE_URL}/account`

export const auth = async (params: LoginModel) => {
  const res = await axios.post(`${URL}/login`, params)
    .then(response => {
      
      return ResponseData(response.status, response.statusText, response.data)
    })
    .catch(error => {
      return ResponseData(error.response.status, 'User not found')
    })
  return res
}