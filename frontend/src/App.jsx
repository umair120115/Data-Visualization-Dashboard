import { BrowserRouter,Routes,Route,Navigate } from "react-router-dom"
import Login from "./pages/Login"
import ProtectedRoute from './components/ProtectedRoute'
import Home from "./pages/Home";
import Register from "./pages/Register";
import 'bootstrap/dist/css/bootstrap.min.css';
import InputData from "./components/InputData";
import ResetPassword from "./components/ResetPassword";




function App() {
  function Logout(){
    localStorage.clear();
    return <Navigate  to='/login'/>
  }
  function RegisterAndLogout() {
    localStorage.clear()
    return <Register />
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/" element={<ProtectedRoute> <Home/></ProtectedRoute>}/>
      <Route path="/inputdata" element={<ProtectedRoute><InputData/> </ProtectedRoute>}/>
      <Route path="/resetpassword" element={<ProtectedRoute><ResetPassword/> </ProtectedRoute>}/>
      
      <Route path="/register" element={<Register/>}/>




    </Routes>
    
    
    
    </BrowserRouter>
  )
}

export default App
