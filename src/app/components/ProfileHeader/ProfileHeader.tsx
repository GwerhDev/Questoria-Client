import s from './ProfileHeader.module.css';
import { useAppSelector } from '../../../middlewares/redux/hooks';

export const ProfileHeader = () => {
  const currentUser = useAppSelector((state) => state.currentUser);

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
