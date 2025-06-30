import { ProfileHeader } from "../components/ProfileHeader/ProfileHeader";
import { useAppDispatch } from '../../middlewares/redux/hooks';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../middlewares/redux/actions/auth';

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  return (
    <div>
      <ProfileHeader />
      <button onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
}

export default Profile;