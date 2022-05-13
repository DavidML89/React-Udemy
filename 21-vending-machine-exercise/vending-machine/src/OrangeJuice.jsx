import { Link } from "react-router-dom";
import { Component } from "react";
import Message from "./Message";

class OrangeJuice extends Component {
  render() {
    return (
      <div>
        <Message>
          <p>You selected the Orange juice</p>
          <p>This is healthy</p>
        </Message>
        <img src="https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Juice-1-of-1.jpeg" alt="Orange juice"/>
        <p><Link to='/'>Vending Machine</ Link></p>
      </div>
    )
  }
}

export default OrangeJuice;
