"use client"
import styles from '../games/page.css'
import Card from 'react-bootstrap/Card';
import {Button, Badge }from 'react-bootstrap';

export default function games() {
    return (
        <div className="latar">
            <div className="container">
                <div className="formgmlist">
                    <div className="p-4">
                    <h1>Game List <Badge bg="info">BARU</Badge> </h1>
                        <div className="d-flex justify-content-around text-light">
                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src />
                                <Card.Body>
                                <Card.Title>Rock Paper Scissors</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="primary" onClick={() => navigate("/games-detail")}>Game Detail</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src />
                                <Card.Body>
                                <Card.Title>-</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="secondary">Segera Hadir</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src />
                                <Card.Body>
                                <Card.Title>-</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant="secondary">Segera Hadir</Button>
                                </Card.Body>
                            </Card>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}