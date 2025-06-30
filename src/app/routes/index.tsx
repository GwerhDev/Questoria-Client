import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import Adventures from '../pages/Adventures';
import AccountSettings from '../pages/AccountSettings';
import Dashboard from '../pages/Dashboard';
import CreateAdventureQuest from '../pages/CreateAdventureQuest';
import AdventureDetails from '../pages/AdventureDetails';
import { LateralCanvas } from '../components/Canvas/LateralCanvas';
import { Footer } from '../components/Utils/Footer';
import { Navigator } from '../components/Navigator/Navigator';
import { CircularButtonMenu } from '../components/Buttons/CircularButtonMenu/CircularButtonMenu';
import { ModalCanvas } from '../components/Canvas/ModalCanvas';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';

function RoutesApp() {
  const location = useLocation();
  const hideCircularButton = location.pathname.startsWith('/profile') || location.pathname.startsWith('/dashboard');

  return (
    <div className="viewport">
      <div className='lateral-canvas-container'>
        <Navigator />
      </div>
      <main className='App'>
        <div className='main-container'>
          <LateralCanvas />
          <div className='routes-container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile/:id' element={<Profile />} />
              <Route path='/adventures' element={<Adventures />} />
              <Route path='/adventures/:id' element={<AdventureDetails />} />
              <Route path='/account-settings' element={<AccountSettings />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/dashboard/create' element={<CreateAdventureQuest />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </main>
      {!hideCircularButton && <CircularButtonMenu />}
      <ModalCanvas />
      <ExperienceBar />
    </div>
  )
}

export default RoutesApp;
