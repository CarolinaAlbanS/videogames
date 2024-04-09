import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Games from "./pages/games/Games";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Logout from "./pages/logout/Logout";
import Footer from "./components/footer/Footer";
import Admin from "./pages/admin/Admin";
import Create from "./pages/create/Create";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/create" element={<Create />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
