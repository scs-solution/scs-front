import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NewFrontendInstanceModal(props: any) {
  const createInstance = async () => {
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Frontend Instance
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={createInstance}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}

function InsertNodeButton() {
  const [modalFrontendShow, setModalFrontendShow] = React.useState(false);

  const handleSelect = (eventKey: any) => {
    switch (eventKey) {
      case "front":
        setModalFrontendShow(true);
        break;
    }
  };

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <NavDropdown title="New Instance" id="nav-dropdown">
        <NavDropdown.Item eventKey="front">Frontend</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="backend">Backend</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="database">Database</NavDropdown.Item>
      </NavDropdown>

      <NewFrontendInstanceModal
        show={modalFrontendShow}
        onHide={() => setModalFrontendShow(false)}
      />
    </Nav>
  );
}

export default InsertNodeButton;
