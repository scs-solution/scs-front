import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function InsertNodeButton() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Frontend</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.2">Backend</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.3">Database</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );
}

export default InsertNodeButton;
