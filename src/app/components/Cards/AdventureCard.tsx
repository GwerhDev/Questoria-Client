import s from './AdventureCard.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';

export const AdventureCard = (props: any) => {
  const { adventure } = props || {};
  const navigate = useNavigate();

  const handleAdventure = () => {
    navigate(`/adventures/${adventure._id}`);
  }

  return (
    <article onClick={handleAdventure} className={s.container}>
      <span className={s.title}>
        <FontAwesomeIcon size="2x" icon={faLandmark} />
        <h2>{adventure.name}</h2>
      </span>
      <p>{adventure.description}</p>
    </article>
  )
}