import s from './ProfileHeader.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../../middlewares/redux/reducer';

export const ProfileHeader = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser);

  return (
    <div className={s.container}>
      <div className={s.headerImage}>
        <div className={s.userdata}>
          <div className={s.imageContainer}>
            <img src={currentUser?.profilePic || undefined} alt="" width="100%" />
          </div>
          <h2>{currentUser?.username}</h2>
          <p>{currentUser?.role}</p>
        </div>
      </div>
    </div>
  )
}
