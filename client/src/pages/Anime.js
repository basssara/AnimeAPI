import React, { Component } from 'react'
import {Card, Container} from 'react-bootstrap'
import Cards from '../components/Cards';

export default class Anime extends Component {
    render() {
        return (
            <div>
            <br/>
            <Container>   
            <Card>
                <Card.Body className="d-flex justify-content-center" style={{fontSize: "large", fontWeight: "bold"}}>Anime</Card.Body>
            </Card>
            </Container>
            <br/>
            <Cards/>
            </div>
        )
    }
}
