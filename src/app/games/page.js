"use client"
import Card from 'react-bootstrap/Card';
import {Button, Badge }from 'react-bootstrap';
import {useRouter} from 'next/navigation'
import Image from "next/image";
import css from '../page.module.css'
import styles from './games.css';
import suit from "../images/janken.png";
import coming1 from "../images/games.png";
import coming2 from "../images/games1.png";


export default function games() {
    const navigate = useRouter()


    return (
        <div className={css.heroImage}>
            <div className="latar">
                <div className="container">
                    <div className="formgmlist">
                        <div className="p-4">
                        <h1>Game List <Badge bg="info">BARU</Badge> </h1>
                            <div className="d-flex justify-content-around text-light">
                                <Card style={{ width: '15rem'  }}>
                                    <Image variant="top" src={suit} height={100} />
                                    <Card.Body>
                                    <Card.Title>Rock Paper Scissors</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => navigate.push("/games-detail")}>Game Detail</Button>
                                    </Card.Body>
                                </Card>

                                <Card style={{ width: '15rem' }}>
                                    <Image variant="top" src={coming1} height={100} />
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
                                    <Image variant="top" src={coming2} height={100} />
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
        </div>
    );
}