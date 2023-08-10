import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForm from './ModalForm';
import { useTranslation } from 'react-i18next';

export default function MyVerticallyCenteredModal(props) {
  const {t} = useTranslation()

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {/* Modal heading */}
        </Modal.Title>
      </Modal.Header>
      <ModalForm></ModalForm>
      {/* <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body> */}
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>{t("close")}</Button>
      </Modal.Footer>
    </Modal>
  )
}
