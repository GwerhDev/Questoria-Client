import { useSelector } from 'react-redux';
import s from './ProfileButton.module.css';
import { $display } from '../../../functions';

export const ProfileButton = () => {
  const { username, profilePic } = useSelector((state: any) => state.currentUser);

  function showMenu() {
    $display('#user-menu');
    $display('#user-menu-ul');
    return;
  }

  return (
    <div className={s.container} onClick={showMenu}>
      <p>Mr(s) <span>{ username }</span></p>
      <div className={s.buttonContainer}>
        <img src={profilePic ? profilePic : null} width="100%"/>
      </div>
    </div>
  )
}
