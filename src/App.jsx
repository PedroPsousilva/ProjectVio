import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListEventos from "./pages/listEventos";
import ListUsers from "./pages/listUsers";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import ProtectedRoute from "./components/ProtectedRoutes";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/users" element={
            <ProtectedRoute>
              <ListUsers/>  
            </ProtectedRoute>
          } />
          <Route path="/evento" element={
            <ProtectedRoute>
              <ListEventos/>  
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
