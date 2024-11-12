import React from 'react'
import { Button, Table } from 'reactstrap'

const ReactTable = (props: any) => {
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
          var res: any = []
          Object.keys(v).forEach((key) => {
            res.push(v[key])
          })
          return (
            <tr key={i}>
              {res.map((v1) => <td>{v1}</td>)}
              <td>
                <Button onClick={toggle} color="warning">
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

export default ReactTable