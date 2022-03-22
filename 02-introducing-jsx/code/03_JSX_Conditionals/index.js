function getNumber() {
  return Math.floor(Math.random() * 10 ) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNumber();
    return (
      <div>
        <h1>Your number is {num}</h1>
        <p>{num === 7 ? 'You win' : 'Looooooser'}</p>
      </div>
    )
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));
