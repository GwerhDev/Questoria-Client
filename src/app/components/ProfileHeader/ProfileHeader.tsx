import s from './ProfileHeader.module.css';
import { useAppDispatch, useAppSelector } from '../../../middlewares/redux/hooks';
import { IconButton } from '../Buttons/IconButton';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { logout } from '../../../middlewares/redux/actions/auth';
import { useNavigate } from 'react-router-dom';

export const ProfileHeader = () => {
  const currentUser = useAppSelector((state) => state.currentUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className={s.container}>
      <div className={s.headerImage}>
        <div className={s.userdata}>
          <div className={s.imageContainer}>
            <img src={currentUser?.profilePic || undefined} alt="" width="100%" />
          </div>
          <h2>{currentUser?.username}</h2>
          <p>{currentUser?.role}</p>
          <IconButton solid icon={faRightFromBracket} onClick={handleLogout}>Cerrar Sesión</IconButton>
        </div>
      </div>
    </div>
  )
}
