
import './App.css';
import { HashRouter,  Routes, Route } from 'react-router-dom';

import Signup from './pages/Signup';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    
    <HashRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/resetPassword' element={<ResetPassword/>} />
      </Routes>
      
    </HashRouter>
      
      
    
  );
}

export default App;
