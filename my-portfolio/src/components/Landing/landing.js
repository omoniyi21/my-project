import React, { Component } from "react";
// import Slider from "react-slick";
import {Button, Jumbotron} from "reactstrap";
// import {Row, Col} from "react-bootstrap";
// import logo from './logo.jpg';
// import Africa from './Africa.jpg';
// import AKADEMICS from './AKADEMICS.jpg';
// import floralinvite from './floralinvite.jpg';
// import invite2 from './invite2.jpg';
// import roxegold from './roxegold.jpg';
// import graphic from './graphic.jpg';
// import vday from './vday.jpg';
// import logo2 from './logo2.jpg';
// import FMAG from './FMAG.jpg';
import "./landing.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import OmLogo from './OmLogo.png';
import {Link} from "react-router-dom";
import "animate.css";





class LandingPage extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return (
            <div className="background">
                <div className="home">
                
                <span className= "animated bounceInDown">
                <div className="Title-page">
                 <p className="lineone">I&apos;m Omoniyi Alimi, A Digital Designer.</p>
                 
              
                </div>
                
                </span>
               
                    
                        <div className="home-button">
                            <span className= "animated bounceInDown">
                            <Link to = "/Home">
                            <center><img className="logo" src={OmLogo} alt="Logo" width="220px" height="220px"/></center>
                            </Link>
                            </span>
                        </div>
                    
                </div>
            </div> 
            
            )
        }
    }

export default LandingPage

// <h3 className="linetwo">I can make you something you&apos;ll love!</h3>
//                 <h2>I&apos;ve got a thing for Front-End Dev and UX/UI.</h2>