import axios from "axios"
import { BASE_URL } from "../../../constants"

const URL = `${BASE_URL}/account`

export const auth = async () => {
  await axios.post(`${URL}/login`, )
}