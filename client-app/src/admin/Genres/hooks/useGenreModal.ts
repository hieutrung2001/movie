import React from 'react'
import { useEffect, useState } from "react"
import { create } from "../apis"

const useGenreModal = (item: any) => {
  const initValues = {
    name: '',
    slug: ''
  }

  const [form, setValues] = useState(initValues)


  const onChange = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const submitForm = async (e) => {
    e.preventDefault();
    const res = await create(form)
    console.log('RESULT', res) 
  }

  useEffect(() => {
    if (item) {
      const {
        name,
        slug
      } = item
      setValues({ name, slug })
    } else {
      setValues(initValues)
    }
  }, [item])


  return {
    onChange,
    submitForm,
    form,
  }
}

export default useGenreModal