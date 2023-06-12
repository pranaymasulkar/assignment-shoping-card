import logo from './logo.svg';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Home from './views/Home';
import Cart from './views/Cart';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
    </>
  );
}

export default App;
