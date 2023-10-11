import s from './MenuUser.module.css'

export const MenuUser = () => {
  function logout() {
    localStorage.removeItem('userToken');
    window.location.reload();
    window.location.href = '/';
    return null;
  }

  return (
    <div className={s.menuContainer} id='user-menu'>
      <ul className={s.ulMenu}>
        <li>Profile</li>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  )
}
