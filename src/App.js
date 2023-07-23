import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";

import "./styles/app.css";



function App() {
  return (
    <>
      
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />}  />
            <Route path="/login" element={<Login />} />
        </Routes>
      {/* <Footer /> */}
    </Router>
    </>  
  );
}

export default App;
