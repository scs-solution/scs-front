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

 // const [modalFrontendShow, setModalFrontendShow] = React.useState(false);
  // const [modalBackendShow, setModalBackendShow] = React.useState(false);
  // const [modalDatabaseShow, setModalDatabaseShow] = React.useState(false);
  // const [sshModalShow, setSSHModalShow] = React.useState(false);

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

//   {/* {modalFrontendShow ? (
//         <NewFrontendInstanceModal
//               show={modalFrontendShow}
//               onHide={() => setModalFrontendShow(false)}
//         />
//       ) : (
//         <></>
//       )}
//       {modalBackendShow ? (
//         <NewBackendInstanceModal
//           show={modalBackendShow}
//           onHide={() => setModalBackendShow(false)}
//         />
//       ) : (
//         <></>
//       )}
//       {modalDatabaseShow ? (
//         <NewDatabaseInstanceModal
//           show={modalDatabaseShow}
//           onHide={() => setModalDatabaseShow(false)}
//         />
//       ) : (
//         <></>
//       )} */}