"use client"
import React, { useEffect, useState } from "react";

import {useRouter} from 'next/navigation'
import Link from "next/link"

import { Navbar, Button, Text} from "@nextui-org/react";
import { getAuth, updateProfile, onAuthStateChanged,signOut } from "firebase/auth";
import app from '@/service/firebase';
import { AcmeLogo } from "@/component/nextui/AcmeLogo.jsx";
import {Modal }from 'react-bootstrap';

export default function Navsbar() {
    const auth = getAuth(app)
    const navigate = useRouter()
    const [isLogin, setisLogin] = useState(false)
    const [users, setUsers] = useState();
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let token = localStorage.getItem('token')
        if (token) {
            setisLogin(true)
        }
    }, [])

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            setUsers(data)
        });
    }, [])

    function signout() {
        signOut(auth, {

        }).then(() => {
            localStorage.removeItem('token')
            navigate.push('/login')
            navigate.push()

        }).catch((error) => {
            alert("something wrong");
            console.log(error)
        });
    };



    const collapseItems = [
        "Landing Page",
        "Home",
        "Games",
    ];
    return (
        <>
            {isLogin ?
                <Navbar isBordered variant= "sticky" style={{ color: "grey" }} height="80px">

                    <Navbar.Brand>
                        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
                        <AcmeLogo />
                        <Text b color="inherit" hideIn="xs">
                            <Link style={{ color: "grey" }} href="/" >GameStation™</Link>
                        </Text>
                    </Navbar.Brand>

                    <Navbar.Content hideIn="xs" variant="default" activeColor="primary">
                        <Navbar.Link onClick={() => navigate.push("/home")}> Home </Navbar.Link>
                        <Navbar.Link onClick={() => navigate.push("/games")}> Games</Navbar.Link>
                        <Navbar.Link onClick={() => navigate.push("/profile")}> Profile</Navbar.Link>
                    </Navbar.Content>
                    <Navbar.Content>
                        <Navbar.Item>
                            <>
                                <Text color="purple" auto flat>
                                    Welcome &nbsp; 
                                </Text>
                                <Text color="purple" auto flat>
                                    {users && <p>{users.displayName}</p>}
                                </Text>
                            </>
                        </Navbar.Item>
                        <Navbar.Item>
                            <Button shadow color="error" auto onClick={handleShow} >
                                Log Out
                            </Button>
                        </Navbar.Item>

                    </Navbar.Content>

                    <Navbar.Collapse showIn={"xs"}>
                        {collapseItems.map((item, index) => (
                            <Navbar.CollapseItem key={item}>
                                <Link as={Link}
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href="#"
                                >
                                    {item}
                                </Link>
                            </Navbar.CollapseItem>
                        ))}
                    </Navbar.Collapse>

                </Navbar >
                :
                < Navbar isBordered variant="sticky" style={{ color: "grey" }} height="80px">

                    <Navbar.Brand>
                        <Navbar.Toggle showIn="xs" aria-label="toggle navigation" />
                        <AcmeLogo />
                        <Text b color="inherit" hideIn="xs">
                            <Link style={{ color: "grey" }} href="/" >GameStation™</Link>
                        </Text>
                    </Navbar.Brand>

                    <Navbar.Content hideIn="xs" variant="default" activeColor="primary">
                        <Navbar.Link onClick={() => navigate.push("/home")}> Home </Navbar.Link>
                        <Navbar.Link onClick={() => navigate.push("/games")}> Games</Navbar.Link>
                    </Navbar.Content>
                    <Navbar.Content>
                        <Navbar.Link color="inherit" onClick={() => navigate.push("/login")}>
                            Login
                        </Navbar.Link>
                        <Navbar.Item>
                            <Button color="secondary" auto flat onClick={() => navigate.push("/register")}>
                                Sign Up
                            </Button>
                        </Navbar.Item>


                    </Navbar.Content>

                    <Navbar.Collapse showIn={"xs"}>
                        {collapseItems.map((item, index) => (
                            <Navbar.CollapseItem key={item}>
                                <Link as={Link}
                                    color="inherit"
                                    css={{
                                        minWidth: "100%",
                                    }}
                                    href="#"
                                >
                                    {item}
                                </Link>
                            </Navbar.CollapseItem>
                        ))}
                    </Navbar.Collapse>

                </Navbar > 

            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Logout</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>Are you sure you want to sign out?</Modal.Body>
                            <Modal.Footer>
                        <Button color="secondary" onPress={handleClose}>
                            Cancel
                        </Button>
                    <Button color="error" onClick={handleClose} onPress={signout}>
                    Logout
                    </Button>
                </Modal.Footer>
            </Modal> 

        </>


    )

}
