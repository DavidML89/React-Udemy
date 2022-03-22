function getNumber() {
  return Math.floor(Math.random() * 10 ) + 1;
}

class NumPicker extends React.Component {
  render() {
    return (
      <div>
        <h1>Your number is {getNumber()}</h1>
      </div>
    )
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
