
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import Admin from './Components/Admin';
import Register from './Components/Register';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {


  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/admin/login" element={<Login/>}/>
          <Route path="/admin/register" element={<Register/>}/>
          <Route path="/admin/login/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
