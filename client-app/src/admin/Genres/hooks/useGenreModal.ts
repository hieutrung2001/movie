import React from 'react'
import { useEffect, useState } from "react"
import { create } from "../apis"

const UseGenreModal = (props: any) => {
  const {
    item
  } = props

  const [loading, setLoading] = useState(false)
  
  const addItem = async () => {
    setLoading(true)
    const res = await create(item)
    setLoading(false)
  }

  useEffect(() => {
    addItem()
  }, [])

  return {
    loading
  }
}

export default UseGenreModal