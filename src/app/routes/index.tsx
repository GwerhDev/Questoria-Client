import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
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
import { RootState } from '../../middlewares/redux/reducer';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [currentUser, navigate]);

  return currentUser ? children : null;
};

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
              <Route path='/profile/:id' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path='/adventures' element={<ProtectedRoute><Adventures /></ProtectedRoute>} />
              <Route path='/adventures/:id' element={<ProtectedRoute><AdventureDetails /></ProtectedRoute>} />
              <Route path='/account-settings' element={<ProtectedRoute><AccountSettings /></ProtectedRoute>} />
              <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path='/dashboard/create' element={<ProtectedRoute><CreateAdventureQuest /></ProtectedRoute>} />
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
