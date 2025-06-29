import s from './AuthButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const AuthButton = () => {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/login");
  }

  return (
    <div className={s.container} onClick={handleNavigate}>
      <FontAwesomeIcon size='lg' icon={faUser} />
    </div>
  )
}
