import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import DogsList from './DogsList';


class AllRoutes extends Component {
  render() {
    return (
    <Routes>
      <Route path="/dogs" element={<DogsList />} />
    </Routes>
  )}
}

export default AllRoutes;
