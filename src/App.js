import "./App.css";
import logo from "./logo.png";
import {Home} from "./Home";
import { Route, Routes } from "react-router-dom";
import { MockmanComponent } from "./MockComp";
function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mockman" element={<MockmanComponent/>}/>
      </Routes>
    </div>
  );
}

export default App;
