import React, { useState } from 'react'
import { Button, Modal, ModalBody, ModalHeader } from 'reactstrap'
import TableList from '../modals/TableList'
import useGenreList from '../hooks/useGenreList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import GenreModal from '../modals/GenreModal'

const GenreList = () => {
  const {
    data
  } = useGenreList()
  var listTitle = ['Thể loại', 'Slug']

  const [id, setId] = useState(0)
  const [modal, setModal] = useState(false)
  const [item, setItem] = useState(null)
  // var headerName = ''

  const toggle = (id, item?) => {
    setModal(!modal)
    !modal ? setId(id) : setId(0)
    id != 0 ? setItem(item) : setItem(null)
  }

  return (
    <>
      <h2>Thể loại</h2>
      <div className="pt-3"></div>
      <div className='mb-3'>
        <Button
          color="success"
          onClick={() => toggle(id)}
        >
          <FontAwesomeIcon icon={faAdd} />
            {' Thêm'}
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{id == 0 ? 'Tạo mới' : 'Chỉnh sửa'}</ModalHeader>
        <ModalBody>
          {/* Modal  */}
          <GenreModal 
            id={id} 
            item={item}
          />
        </ModalBody>
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