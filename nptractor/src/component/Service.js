import React, { useState} from "react";
import { Container } from 'react-bootstrap';
import RPM03 from '../asset/img02/RPM03.jpg'
import Table from 'react-bootstrap/Table'
import Tab from 'react-bootstrap/Tab'
import { Nav } from 'react-bootstrap';
import { Row, Col, Sonnet } from 'react-bootstrap';
import { NavLink } from "../../node_modules/react-router-dom/cjs/react-router-dom";

export function Service() {
    const [tab, setTab] = useState('first');

    return(<Container>

    <h3>Services</h3>
    <Tab.Container>
  <Row>
    <Col sm={3}>
      <Nav variant="pills" className="flex-column">
        <Nav.Item>
          <Nav.Link active={tab === 'first'} onClick={()=>setTab("first")}>Business type</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={tab === 'second'}  onClick={()=>setTab("second")}>Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link active={tab === 'third'}  onClick={()=>setTab("third")}>Backing Banks</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9}>
      <div>
        {tab === 'first' && (<p>1</p>)}
        {tab === 'second' && (<p>2</p>)}
        {tab === 'third' && (<p>3</p>)}
      </div>
    </Col>
  </Row>
  </Tab.Container>
</Container>)
}