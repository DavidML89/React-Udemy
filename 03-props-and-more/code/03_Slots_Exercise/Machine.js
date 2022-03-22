class Machine extends React.Component {
  render() {
    const s1 = this.props.s1;
    const s2 = this.props.s2;
    const s3 = this.props.s3;
    const winner = ( s1 === s2 ) && ( s2 === s3 );

    return (
      <div>
        <h2>Machine {this.props.machineNumber}</h2>
        <p>{s1}{s2}{s3}</p>
        <p>{winner ? 'Yeah' : 'Booohhhhh'}</p>
      </div>
    )
  }
}
