import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap';
import Akali1 from '../assets/Akali1.jpg';
import Akali2 from '../assets/Akali2.jpg';
import Akali3 from '../assets/Akali3.jpg';

class Slider extends Component {
    render() {
        return (
            <Carousel className="carousel">
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={Akali1}
                        alt="SLide1"
                    />
                <Carousel.Caption>
                    <h3>Hello</h3>
                    <p>HEIHOOO</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={Akali2}
                        alt="SLide2"
                    />
                <Carousel.Caption>
                    <h3>Hello2</h3>
                    <p>HEIHOOO2</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={Akali3}
                        alt="SLide1"
                    />
                <Carousel.Caption>
                    <h3>Hello3</h3>
                    <p>HEIHOO2</p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default Slider;