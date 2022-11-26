import { NavItem, Button, Modal, Nav, Form, NavDropdown, Row, Col, FloatingLabel } from "react-bootstrap";

function NewInstancePage(){
    return (
        <Form>
            <Form.Group as={Row} className="mb-3" controlId="formInstanceName">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                  <Form.Control type="text" placeholder="Insert your instance name"/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formInstanceType">
              <Form.Label as="legend" column sm={2}>
                Types
              </Form.Label>
              <Col sm={10}>
              <Form.Select aria-label="Type select example">
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
              <Form.Select aria-label="Spec select example">
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
                    as="textarea"
                    placeholder="Insert your initial script"
                    style={{ height: '100px' }}
                  />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formRunScript">
              <Form.Label column sm={2}>
                Run Script
              </Form.Label>
              <Col sm={10}>
                  <Form.Control
                    as="textarea"
                    placeholder="Insert your run script"
                    style={{ height: '100px' }}
                  />
              </Col>
            </Form.Group>
            {/* <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Create</Button>
              </Col>
            </Form.Group> */}
          </Form>
    )
}

export default NewInstancePage;