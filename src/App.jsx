import { useState, useEffect } from 'react'
import './App.css'
import Loading from './Features/Loading'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ConfirmEmail from './Pages/ConfirmEmail';
import ConnectWallet from './Pages/ConnectWallet';
import ScanWallet from './Pages/ScanWallet';
import AddProfile from './Pages/AddProfile';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/confirmemail' element={ <ConfirmEmail />} />
          <Route path='/connectwallet' element={<ConnectWallet />} />
          <Route path='/scanwallet' element={<ScanWallet />} />
          <Route path='/addprofile' element={<AddProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
