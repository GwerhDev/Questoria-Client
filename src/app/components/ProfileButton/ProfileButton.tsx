import { useSelector } from 'react-redux';
import s from './ProfileButton.module.css';

export const ProfileButton = () => {
  const { username, profilePic } = useSelector((state: any) => state.currentUser);

  function showMenu() {
    if (document.querySelector('#user-menu').style.display === "block") {
      document.querySelector('#user-menu').style.display="none";
      return;
    }
    return document.querySelector('#user-menu').style.display="block";
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
