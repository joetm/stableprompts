import React from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'


export default function CustomModal({ eventName='', showConfirm, handleClose, handleEvent, description='' }) {
  return (
    <Modal show={showConfirm} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {description}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel {eventName}
        </Button>
        <Button variant="danger" onClick={handleEvent}>
          Confirm {eventName}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
