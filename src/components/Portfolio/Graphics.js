import React , {Component} from "react";
// import {Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button} from "reactstrap";
import {Panel, Row} from "react-bootstrap"
import "./skills.css";
import Navigation from "../Nav/Nav";
import "./Graphics.css";
import graphicstitle from "./images/graphics-title.png"
import Africa from "./images/Africa.jpg";
import Akademics from "./images/AKADEMICS.jpg";
import Floral from "./images/floralinvite.jpg";
import FMAG from "./images/FMAG.jpg";
import Invite2 from "./images/invite2.jpg";
import Vday from "./images/vday.jpg";
import logo from "./images/Plugmedia4.png";
import rozegold from "./images/roxegold.jpg";
import bell from "./images/bell-flyer.png";
import bell2 from "./images/bell2.png";
import car from "./images/carwash.png";
import games from "./images/GameNight.png";
import omgraphic from "./images/graphic.jpg";
import hint from "./images/hintlogo.png";
import invite3 from "./images/invite3.png";
import logo3 from "./images/logo5.png";
import mag from "./images/magazinecover.png"
import plug from "./images/Plug2.png";
import roze from "./images/ROZAYRELAUNCH1.png";
import sketch from "./images/Sketch.png";



class Graphic extends Component {
    render(){
        return (
            
            <div className="graphic-background"> 
            <Navigation/>  
                
                        <div className = "Title-graphics">
                    <img className="animated fadeInDown" src = {graphicstitle}/>
                    </div>
                    <Row lg={12} className="photogrid">
                        
                            <img className="photo1" src={Africa} width= "300px" height= "300px" />
                            <img className="photo1" src={Akademics} width= "300px" height= "300px" />
                            <img className="photo1" src={car} width= "300px" height= "300" />
                            <img className="photo1" src={FMAG} width= "300px" height= "300" />
                        </Row>
                            <Row className="photogrid">
                                <img className="photo1" src={Vday} width= "300px" height= "300" />
                                <img className="photo1" src={bell} width="300px" height="300px"/>
                                <img className="photo1" src={bell2} width="300px" height="300px"/>
                                <img className="photo1" src={Floral} width="300px" height="300px"/>
                            </Row>
                                <Row lg={12} className="photogrid">
                                    <img className="photo1" src={omgraphic} width= "300px" height= "300" />
                                    <img className="photo1" src={roze} width="300px" height="300px"/>
                                    <img className="photo1" src={sketch} width="300px" height="300px"/>
                                    <img className="photo1" src={invite3} width="300px" height="300px"/>
                                </Row>
                                    <Row lg={12} className="photogrid">
                                        <img className="photo1" src={plug} width= "300px" height= "300" />
                                        <img className="photo1" src={logo} width="300px" height="300px"/>
                                        <img className="photo1" src={hint} width="300px" height="300px"/>
                                        <img className="photo1" src={logo3} width="300px" height="300px"/>
                                    </Row>
                                            <Row lg={12} className="photogrid">
                                                <img className="photo1" src={games} width= "300px" height= "400" />
                                                <img className="photo1" src={Invite2} width="300px" height="400px"/>
                                                <img className="photo1" src={mag} width="300px" height="400px"/>
                                            </Row>
                </div>
        )
    }
}

export default Graphic