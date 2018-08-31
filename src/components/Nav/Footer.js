import React, {Component} from "react";
import "animate.css";
import "./Footer.css";
import twitter from "./twitter.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import instagram from "./instagram.png";
import {Link} from "react-router-dom";

class Footers extends Component{
    render(){
        return(
            <div>
                <ul className = "bottom-nav">
                <ul className="twitter"><a href= "https://twitter.com/omoniyilove" ><img src = {twitter} width="25px" height="25px"/></a></ul>
                <ul className="linkedin"><a href="https://www.linkedin.com/in/omoniyi-alimi-08428782/"><img src = {linkedin} width="25px" height="25px"/></a></ul>
                <ul className="github"><a href="https://github.com/omoniyi21"><img src = {github} width="25px" height="25px" /></a></ul>
                <ul className="instagram"><a href="https://www.instagram.com/onedesigning/"><img src = {instagram} width="25px" height="25px" /></a></ul>
                </ul>
            </div>
        )
    }
}

export default Footers 