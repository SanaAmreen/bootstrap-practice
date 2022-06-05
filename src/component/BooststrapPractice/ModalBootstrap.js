import React from 'react'
import {Modal, Button} from 'react-bootstrap'
function ModalBootstrap() {
  return (
    <div className='mod-als'>
    <Modal.Dialog className='mod-als'>
  <Modal.Header closeButton>
    <Modal.Title className='mod-als'>title</Modal.Title>
  </Modal.Header>

  <Modal.Body className='mod-als'>
    <p>so you really wanna close it.</p>
  </Modal.Body>

  <Modal.Footer className='mod-als'>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
    </div>
  )
}

export default ModalBootstrap