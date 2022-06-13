import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import DogsList from './DogsList';
import DogDetails from './DogDetails';


class AllRoutes extends Component {
  render() {
    const getDog = props => {
      let name = props.match.params.name;
      let currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      );
      return <DogDetails {...props} dog={currentDog} />;
    };
    return (
      <Switch>
        <Route exact path="/dogs" element={<DogsList dogs={this.props.dogs} />} />
        <Route exact path="/dogs/:name" element={getDog(this.props.dogs)} />
      </Switch>
  )}
}

export default AllRoutes;
