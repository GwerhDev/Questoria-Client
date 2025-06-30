import { ProfileHeader } from "../components/ProfileHeader/ProfileHeader";
import { useAppDispatch } from '../../middlewares/redux/hooks';
import { logout } from '../../middlewares/redux/actions/auth';
import { IconButton } from "../components/Buttons/IconButton";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <ProfileHeader />
      <IconButton icon={faRightFromBracket} onClick={handleLogout}>Cerrar Sesión</IconButton>
    </div>
  )
}

export default Profile;