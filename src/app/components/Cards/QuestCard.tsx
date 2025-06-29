import s from './QuestCard.module.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

export const QuestCard = (props: any) => {
  const { quest } = props || {};
  const navigate = useNavigate();

  const handleQuest = () => {
    navigate(`/quest/${quest._id}`);
  }

  return (
    <article onClick={handleQuest} className={s.container}>
      <span className={s.title}>
        <FontAwesomeIcon size="2x" icon={faBook} />
        <h2>{quest.title}</h2>
      </span>
      <p>{quest.description}</p>
    </article>
  )
}
