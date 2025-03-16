import React, { useRef, useState } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap'
import TableList from '../modals/TableList'
import useGenreList from '../hooks/useGenreList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import GenreModal from '../modals/GenreModal'
import { GenreModel } from '../../constants'

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
    console.log(id)
    if (!modal) {
      setId(id)
    } else {
      setId(0)
    }
    if (item) {
      setItem(item)
    }
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