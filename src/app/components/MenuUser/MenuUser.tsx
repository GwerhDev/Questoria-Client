import { Link } from 'react-router-dom';
import s from './MenuUser.module.css'
import { $display } from '../../../functions';

export const MenuUser = () => {
  function logout() {
    localStorage.removeItem('userToken');
    window.location.reload();
    window.location.href = '/';
    return null;
  }

  function hideUserMenu() {
    $display('#user-menu-ul');
    $display('#user-menu');
    return;
  }

  return (
    <div className={s.menuContainer} id='user-menu'>
      <ul className={s.ulMenu} id='user-menu-ul'>
        <Link to="/profile" className='nolink' onClick={hideUserMenu}><li>Profile</li></Link>
        <Link to="/my-courses" className='nolink' onClick={hideUserMenu}><li>My courses</li></Link>
        <Link to="/account-settings" className='nolink' onClick={hideUserMenu}><li>Account Settings</li></Link>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  )
}
