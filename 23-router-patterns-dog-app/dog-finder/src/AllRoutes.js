import { Component } from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import DogsList from './DogsList';
import DogDetails from './DogDetails';


class AllRoutes extends Component {
  render() {
    let dog = props => {
      let name = props.value.matches.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />
    }
    return (
      <Routes>
        <Route path="/dogs" element={<DogsList dogs={this.props.dogs} />} />
        <Route path="/dogs/:name" exact element={dog} />
      </Routes>
  )}
}

export default AllRoutes;
