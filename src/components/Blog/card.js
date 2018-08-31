import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle } from 'reactstrap';
import "./card.css";
import {Row, Col} from "react-bootstrap"

class Cards extends Component {
      constructor(props){
      super(props);
      }

      render() {
        return (
          <div className = "card-grid">
          <Row>
            <div className="card-body">

            </div>
            <div className="card-body">

            </div>
            <div className="card-body">

            </div>
          </Row>
          </div>
        )
   }     
}

export default Cards
    
   
  

// class Cards extends Component{
//   render(){
//     return(
//       <div className="Cards-containter">
//         <div>

//         </div>
//       </div>
//     )
//   }
// }





