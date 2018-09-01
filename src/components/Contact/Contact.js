import React, {Component} from "react";
import './Contact.css';
import {Form, FormGroup, Label , FormText, Col, Input } from "reactstrap";
import Navigation from "../Nav/Nav";
import Footers from "../Nav/Footer";
import {Button} from "react-bootstrap";

export default class About extends Component {
    render(){
        return (
            <div className="Contact">
            <Navigation/>
            <div className="Footer"><Footers/></div>
            <center><p className="titlecontact1">Lets Connect!</p></center>
            <div className="boxforcontact">
            <Form action="https://formspree.io/omoniyi21@gmail.com" method="POST" id="contactform">
            <FormGroup className="Form">
                <Label className="titlecontact2">Name:</Label>
                <Input className="contacttable" type="text" name="name" placeholder="name" />
            </FormGroup>
            <FormGroup>
                <Label className="titlecontact">Email:</Label>
                <Input className="contacttable" type="email" name="replyto" placeholder="email" />
            </FormGroup>
            <FormGroup>
                <Label className="titlecontact">Message:</Label>
                <Input className="contacttable" type="text" name="message" placeholder="message"/>
            </FormGroup>
            <center><Button className="Button" type="submit">Submit</Button></center>
                </Form>                         
                </div>
            </div>
        )
    }
}