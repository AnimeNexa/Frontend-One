import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ConfirmEmail from './Pages/ConfirmEmail';
import ConnectWallet from './Pages/ConnectWallet';
import ScanWallet from './Pages/ScanWallet';
import AddProfilePicture from './Pages/AddProfilePicture';
import MessagePage from './Pages/MessagePage';
import UserMessage from './Pages/UserMessage';
import ChatSection from './Pages/ChatSection';
import ChooseColor from './Pages/ChooseColor';
import SelectColor from './Pages/SelectColor';
import ProfilePage from './Pages/ProfilePage';
import TrandingStory from './Pages/TrandingStory';
import NotificationPage from './Pages/Notification';
import TrendingCom from './Pages/TrendingCom';
import Menu from './Pages/Menu';
import Footer from './Component/Footer';

const App = () => {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/confirmemail' element={ <ConfirmEmail />} />
      <Route path='/connectwallet' element={<ConnectWallet />} />
      <Route path='/scanwallet' element={<ScanWallet />} />
      <Route path='/addpicture' element={<AddProfilePicture />} />
      <Route path="/messagepage" element={<MessagePage />} />
      <Route path="/usermessage" element={<UserMessage/>} />
      <Route path="/chatsection" element={<ChatSection />} />
      <Route path="/choosecolor" element={<ChooseColor />} />
      <Route path="/selectcolor" element={<SelectColor />} />
      <Route path="/profilepage" element={<ProfilePage />} />
      <Route path='/trandingstory' element={<TrandingStory />} />
      <Route path='/notificationpage' element={<NotificationPage />} />
      <Route path='trendingcomm' element={<TrendingCom />} />
      <Route path='/menu' element={<Menu />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App
