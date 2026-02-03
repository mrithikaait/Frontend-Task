
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import Forgetpassword from './components/Forgetpassword';
import Dashboard from "./pages/Dashboard";
import Dashboard1 from './pages/Dashboard1';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserManagement from './pages/UserManagement';
import Layout from './components/Layout';
import PrivateRoute from "./routes/PrivateRoute";
import ResetPassword from './pages/ResetPassword';


function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
         <Route path="/dashboard" element={<Dashboard/>} />

         
          <Route path="/forget" element={<Forgetpassword/>} />
          
          <Route path="/booking" element={<Dashboard1/>} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<UserManagement />} />
           
        <Route path="/reset-password/:token" element={<ResetPassword />} />

          <Route element={<Layout />}>
          <Route path="/dashboard" element={<h2>Dashboard</h2>} />
          <Route path="/user" element={<h2>User Management</h2>} />
          <Route path="/club" element={<h2>Club Management</h2>} />
          <Route path="/class" element={<h2>Class Management</h2>} />
          <Route path="/booking" element={<h2>Booking</h2>} />
        </Route>

        
        

      </Routes>
     
   
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
