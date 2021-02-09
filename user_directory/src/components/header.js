import React from "react";

import { Jumbotron, Row, Col, Container } from 'reactstrap'

export default function Header(props) {
    return (
        <div>
            <Jumbotron fluid>
                <Container fluid>
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                            <h1 className="display-3 text-warning">Employee Directory</h1>
                            <h5 className="text-warning"> Use the arrows to filter in ascending or descending alphabetical order</h5>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

