import React, { useRef, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import TableList from '../modals/TableList'
import useGenreList from '../hooks/useGenreList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

const GenreList = () => {
  const {
    data
  } = useGenreList()
  var listTitle = ['Thể  loại', 'Slug']

  const [id, setId] = useState(0)
  const [modal, setModal] = useState(false)
  // var headerName = ''

  const toggle = (id) => {
    setModal(!modal)
    setId(id)
  }

  return (
    <>
      <h2>Thể loại</h2>
      <div className="pt-3"></div>
      <div className='mb-3'>
        <Button
          color="success"
          onClick={toggle}
        >
          <FontAwesomeIcon icon={faAdd} />
            {' Tạo mới'}
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