import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";

const NewInstanceModal = (props: any) => {
  const { register, handleSubmit, reset } = useForm();

  const onCreateClick = function (data: any) {
    console.log(data);
    reset();
    props.onHide();
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form onSubmit={handleSubmit(onCreateClick)}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Choose an instance to create
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3" controlId="formInstanceName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                {...register("instanceName")}
                type="text"
                placeholder="Insert your instance name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInstanceType">
            <Form.Label as="legend" column sm={2}>
              Types
            </Form.Label>
            <Col sm={10}>
              <Form.Select
                {...register("instanceType")}
                aria-label="Type select example"
              >
                <option>Open this select menu</option>
                <option value="normal">Normal</option>
                <option value="spot">Spot</option>
                <option value="mysql">MySQL</option>
                <option value="redis">Redis</option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInstanceSpec">
            <Form.Label as="legend" column sm={2}>
              Spec
            </Form.Label>
            <Col sm={10}>
              <Form.Select
                {...register("instanceSpec")}
                aria-label="Spec select example"
              >
                <option>Open this select menu</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </Form.Select>
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formInitialScript">
            <Form.Label column sm={2}>
              Initial Script
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                {...register("initialScript")}
                as="textarea"
                placeholder="Insert your initial script"
                style={{ height: "100px" }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formRunScript">
            <Form.Label column sm={2}>
              Run Script
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                {...register("runScript")}
                as="textarea"
                placeholder="Insert your run script"
                style={{ height: "100px" }}
              />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">Create</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

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
      ></NewInstanceModal>
    </>
  );
}

export default InsertNodeButton;
