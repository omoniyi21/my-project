import React, {Component} from 'react';
import './Nav.css';
// import {Link} from "react-router-dom";
// import {LinkContainer} from "react-router-bootstrap";
import {Row, Col} from "react-bootstrap";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    
     } from 'reactstrap';





class Navigation extends Component {
    constructor(props) {
        super(props);
        
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }


    render() {
        return (
        
    
    <div className="Navigation"> 
        <Row> 
            <Col sm={12}>
        
        <Nav className = "Links" >
          <NavItem><NavLink href="/#/Home">HOME</NavLink></NavItem>
          <NavItem><NavLink href="/#/About">ABOUT</NavLink></NavItem>
          
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav >
            <NavItem> WORK </NavItem>
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem><NavLink href="/#/Portfolio">ALL WORK</NavLink></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><NavLink href="/#/graphics">GRAPHICS</NavLink></DropdownItem>
              <DropdownItem><NavLink href="/#/WebDev">WEB DESIGN</NavLink></DropdownItem>
            </DropdownMenu>
            </Dropdown>
          <NavItem ><NavLink href="/#/Services">SERVICES</NavLink></NavItem>
          <NavItem ><NavLink href="/#/Contact">CONTACT</NavLink></NavItem>
        </Nav>
      
            </Col>
        </Row>
     </div>
    
    
        );
    }
}

export default Navigation;


// <Navbar collapseOnSelect staticTop>
// <Navbar.Header>
//     <Navbar.Brand>
//         <Na eventKey={1} to="/Home">Omoniyi Alimi</Na eventKey={1}>
//     </Navbar.Brand>
//         <Navbar.Toggle/>
// </Navbar.Header>
//             <Navbar.Collapse>
//                 <Nav pullRight>
//                     <NavItem href ="/About">About</NavItem>
//                     <NavItem href ="/Portfolio">Design</NavItem>
//                     <NavItem href ="/Services">Services</NavItem>
//                     <NavItem href ="/Contact">Contact</NavItem>
//                 </Nav>
//             </Navbar.Collapse>
// </Navbar>

