import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import Register from "./pages/register/Register";
import DetaGames from "./pages/detaGames/DetaGames";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/detaGames" element={<DetaGames />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
