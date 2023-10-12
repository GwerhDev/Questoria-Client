import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navigator from '../components/Navigator/Navigator';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Auth from '../pages/Auth';
import Profile from '../pages/Profile';
import MyCourses from '../pages/MyCourses';
import AccountSettings from '../pages/AccountSettings';

function RoutesApp() {
  return (
    <main className='App'>
      <Navigator/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/profile/:id' element={<Profile/>}/>
        <Route path='/my-courses' element={<MyCourses/>}/>
        <Route path='/account-settings' element={<AccountSettings/>}/>
      </Routes>
    </main>
  )
}

export default RoutesApp;
