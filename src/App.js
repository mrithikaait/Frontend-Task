import logo from './logo.svg';
import './App.css';
import Login from "./components/Login";
import ForgotPassword from './components/Forgetpassword';
import Dashboard from "./pages/Dashboard";
import Dashboard1 from './pages/Dashboard1';
function App() {
  return (
    <div >
      <Login />
       <ForgotPassword />
       <Dashboard/>
       <Dashboard1/>
     
    </div>
  );
}

export default App;



