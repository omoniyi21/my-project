import React, { Component } from "react";
import Polaroid1 from "./Polaroid1.png";
import Polaroid2 from "./Polaroid2.png";
import Polaroid3 from "./Polaroid.png";
import './About.css';
import {Link} from "react-router-dom";
import {Row, Col, Grid, Panel, Button, Jumbotron} from "react-bootstrap";
import Navigation from "../Nav/Nav";
import "animate.css";
import Footers from "../Nav/Footer.js"


class About extends Component{
    render(){
        return( 
            
            <div>
                <div className = "Title">
                    <Navigation/>
                        <div className = "Footer"><Footers/></div>
                                <div className="biography-container">
                                    <span className="animated slideInUp">
                                        <Col sm={5}>
                                            <h1 className="Bio-Title">About</h1>
                                                <p className="biography">
                                                Crossing over into web development from social work has allowed me to explore design in many different ways! 
                                                I have found a love for software development, specifically front-end development. (Check out my Stack!)
                                                </p>
                                                <p>
                                                Creating is a constant in my life, as I also love to work with Adobe Photoshop & Illustrator to make graphics.                       
                                                <p> 
                                                When I’m not in front of a computer screen coding or designing, I love to write, 
                                                check out new restaurants (yes, I’m a “foodie” haha), and catch the latest podcasts! My current podcast faves are ‘The Read’ and ‘This American Life’.</p>
                                                </p>
                                        </Col>
                                            <Col sm={7}>
                                                <div className="aboutheader">
                                                    <img className="Polapic" src = {Polaroid1} width="200" height="240"/>
                                                    <img className="Polapic" src = {Polaroid2} width="200" height="240"/>
                                                </div>   
                                        </Col>
                                    </span>
                                </div>
                                    <Row>
                                        <Col md={5}>
                                            <div>PEAL</div>
                                        </Col>   
                                    </Row>
                            </div>
                        </div>
        )
    }
}


export default About;

// <div className = "Title">
            
//                 // <Row md={12}>
//                 // <Col md={6}><h1>About Me</h1>
                
//                 // <p><h3>Hi there! I&apos;m Omoniyi a young, designer who works in front-end and UI/UX design! Lets create together.</h3></p></Col>
            
//                 //         <Row md={6}>
//                 //             <Col lg={6}><div className= "Polaroids">
//                 //             <img src = {Polaroid1} width="200" height="240"/></div>
//                 //             <img src = {Polaroid2} width="200" height="240"/></div> 
//                 //             <img src = {Polaroid3} width="200" height="240"/></div>
//                 //                     </div></Col>
                            
//                 //             </Row>
//                 //                 </Row>
//                 //      <Row md={5}>
                        
//                 //             <div className= "biography">
//                 //                 <p>
//                 //                 Crossing over into web development from social work has allowed me to explore design in many different ways! 
//                 //                 I have found a love for software development, specifically front-end development. (Check out my Stack!)
//                 //                 </p>
//                 //                 <p>
//                 //                 Creating is a constant in my life, as I also love to work with Adobe Photoshop & Illustrator to make graphics.  
                                
//                 //                 <p>When I’m not in front of a computer screen coding or designing, I love to write, 
//                 //                 check out new restaurants (yes, I’m a “foodie” haha), and catch the latest podcasts! My current podcast faves are ‘The Read’ and ‘This American Life’.</p>
//                 //                 </p>
                                
//                 //             </div>
                        
                        
                        
                            
//                 // </Row>                          
//                 // </div>




