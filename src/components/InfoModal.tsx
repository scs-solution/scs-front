import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getScsContextInstance } from "../context/ScsContext";
import { InfraInstance } from "../dtos/infra-desc.dtos";

export default function InfoModal(props: any) {
  const instance = props.instance as InfraInstance;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Form>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Instance Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Name
            </Form.Label>
            <Col sm={9}>
              <Form.Control disabled={true} type="text" value={instance.name} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Instance Id
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                disabled={true}
                type="text"
                value={instance.instanceId}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Type
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                disabled={true}
                type="text"
                value={instance.instanceType}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Spec
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                disabled={true}
                type="text"
                value={instance.instanceSpec}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Public Ip
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                disabled={true}
                type="text"
                value={instance.publicIp}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Private Ip
            </Form.Label>
            <Col sm={9}>
              <Form.Control
                disabled={true}
                type="text"
                value={instance.privateIp}
              />
            </Col>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => props.onHide()}>Close</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
