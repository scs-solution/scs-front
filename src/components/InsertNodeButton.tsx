import { NavItem, Button, Modal, Nav, Form, NavDropdown, Row, Col, FloatingLabel } from "react-bootstrap";
import { getScsContextInstance } from "../context/ScsContext";
import SSHPage from "../pages/SSHPage";
import React, { useState } from 'react';
import NewInstancePage from "../pages/NewInstancePage";

// function NewFrontendInstanceModal(props: any) {
  
//   const createInstance = async () => {
//     props.onHide();
//   };

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Create Frontend Instance
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <NewInstancePage></NewInstancePage>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={createInstance}>Done</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }


// function NewBackendInstanceModal(props: any) {
//   const createInstance = async () => {
//     props.onHide();
//   };

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Create Backend Instance
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <NewInstancePage></NewInstancePage>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={createInstance}>Done</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }


// function NewDatabaseInstanceModal(props: any) {
//   const createInstance = async () => {
//     props.onHide();
//   };

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Create Database Instance
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <NewInstancePage></NewInstancePage>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={createInstance}>Done</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }



// function SSHModal(props: any) {
//   const close = async () => {
//     props.onHide();
//   };

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title>SSH</Modal.Title>
//       </Modal.Header>

//       <SSHPage instance={getScsContextInstance().infraDesc.instances![0]} />

//       <Modal.Footer>
//         <Button onClick={close}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

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
  // const [modalFrontendShow, setModalFrontendShow] = React.useState(false);
  // const [modalBackendShow, setModalBackendShow] = React.useState(false);
  // const [modalDatabaseShow, setModalDatabaseShow] = React.useState(false);
  // const [sshModalShow, setSSHModalShow] = React.useState(false);

  const [modalShow, setModalShow] = React.useState(false);

  

  // const handleSelect = (eventKey: any) => {
  //   switch (eventKey) {
  //     case "front":
  //       setModalFrontendShow(true);
  //       break;
  //     case "backend":
  //       setModalBackendShow(true);
  //       break;
  //     case "database":
  //       setModalDatabaseShow(true);
  //       break;
  //     case "ssh":
  //       setSSHModalShow(true);
  //       break;
  //   }
  // };

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

      {/* {modalFrontendShow ? (
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
      )} */}
    </>
  );
}

export default InsertNodeButton;
