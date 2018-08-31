import React, {Component} from "react";
import './Contact.css';
import {Form, FormGroup, Label , FormText, Col, Input } from "reactstrap";
import Navigation from "../Nav/Nav";
import Footers from "../Nav/Footer";

export default class About extends Component {
    render(){
        return (
            <div className="Contact">
            <Navigation/>
            <div className="Footer"><Footers/></div>
            <Form>
                <FormGroup>
                    <Label for="subscriberEmail" sm={2}> Email</Label>
                    <Col sm={5}>
                        <Input type="email" name="email" id="subscriberEmail"/>
                    </Col>
                </FormGroup>
            </Form>
            </div>
        )
    }
}