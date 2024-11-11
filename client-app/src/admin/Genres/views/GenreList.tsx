import React from 'react'
import { Table } from 'reactstrap'
import ReactTable from '../../../components/ReactTable'
import useGenreList from '../hooks/useGenreList'

const GenreList = () => {
  const {
    data
  } = useGenreList()
  var listTitle = ['Thể  loại', 'Slug']

  return (
    <ReactTable 
      listTitle={listTitle}
      data={data}
    />
  )
}

export default GenreList