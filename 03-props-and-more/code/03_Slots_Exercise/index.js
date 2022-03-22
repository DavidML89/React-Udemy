class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Slot Machines !</h1>
        <Machine machineNumber='1'
                 s1='🍒'
                 s2='🍒'
                 s3='🍒'
        />
        <Machine machineNumber='2'
                 s1='🍒'
                 s2='🍊'
                 s3='🍊'
        />
        <Machine machineNumber='3'
                 s1='🍊'
                 s2='🍊'
                 s3='🍊'
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
