import React from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "react-bootstrap/esm/Modal";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { getScsContextInstance } from "../context/ScsContext";
import SSHPage from "../pages/SSHPage";

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
        <h4>Getting Started</h4>
        <p>
          ...
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={createInstance}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}


function NewBackendInstanceModal(props: any) {
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
          Create Backend Instance
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Getting Started</h4>
        <p>
          ...
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={createInstance}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}


function NewDatabaseInstanceModal(props: any) {
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
          Create Database Instance
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Getting Started</h4>
        <p>
          ...
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={createInstance}>Create</Button>
      </Modal.Footer>
    </Modal>
  );
}



function SSHModal(props: any) {
  const close = async () => {
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
        <Modal.Title>SSH</Modal.Title>
      </Modal.Header>

      <SSHPage instance={getScsContextInstance().infraDesc.instances![0]} />

      <Modal.Footer>
        <Button onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function InsertNodeButton() {
  const [modalFrontendShow, setModalFrontendShow] = React.useState(false);
  const [modalBackendShow, setModalBackendShow] = React.useState(false);
  const [modalDatabaseShow, setModalDatabaseShow] = React.useState(false);
  const [sshModalShow, setSSHModalShow] = React.useState(false);

  const handleSelect = (eventKey: any) => {
    switch (eventKey) {
      case "front":
        setModalFrontendShow(true);
        break;
      case "backend":
        setModalBackendShow(true);
        break;
      case "database":
        setModalDatabaseShow(true);
        break;
      case "ssh":
        setSSHModalShow(true);
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
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="ssh">SSH Test</NavDropdown.Item>
      </NavDropdown>

      {modalFrontendShow ? (
        <NewFrontendInstanceModal
          show={modalFrontendShow}
          onHide={() => setModalFrontendShow(false)}
        />
      ) : (
        <></>
      )}

      {modalBackendShow ? (
        <NewBackendInstanceModal
          show={modalBackendShow}
          onHide={() => setModalBackendShow(false)}
        />
      ) : (
        <></>
      )}

      {modalDatabaseShow ? (
        <NewDatabaseInstanceModal
          show={modalDatabaseShow}
          onHide={() => setModalDatabaseShow(false)}
        />
      ) : (
        <></>
      )}

      {sshModalShow ? (
        <SSHModal show={sshModalShow} onHide={() => setSSHModalShow(false)} />
      ) : (
        <></>
      )}
    </Nav>
  );
}

export default InsertNodeButton;
