import React from 'react';
import { Container, Row } from 'reactstrap';

export default function SearchBar(props) {
    return (
        <form>
            <div className="form-group">
                <div className="input-group">
                    <Container>
                        <Row>
                            <p>Search by first or last name here</p>
                            <input onChange={props.handleInputChange}
                                value={props.search}
                                name="search"
                                className="form-control"
                                placeholder="Search here"
                                type="text"
                                id="search" />
                        </Row>
                    </Container>
                </div>
            </div>
        </form>
    );
};