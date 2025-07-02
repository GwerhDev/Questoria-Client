import { Route, Routes, useNavigate } from 'react-router-dom';
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
import { getUserData } from '../../middlewares/redux/actions/account';
import { useAppDispatch } from '../../middlewares/redux/hooks';
import { HUD } from '../layouts/HUD';

function RoutesApp() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserData());
  }, [navigate, dispatch]);

  return (
    <>
      <HUD>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/adventures' element={<Adventures />} />
          <Route path='/adventures/:id' element={<AdventureDetails />} />
          <Route path='/account-settings' element={<AccountSettings />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/dashboard/create' element={<CreateAdventureQuest />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </HUD>
    </>
  )
}

export default RoutesApp;
