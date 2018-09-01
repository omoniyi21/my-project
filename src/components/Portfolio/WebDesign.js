import React , {Component} from "react";
// import {Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button} from "reactstrap";
import {Panel, Row, Button} from "react-bootstrap"
import "./skills.css";
import Navigation from "../Nav/Nav";
import "./WebDesign.css";
import webtitle from "./images/Webtitle.png"
import latestwork from "./images/latest-work.png";
import website2 from "./images/website2.png"
import website3 from "./images/website1.png"


class WebDesign extends Component {
    render(){
        return (
            <div>
            
            <div className="web-background">
            <Navigation/>
            
            <div className="webdev-title">
                <img className="animated fadeinDown" src = {webtitle}/>
            </div>
            <p className="lambdacomment1">Lambda Hair School</p>
            <p className="lambdacomment">Lambda Hair School is a Full Stack Application that can be used to schedule hair appointments & leave ratings for stylists.</p> 
            <p className="lambdacomment2"><Button><a href = "https://github.com/Lambda-School-Labs/CS8-hairschool">Github</a></Button></p>
            <Row>
            <a className="photogrid1" href = "https://www.lambdahairschool.com"> <img className="animated bounceIn" src= {latestwork} width="300px" height="200px" /></a>
            <a className="photogrid1" > <img className="animated bounceIn" src= {website2} width="300px" height="200px" /></a>
            <a className="photogrid1" > <img className="animated bounceIn" src= {website3} width="300px" height="200px" /></a>
            </Row>
                </div>
            </div>
        )
    }
}

export default WebDesign