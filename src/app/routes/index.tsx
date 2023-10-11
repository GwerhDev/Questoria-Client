import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navigator from '../components/Navigator/Navigator';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Auth from '../pages/Auth';

function RoutesApp() {
  return (
    <main className='App'>
      <Navigator/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/auth' element={<Auth/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </main>
  )
}

export default RoutesApp;
