import React from "react";
import { Container, Row, Col, Card, } from 'react-bootstrap';
import { data } from "../data/projects"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import i18n from "i18next";

export function Project(prop) {
    return (
        <Card className="bg-dark text-white"  >
            <Card.Img src={prop.img} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>YO</Card.Title>
                <Card.Text>
                    {prop.desc}
                </Card.Text>
                <Card.Text>
                    <Link to={'/Project/' + prop.id}>Details</Link>
                </Card.Text>

            </Card.ImgOverlay>
        </Card>);
}
