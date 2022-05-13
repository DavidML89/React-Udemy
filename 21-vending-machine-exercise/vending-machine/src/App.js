import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import VendingMachine from './VendingMachine';
import Chips from './Chips';
import Mars from './Mars';
import OrangeJuice from "./OrangeJuice";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Vending Machine</ Link>
        <Link to='/chips'>Chips</ Link>
        <Link to='/mars'>Mars</ Link>
        <Link to='/orangejuice'>Orange juice</ Link>
      </nav>
      <Routes>
        <Route exact path='/' element={<VendingMachine />} />
        <Route exact path='/chips' element={<Chips />} />
        <Route exact path='/mars' element={<Mars />} />
        <Route exact path='/orangejuice' element={<OrangeJuice />} />
      </Routes>
    </div>
  );
}

export default App;
