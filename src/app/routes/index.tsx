import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import Adventures from '../pages/Adventures';
import AccountSettings from '../pages/AccountSettings';
import Dashboard from '../pages/Dashboard';
import CreateAdventureQuest from '../pages/CreateAdventureQuest';
import { LateralCanvas } from '../components/Canvas/LateralCanvas';
import { Footer } from '../components/Utils/Footer';
import { Navigator } from '../components/Navigator/Navigator';
import { CircularButtonMenu } from '../components/Buttons/CircularButtonMenu/CircularButtonMenu';
import { ModalCanvas } from '../components/Canvas/ModalCanvas';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { useSelector } from 'react-redux';

function RoutesApp() {
  const currentUser = useSelector((state: any) => state.currentUser);
  const isStudent = currentUser?.role === "student";

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
              <Route path='/account-settings' element={<AccountSettings />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/dashboard/create' element={<CreateAdventureQuest />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </main>
      {isStudent && <CircularButtonMenu />}
      <ModalCanvas />
      {isStudent && <ExperienceBar />}
    </div>
  )
}

export default RoutesApp;
