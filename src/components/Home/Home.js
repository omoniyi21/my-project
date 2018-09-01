import React, { Component } from "react";
// import Slider from "react-slick";
import {Button, 
        Jumbotron, 
         Card, 
        CardImg, 
        CardText, 
        CardBody,
        CardTitle, 
        CardSubtitle,
        } from "reactstrap";
import "./Home.css";
import Navigation from "../Nav/Nav";
import "animate.css";
import {Row,
        Col, 
        } from "react-bootstrap";
import blogpic from "./images/Blog-title.png"
import {Link} from "react-router-dom";
import Footers from "../Nav/Footer";
import latestwork from "./images/latest-work.png";
import sketch from "./images/Sketch.png"




class Home extends Component{

    render(){
        return(
            <div>
             
                <div className="background-home">
                    <Navigation/>
                        
                            
                                <Col md={6}>
                                </Col>
                                    <Col md={6}>
                                        <div className="welcome-container">
                                                <p>Let&apos;s Create Together!  </p>
                                                <div className="welcome-subtext"><p> I&apos;ve got a thing for Front-end Development and Graphic Design.</p></div>
                                             </div>
                                             <Row className="cards" sm={5}>
                                                <div className="cards-body">
                                                <div className="home-page">
                                                    <p className="blog-card-title">MY BLOG</p>
                                                                <Link to = "/Blog"><img className="animated bounceIn" src = {blogpic} width="230px" heigth="250px"/></Link>
                                                            </div>
                                            </div>
                                                    <div className="cards-body2">
                                                        <p className="blog-card-title">LATEST PROJECT</p>
                                                            <div className="home=page">
                                                               <a href = "https://github.com/Lambda-School-Labs/CS8-hairschool"> <img className="animated bounceIn" src= {latestwork} width="150px" height="150px" /></a>
                                                            </div>
                                                    </div>
                                                <div className="cards-body3">
                                                <p className="blog-card-title">WEEKLY SKETCH</p>
                                                <img className="animated bounceIn" src = {sketch} width="150px" height="150px" />
                                                </div>
                                            </Row>
                                    </Col>
                </div>
                <div className="Footer"><Footers/></div>
            </div>
        )
    }
}


export default Home


// const settings ={
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidestoShow: 1,
//     slidestoScroll: 1,
//     draggable: true,
//     adaptiveHeight: true,
//     fade: true,
//     autoplay: true,
//     pauseOnHover: true,
//     arrow: true,
    
// };


// <Slider {...settings}>
//           <div className= 'Image1'>
//          <img src = {logo} width="500px" height="500px"/>
//           </div>
//           <div className='Image9'>
//           <img src = {logo2} width="500px" height="500px"/>
//           </div>
//           <div className= 'Image2'>
//           <img src = {vday} width="500px" height="500px"/>
//           </div>
//           <div className= 'Image3'>
//           <img src = {graphic} width="500px" height="500px"/>
//           </div>
//           <div className= 'Image4'>
//           <img src = {roxegold} width="700px" height="500px"/>
//           </div>
//           <div className= 'Image5'>
//           <img src = {invite2} width="500px" height="700px"/>
//           </div>
//           <div className= 'Image6'>
//           <img src = {floralinvite} width="500px" height="500px"/>
//           </div>
//           <div className= 'Image7'>
//           <img src = {AKADEMICS} width="500px" height="500px"/>
//           </div>
//           <div className= 'Image8'>
//           <img src = {Africa} width="500px" height="500px"/>
//           </div>
//           <div className = 'Image10'>
//           <img src = {FMAG} width="500px" height="500px"/>
//           </div>
//           <div className = 'Image11'>
//           <img src = {background} width="500px" height="500px"/>
//           </div>
//           </Slider> 

// <span className="animated fadeInUp">
// <img className="omtower" src={background1} width="500px" height="700px" />
// </span>

// <Row lg={8} className="Bottom-of-home">
// <div className="card">
//     <div className="cards-body">
//     <div className="home-page">
//         <p className="blog-card-title">MY BLOG</p>
//                     <Link to = "/Blog"><img className="animated bounceIn" src = {blogpic} width="230px" heigth="250px"/></Link>
//                 </div>
//             </div>
// </div>
//     <div className="card">
//         <div className="cards-body2">
//             <p className="blog-card-title">LATEST PROJECT</p>
//                 <div className="home=page">
//                    <a href = "https://github.com/Lambda-School-Labs/CS8-hairschool"> <img className="animated bounceIn" src= {latestwork} width="150px" height="150px" /></a>
//                 </div>
//         </div>
//     </div>
// <div className="card">
//     <div className="cards-body3">
//     <p className="blog-card-title">WEEKLY SKETCH</p>
//     <img className="animated bounceIn" src = {sketch} width="150px" height="150px" />
//     </div>
// </div>
// </Row>