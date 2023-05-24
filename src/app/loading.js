"use client"
import { Progress, Container,Card, Row,Col,Spacer,Text } from "@nextui-org/react";

export default function Loading() {
    return (
        <Container xs css={{ mt: "$40" }} >
            <Row justify="center" align="center">
                <Col justify="center" align="center">
                    <Card css={{ $$cardColor: 'transparent' }}>
                        <Card.Body>
                            <Text justify="center" align="center" h1>Now Loading</Text>
                            <Spacer y={0.5} />
                            <Progress
                                indeterminated
                                value={50}
                                color="primary"
                                status="primary"
                            />
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    )
}