"use client"

import React, { useState, useEffect } from "react";
import { Text, Container, Row, Button, Spacer, Card, Col, useSSR } from "@nextui-org/react";
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Image from "next/image";
import css from '../page.module.css'
import styles from './home.css';
import suit from '../images/suit.jpg';


export default function home(){
    const [isLogin, setisLogin] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            setisLogin(true)
        }
        }, [])

    const [users, setUsers] = useState()


    return (
        <>  
            
            <div className={css.heroImage}>
                <div className="latar">
                <div className="container">
                    <div className="formhome">
                    <div className="container home-content rounded p-3 shadow">
                    <h4 className="home-left text-light">Hi, Welcome {users && <h4>{users.displayName}</h4>} </h4>
                    <p className="home-left text-light">Recomended Game For You</p>
                        <div className="home-box-game mb-3 rounded border">
                        <div className="p-3">
                            <Image src={suit} height={100} width={100} alt=""/>
                        </div>
                        <div className="p-3 text-light home-detail">
                        <Text h3 size={60}css={{textGradient: "45deg, $purple600 -20%, $pink600 100%",}}weight="bold"
                            >Rock Paper Scissors
                        </Text>
                        <p>Our most played game</p>
                        <p>
                            What is the concept of Rock Paper Scissors? Each gesture defeats
                            one and is defeated by one of the other two: rock defeats
                            scissors but is defeated by paper; paper defeats rock but is
                            defeated by scissors. The person whose gesture defeats the other
                            is selected.
                        </p>
                        <Button css={{ mb: "$10" }} shadow bordered color="gradient" auto onClick={() => navigate("/games")}>
                        Play Now!
                        </Button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* <Footer /> */}
                </div>
                </div>
                :
                <Container xs css={{ mt: "$40" }} >
                <Row justify="center" align="center">
                    <Col justify="center" align="center">
                    <Card css={{ $$cardColor: 'white' }}>
                        <Card.Body>
                        <Text justify="center" align="center" h1>Please Login To View This Page!</Text>
                        <Spacer y={0.5} />
                        <Button onClick={() => navigate('/login')} xs css={{ mb: "$10" }} shadow bordered color="gradient" auto>
                            Login
                        </Button>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
                </Container>
                
            
            
        </>   
    );
}