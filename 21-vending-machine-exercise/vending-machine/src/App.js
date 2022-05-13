import { Routes, Route } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Mars from './Mars';
import OrangeJuice from "./OrangeJuice";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' render={() => <VendingMachine />} />
      </Routes>
        <Chips />
        <Mars />
        <OrangeJuice />
    </div>
  );
}

export default App;
