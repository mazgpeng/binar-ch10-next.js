"use client"
import { useState } from "react";
import { Input, Button, Grid, Text  } from '@nextui-org/react';
import Modal from 'react-bootstrap/Modal';
import GoogleButton from 'react-google-button'

export default function login() {

    const [error, setError] = useState('')
    const [smShow, setSmShow] = useState(false);
    const [success, setSuccess] = useState(false);
    
    const [credential, setCredential] = useState({
        email: '',
        password: ''
    })
    return (
        <div className="latar">
            <div className="container">
                <div className="form-group">
                    <>
                    <Text h1 size={60} css={{textGradient: "45deg, $blue600 -20%, $pink600 50%",}} weight="bold"> log in </Text>
                        <Grid.Container gap={2}>
                            <Grid>
                                <Input labelPlaceholder="Email" width="250px" type="text"  value={credential.email} onChange={(e) => handleChangeInput(e, 'email')}/>
                            </Grid>
                            <Grid>
                                <Input.Password labelPlaceholder="Password" width="250px"  value={credential.password} onChange={(e) => handleChangeInput(e, 'password')}/>
                            </Grid>
                            <Grid>
                                <Button onClick={() => { setSmShow(true); handleLogin(); }} auto color="success" > Login </Button>
                            </Grid>
                            <div className="logoogle">
                            <GoogleButton onClick={() => { setSmShow(true); loginWithGoogle(); }} /> 
                            </div>
                        </Grid.Container>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {!error && success && (
                            <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
                                <Modal.Header closeButton> 
                                    <Modal.Title id="example-modal-sizes-title-sm">
                                        GAMESTATION
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>login successfully</Modal.Body>
                            </Modal>
                        )}
                        {error && (
                            <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
                                <Modal.Header closeButton> 
                                    <Modal.Title id="example-modal-sizes-title-sm">
                                        ERROR
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body> {error} </Modal.Body>
                            </Modal>
                        )}
                        <h3>Don't Have Account?</h3>
                        <Button onClick={() => navigate("/register")} auto color="success"> Register </Button>
                        </>
                </div>
            </div>
    </div>
    )
}