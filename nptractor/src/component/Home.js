import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import MLWN02 from '../asset/img02/MLWN02.jpg'
import LYH01 from '../asset/img02/LYH01.jpg'
import MLWN01 from '../asset/img02/MLWN01.jpg'
import Button from 'react-bootstrap/Button'

export function Home() {
    return (<div>
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 h-5"
                    src={MLWN02}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={LYH01}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={MLWN01}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
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
                    <Card.Title>Contact</Card.Title>
                    <Card.Text>
                        How to contact us
                    </Card.Text>
                    <Button href="contact">Learn more</Button>
                </Card.Body>
            </Card>

        </CardGroup>
    </div>)
}