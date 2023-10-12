import { Link } from 'react-router-dom';
import s from './MenuUser.module.css'
import { $d, $display } from '../../../functions';
import { getUserToken } from '../../../middlewares/helpers';

export const MenuUser = () => {
  const userToken: string | null = getUserToken();

  function logout() {
    localStorage.removeItem('userToken');
    window.location.reload();
    window.location.href = '/';
    return null;
  }

  document.addEventListener('mouseup', function (e) {
    const container: any = $d('#user-menu');
    if (!container?.contains(e.target)) {
      return (
        $d('#user-menu').style.display = 'none',
        $d('#user-menu-ul').style.display = 'none'
      )
    }
    return;
  });

  function hideUserMenu() {
    $display('#user-menu-ul');
    $display('#user-menu');
    return;
  }

  return (
    <div className={s.menuContainer} id='user-menu'>
      <ul className={s.ulMenu} id='user-menu-ul'>
        <Link to={`/profile/${userToken}`} className='nolink' onClick={hideUserMenu}><li>Profile</li></Link>
        <Link to="/my-courses" className='nolink' onClick={hideUserMenu}><li className='dashed-border-top'>My Courses</li></Link>
        <Link to="/account-settings" className='nolink' onClick={hideUserMenu}><li className='dashed-border-top'>Account Settings</li></Link>
        <li onClick={logout} className='dashed-border-top'>Logout</li>
      </ul>
    </div>
  )
}
