import { Link } from "react-router-dom";
import { Component } from "react";

class OrangeJuice extends Component {
  render() {
    return (
      <div>
        <p>You selected the Orange juice</p>
        <p>This is healthy</p>
        <img src="https://www.alphafoodie.com/wp-content/uploads/2020/11/Orange-Juice-1-of-1.jpeg" alt="Orange juice"/>
        <p><Link to='/'>Vending Machine</ Link></p>
      </div>
    )
  }
}

export default OrangeJuice;
