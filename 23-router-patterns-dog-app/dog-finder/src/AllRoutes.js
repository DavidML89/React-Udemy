import { Component } from "react";
import { Routes, Route, Redirect } from "react-router-dom";
import DogsList from './DogsList';
import DogDetails from './DogDetails';


class AllRoutes extends Component {
  render() {
    // const getDog = props => {
    //   let name = props.match.params.name;
    //   let currentDog = this.props.dogs.find(
    //     dog => dog.name.toLowerCase() === name.toLowerCase()
    //     );
    //     console.log(currentDog)
    //   return <DogDetails {...props} dog={currentDog} />;
    // }
    return (
      <Routes>
        <Route path="/dogs" element={<DogsList dogs={this.props.dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails />} />
      </Routes>
  )}
}

export default AllRoutes;
