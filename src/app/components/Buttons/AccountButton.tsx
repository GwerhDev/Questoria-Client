import s from './AccountButton.module.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const AccountButton = () => {
  const currentUser = useSelector((state: any) => state.currentUser);
  const { id, username, profilePic } = currentUser || {};

  const navigate = useNavigate();

  function handleNavigate() {
    navigate(`/profile/${id}`);
  }

  return (
    <button title={username} className={s.container} onClick={handleNavigate}>
      {
        profilePic
          ? <img src={profilePic} width="100%" />
          : username?.charAt(0).toUpperCase()
      }
    </button>
  )
}
