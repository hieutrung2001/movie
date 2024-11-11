import { useEffect, useState } from 'react'
import { auth } from '../apis'
import { LoginModel } from '../../constants'

const useLogin = () => {
  const [token, setToken] = useState('')

  const getToken = async (values: LoginModel) => {
    const token = await auth(values)
  }

  return {
    token
  }
}

export default useLogin