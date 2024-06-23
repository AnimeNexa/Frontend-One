import { useState, useEffect } from 'react'
import './App.css'
import Loading from './Features/Loading'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ConfirmEmail from './Pages/ConfirmEmail';
import ConnectWallet from './Pages/ConnectWallet';
import ScanWallet from './Pages/ScanWallet';
import AddProfile from './Pages/AddProfile';
import MessagePage from './Pages/MessagePage';
import UserMessage from './Pages/UserMessage';
import ChartSection from "./Pages/ChartSection";
import ChooseColor from "./Pages/ChooseColor";
import SelectColor from "./Pages/SelectColor";
import ProfilePage from "./Pages/ProfilePage";
import TrandingStory from "./Pages/TrandingStory";
import NotificationPage from './Pages/Notification';
import TrendingCom from './Pages/TrendingCom';
import Menu from './Pages/Menu';


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
          <Route path="/messagepage" element={<MessagePage />} />
          <Route path="/usermessage" element={<UserMessage/>} />
          <Route path="/chartsection" element={<ChartSection />} />
          <Route path="/choosecolor" element={<ChooseColor />} />
          <Route path="/selectcolor" element={<SelectColor />} />
          <Route path="/profilepage" element={<ProfilePage />} />
          <Route path='/trandingstory' element={<TrandingStory />} />
          <Route path='/notificationpage' element={<NotificationPage />} />
          <Route path='trendingcomm' element={<TrendingCom />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
