import s from './ProfileHeader.module.css';
import { useSelector } from 'react-redux';

export const ProfileHeader = () => {
  const currentUser = useSelector((state: any) => state.currentUser);

  return (
    <div className={s.container}>
      <div className={s.headerImage}>
        <div className={s.userdata}>
          <div className={s.imageContainer}>
            <img src={ currentUser?.profilePic ? currentUser.profilePic : null } alt="" width="100%" />
          </div>
          <h2>Mr(s) { currentUser?.username }</h2>
        </div>
      </div>
    </div>
  )
}
