import React, { Component } from 'react'
import {Card, Container} from 'react-bootstrap'
import Slider from '../components/Slider';
import Cards from '../components/Cards';
import Footer from '../components/Footer';

class Home extends Component {
    render() {
        return (
            <div>
            <Slider/>
            <hr style={{border: "10px solid grey", marginTop:"-0.01rem"}}/>
            <br/>
             <Container>   
            <Card>
                <Card.Body className="d-flex justify-content-center" style={{fontSize: "35px", fontWeight: "bold"}}>Newest Anime</Card.Body>
            </Card>
            </Container>
            <br/>
            <Cards/>
            <br/>
            <Cards/>
            <br/>
            <Container>   
            <Card>
                <Card.Body className="d-flex justify-content-center" style={{fontSize: "35px", fontWeight: "bold"}}>Newest Manga</Card.Body>
            </Card>
            </Container>
            <br/>
            <Cards/>
            <br/>
            <Cards/>
            <br/>
            <Footer/>
            </div>
        )
    }
}

export default Home;