import { NavItem, Button, Modal, Nav, Form, NavDropdown, Row, Col, FloatingLabel } from "react-bootstrap";
import { getScsContextInstance } from "../context/ScsContext";
import SSHPage from "../pages/SSHPage";
import React, { useState } from 'react';
import NewInstancePage from "../pages/NewInstancePage";



const NewInstanceModal = (props:any) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Choose an instance to create
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <NewInstancePage></NewInstancePage>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}


function InsertNodeButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        New Instance
      </Button>

      <NewInstanceModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      >
      </NewInstanceModal>
    </>
  );
}

export default InsertNodeButton;
