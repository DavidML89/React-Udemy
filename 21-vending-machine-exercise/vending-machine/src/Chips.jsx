import { Component } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";

class Chips extends Component {
  render() {
    return (
      <div>
        <Message>
          <p>You selected the chips</p>
          <p>Oily, but Yummi</p>
        </Message>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/1200px-Potato-Chips.jpg" alt="Potato-Chips.jpg"/>
        <p><Link to='/'>Vending Machine</ Link></p>
      </div>
    )
  }
}

export default Chips;
