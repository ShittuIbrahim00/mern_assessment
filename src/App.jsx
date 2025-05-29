import {  Route, Routes } from "react-router-dom";
// import Floatingshape from "./components/Floatingshape";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
	<div className="bg-[#222222]">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    <Toaster />
  </div>
  );
}

export default App;