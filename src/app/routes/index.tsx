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
import { getUserToken } from '../../middlewares/helpers';
import { getUserData } from '../../middlewares/redux/actions/account';
import { useAppDispatch } from '../../middlewares/redux/hooks';

function RoutesApp() {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const hideCircularButton = location.pathname.startsWith('/profile') || location.pathname.startsWith('/dashboard');

  useEffect(() => {
    const userToken = getUserToken();
    if (!userToken) return navigate('/login');

    dispatch(getUserData());

  }, [currentUser, navigate, dispatch]);

  return (
    <div className="viewport">
      {
        currentUser &&
        <>
          <div className='lateral-canvas-container'>
            <Navigator />
          </div>
          <main className='App'>
            <div className='main-container'>
              <LateralCanvas />
              <div className='routes-container'>
                <Routes>
                  <Route path='/' element={<Home />} />
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
            {!hideCircularButton && <CircularButtonMenu />}
            <ModalCanvas />
            <ExperienceBar />
          </main>
        </>
      }
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  )
}

export default RoutesApp;
