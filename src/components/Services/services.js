import React, {Component} from 'react';
import './services.css'
import Navigation from "../Nav/Nav";
import Footers from "../Nav/Footer";
import sketch from "../Portfolio/images/Sketch.png";
import {Row} from "react-bootstrap";
import {Link} from "react-router-dom";


class Services extends Component {
    render(){
        return(
            <div>
                <div className="services-background">
                    <Navigation/>
                    <div className="Footer"><Footers/></div>
                    
                        <div className="my-services">
                        <Row className="services">
                            <div className="cards-services">
                                <p className="serivce"></p>
                                    <h1>LOGOS starting at $60</h1>
                            </div>
                                <div className="cards-services">
                                    <p className="serivce"></p>
                                        <center><h1>Flyers starting at $35</h1></center>
                                </div>
                                    <div className="cards-services">
                                        <p className="serivce"></p>
                                            <h1>Business Cards starting at $60</h1>
                                    </div>
                                        <div className="cards-services">
                                        <p className="serivce"></p>
                                            <h1>Invitations starting at $45</h1>
                                        </div>
                                            <div className="cards-services">
                                                <p className="serivce"></p>
                                                    <h1>Website Development<br></br>(inquire for prices)</h1>
                                             </div>
                                </Row> 
                            <p>50% NONREFUNDABLE DEPOSIT DUE BEFORE WORK CAN COMMENCE</p>
                            <p><Link to ="/Contact">Email </Link> me to set up a service today!</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default Services