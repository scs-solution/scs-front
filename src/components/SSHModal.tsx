import { Button, Modal } from "react-bootstrap";
import { getScsContextInstance } from "../context/ScsContext";
import SSHPage from "../pages/SSHPage";

export default function SSHModal(props: any) {
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

      <SSHPage instance={props.instance} />

      <Modal.Footer>
        <Button onClick={close}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
