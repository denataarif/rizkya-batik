import Navbar from "./Component/molecules/Navbar/Navbar";
import Catagories from "./Pages/Catagories/Catagories";
import Home from "./Pages/Home/Home";
import Newdrop from "./Pages/NewDrop/Newdrop"
import Shopall from "./Pages/Shopall/Shopall";
import Highlight from "./Pages/Highlight/Highlight";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catagories" element={<Catagories/>}/>
            <Route path="/Newdrop" element={<Newdrop/>}/>
            <Route path="/Shopall" element={<Shopall/>}/>
            <Route path="/Highlight" element={<Highlight/>}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
