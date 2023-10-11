import { useSelector } from 'react-redux';
import s from './ProfileButton.module.css';

export const ProfileButton = () => {
  const { username, profilePic } = useSelector((state: any) => state.currentUser);

  return (
    <div className={s.container}>
      <p>Mr(s) <span>{ username }</span></p>
      <div className={s.buttonContainer}>
        <img src={profilePic ? profilePic : null} width="100%"/>
      </div>
    </div>
  )
}
