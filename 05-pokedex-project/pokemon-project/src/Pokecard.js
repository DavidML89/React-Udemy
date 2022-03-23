import React, { Component } from 'react';

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let { id, name, type, exp } = this.props
    let imgSrc = `${POKE_API}${padToThree(id)}.png`;

    return (
      <div className='Pokecard'>
        <h1 className='Pokecard-title'>{name}</h1>
        <div className="Pokecard-img">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="Pokecard-type">Type: {type}</div>
        <div className="Pokecard-exp">Exp: {exp}</div>
      </div>
    )
  }
}

export default Pokecard
