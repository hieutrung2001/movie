import React from 'react'
import { Table } from 'reactstrap'

const ReactTable = (props: any) => {
  const {
    listTitle = ['a', 'b'],
    data
  } = props

  return (
    <Table striped>
      <thead>
        <tr>
          <th>
            #
          </th>
          {listTitle && listTitle.map((v, i) => <th key={i}>{v}</th>)}
        </tr>
      </thead>
      <tbody>
        {data && data.map((v, i) => {
          return (
            <tr key={i}>
            </tr>
          )
        })}
        <tr>
          <th scope="row">
            1
          </th>
          <td>
            Mark
          </td>
          <td>
            Otto
          </td>
          <td>
            @mdo
          </td>
        </tr>
        <tr>
          <th scope="row">
            2
          </th>
          <td>
            Jacob
          </td>
          <td>
            Thornton
          </td>
          <td>
            @fat
          </td>
        </tr>
        <tr>
          <th scope="row">
            3
          </th>
          <td>
            Larry
          </td>
          <td>
            the Bird
          </td>
          <td>
            @twitter
          </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default ReactTable