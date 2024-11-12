import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import TableList from '../modals/TableList'
import useGenreList from '../hooks/useGenreList'

const GenreList = () => {
  const {
    data
  } = useGenreList()
  var listTitle = ['Thể  loại', 'Slug']

  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  return (
    <>
      <h2>Thể loại</h2>
      <div className="pt-3"></div>
      <div className='mb-3'>
        <Button
          color="primary"
        >
          Thêm mới
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Chỉnh sửa</ModalHeader>
        <ModalBody>
          Do Something
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <TableList
        listTitle={listTitle}
        data={data}
        toggle={toggle}
      />
    </>
  )
}

export default GenreList