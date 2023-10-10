import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navigator from '../components/Navigator/Navigator';

function RoutesApp() {
  return (
    <main className='App'>
      <Navigator/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </main>
  )
}

export default RoutesApp;
