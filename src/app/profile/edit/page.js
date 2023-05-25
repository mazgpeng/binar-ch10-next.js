"use client"
import { Text, Container, Card, Row, Spacer, Col, Button, Input } from "@nextui-org/react"
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { changeDispname, changeEmail, changeUid, changePhotoURL } from "@/store/reducer/userfReducer";
import { getAuth, updateProfile, onAuthStateChanged } from "firebase/auth"
import app from '@/service/firebase';
import { useRouter } from 'next/navigation';

export default function profileEdit() {
    const auth = getAuth(app)
    const navigate = useRouter()
    const dispatch = useDispatch()
    const loginState = useSelector(state => state.loginReducer)
    const userfState = useSelector(state => state.userfReducer)
    // const [isLogin, setisLogin] = useState(false)

    // useEffect(() => {
    //     let token = localStorage.getItem('token')
    //     if (token) {
    //         setisLogin(true)
    //     }
    // }, [])

    // const [users, setUsers] = useState();
    const [profile, setProfile] = useState({
        name: "",
        avatar: "",
    })

    // useEffect(() => {
    //     onAuthStateChanged(auth, (data) => {
    //         setUsers(data)
    //     });
    // }, [])
    function updateState() {
        dispatch(changeDispname(profile.name))
        dispatch(changePhotoURL(profile.avatar))
    }

    function updatedata() {
        updateProfile(auth.currentUser, {
            displayName: profile.name,
            photoURL: profile.avatar,

        }).then(() => {
            alert('profile updated');
            navigate.push('/profile')
        }).catch((error) => {
            alert("something wrong");
        });
    };

    function handleChangeInput(e, type) {
        let value = e.target.value
        let temp = { ...profile }
        temp[type] = value
        setProfile(temp)
    }

    return (
        <>
            {loginState.isLogin ?
                <Container xl >
                    <Card css={{ $$cardColor: 'gray' }}>
                        <Card.Body>
                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    UID :
                                </Text>
                                <Spacer y={2} />
                                <Input readOnly placeholder="Disabled" value={userfState.uid}
                                />

                            </Row>
                            <Spacer y={0.3} />

                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Email :
                                </Text>
                                <Spacer y={2} />
                                <Input readOnly placeholder="Disabled" value={userfState.email} />

                            </Row>
                            <Spacer y={0.3} />

                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Name :
                                </Text>
                                <Spacer y={2} />
                                <Input placeholder="Name" clearable initialValue={userfState.displayName} onChange={(e) => handleChangeInput(e, 'name')} />

                            </Row>
                            <Spacer y={0.3} />



                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Avatar :
                                </Text>
                                <Spacer y={2} />
                                <Input placeholder="Input Image Url" clearable initialValue={userfState.photoURL} onChange={(e) => handleChangeInput(e, 'avatar')} />

                            </Row>
                            <Spacer y={0.3} />

                            <Row justify="center" align="center">
                                <Text h6 size={15} color="white" css={{ m: 0 }}>
                                    Game Score :
                                </Text>
                                <Spacer y={2} />
                                <Input readOnly />

                            </Row>

                        </Card.Body>
                    </Card>
                    <Row css={{ mt: "$10" }} justify="center" align="center">
                        <Button onPress={() => {
                            updatedata();
                            updateState();
                        }} shadow color="primary">
                            Submit
                        </Button>
                    </Row>
                </Container>
                :
                <Container xs css={{ mt: "$40" }} >
                    <Row justify="center" align="center">
                        <Col justify="center" align="center">
                            <Card css={{ $$cardColor: 'white' }}>
                                <Card.Body>
                                    <Text justify="center" align="center" h1>Please Login To View Page!</Text>
                                    <Spacer y={0.5} />
                                    <Button onClick={() => navigate.push('/login')} xs css={{ mb: "$10" }} shadow bordered color="gradient" auto>
                                        Login
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            }
        </>
    )
}