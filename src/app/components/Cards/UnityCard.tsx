import { useNavigate } from 'react-router-dom';
import s from './UnityCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export const UnityCard = (props) => {
  const { unity } = props || {};
  const navigate = useNavigate();

  const handleCourse = () => {
    navigate(`/course/${unity.id}`);
  }

  return (
    <article onClick={handleCourse} className={s.container}>
      <span className={s.title}>
        <FontAwesomeIcon size="2x" icon={faBook} />
        <h2>{unity.name}</h2>
      </span>
      <p>{unity.description}</p>
    </article>
  )
}
