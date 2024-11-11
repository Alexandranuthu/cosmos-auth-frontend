
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resetPassword' element={<ResetPassword/>} />
      </Routes>
      
    </BrowserRouter>
      
      
    
  );
}

export default App;
