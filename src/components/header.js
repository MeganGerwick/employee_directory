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
                            <h5 className="text-warning"> Click on the last name and first name headings to sort by alphabetical order</h5>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    );
}

