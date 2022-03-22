class Machine extends React.Component {
  render() {
    const {s1, s2, s3} = this.props;
    const winner = ( s1 === s2 ) && ( s2 === s3 );
    const colors = {fontSize: '50px', backgroundColor: 'blue'};

    return (
      <div className='Machine'>
        <h2>Machine {this.props.machineNumber}</h2>
        <p style={colors}>{s1}{s2}{s3}</p>
        <p className={ winner ? 'win' : 'lose' }>{winner ? 'Yeah' : 'Booohhhhh'}</p>
      </div>
    )
  }
}
