import { Component } from "react";
import { Link } from "react-router-dom";

class Mars extends Component {
  render() {
    return (
      <div>
        <p>You selected the Mars</p>
        <p>Full sugaaaar</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/dd/MBar_700.jpg" alt="Mars"/>
        <p><Link to='/'>Vending Machine</ Link></p>
      </div>
    )
  }
}

export default Mars;
