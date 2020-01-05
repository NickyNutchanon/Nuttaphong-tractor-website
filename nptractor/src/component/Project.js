import React from "react";
import Table from 'react-bootstrap/Table'
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import i18n from "i18next";
import { data } from "../data/projects"
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import style01 from "../asset/css/style01.css"

export function Project(prop) {
  return (
    <Container>
      <h1 classname={style01}>Our Projects</h1>
      <h2 classname={style01}>Project Highlights</h2>
      <CardGroup>
        <Card>
          <Card.Body>
            <Card.Title>About</Card.Title>
            <Card.Text>
              Learn more about us!
                    </Card.Text>
            <Button href="about">Learn more</Button>
          </Card.Body>

        </Card>
        <Card>
          <Card.Body>
            <Card.Title>History</Card.Title>
            <Card.Text>
              Learn more about our history
                    </Card.Text>
            <Button href="history">Learn more</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Project</Card.Title>
            <Card.Text>
              List of our completed projects
                    </Card.Text>
            <Button href="project">Learn more</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Service</Card.Title>
            <Card.Text>
              The service we provide
                    </Card.Text>
            <Button href="service">Learn more</Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Contact</Card.Title>
            <Card.Text>
              How to contact us
                    </Card.Text>
            <Button href="contact">Learn more</Button>
          </Card.Body>
        </Card>

      </CardGroup>
      <h2>Other Projects</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NO.</th>
            <th>Project Description</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>
          {data.map(project =>
            (<tr>
              <td>{project.id}</td>
              <td>{project.title}</td>
              <td>{project.desc}</td>
            </tr>))}
        </tbody>
      </Table>
    </Container>);
}
