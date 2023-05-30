import { 
  BrowserRouter,
  Routes,
  Route,
 } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Cancha from "./pages/cancha/Cancha";
import { MainLogin } from "./pages/LogIn/LogIn";
import { Pasa } from "./components/pasa/Pasa";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/canchas" element={<List/>}/>
      <Route path="/canchas/:id" element={<Cancha/>}/>
      <Route path="/login" element={<MainLogin/>}/>
      <Route path="/PasarelaDePagos" element={<Pasa/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
