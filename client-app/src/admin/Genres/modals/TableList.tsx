import React from 'react'
import { Button, Table } from 'reactstrap'

const TableList = (props: any) => {
  const {
    listTitle,
    data,
    toggle
  } = props

  return (
    <Table striped>
      <thead>
        <tr>
          <th>
            #
          </th>
          {listTitle && listTitle.map((v, i) => <th key={i}>{v}</th>)}
          <th>Tuỳ chọn</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 && data.map((v, i) => {
          return (
            <tr key={v.id}>
              <td>{i+1}</td>
              <td>{v.name}</td>
              <td>{v.slug}</td>
              <td>
                <Button onClick={() => toggle(v.id, { name: v.name, slug: v.slug })} color="warning">
                  Sửa
                </Button>
                {' '}
                <Button color="danger">
                  Xoá
                </Button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default TableList