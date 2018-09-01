import React, {Component} from 'react';
import './services.css'
import Navigation from "../Nav/Nav";
import Footers from "../Nav/Footer";
import sketch from "../Portfolio/images/Sketch.png";
import {Row, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import "animate.css";


class Services extends Component {
    render(){
        return(
            <div>
                <div className="services-background">
                    <Navigation/>
                    <center><p className="titleservices">Services</p></center>
                        <div className="my-services">
                        
                        
                        <Row className="services">
                        <div className= "animated flipInY">
                            <div className="service-card">
                            <div className="service-card-title"> 
                            <Row className="box-space">
                                <p>Invitations</p>
                                </Row>
                                    <div className="actual-service">
                                        STARTING AT $45
                                    </div>
                            </div>
                        </div>
                        </div>
                        <div className= "animated flipInY">
                        <div className="service-card">
                        <div className="service-card-title"> 
                        <Row className="box-space">
                            <p>Flyers</p>
                            </Row>
                                <div className="actual-service">
                                    STARTING AT $35
                                </div>
                        </div>
                        </div>
                        </div>
                        <div className= "animated flipInY">
                        <div className="service-card">
                        <div className="service-card-title"> 
                        <Row className="box-space">
                            <p>Business Cards</p>
                            </Row>
                                <div className="actual-service">
                                    STARTING AT $65
                                </div>
                        </div>
                        </div>
                        </div>
                        <div className= "animated flipInY">
                    <div className="service-card">
                    <Row>
                    <div className="service-card-title">
                        <p>Logos</p>
                            <div className="actual-service">
                                <p>STARTING AT $65</p>
                            </div>
                    </div>
                    </Row>
                </div>
                </div>
                <div className= "animated flipInY">
                <div className="service-card">
                <Row>
                <div className="service-card-title">
                       <p className="special-box"> Website </p> 
                        <div className="actual-service">
                            <p>INQUIRE FOR QUOTE</p>
                        </div>
                </div>
                
                </Row>
            </div>
            </div>
                                </Row> 
                            <p className="bottom-of-service">*50% NONREFUNDABLE DEPOSIT DUE BEFORE WORK CAN COMMENCE*</p>
                            <p className="bottom-of-service"><Link to ="/Contact"><Button>Book Today!</Button></Link> </p>
                            
                        
                       </div>
                </div>
                 
            </div>
            
        )
    }
}

export default Services

//<div className="Footer"><Footers/></div>