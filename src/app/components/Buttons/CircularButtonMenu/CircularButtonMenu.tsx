import s from './CircularButtonMenu.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHand, faSuitcase, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setUserAction, setModalOpen } from '../../../../middlewares/redux/actions/ui';

export const CircularButtonMenu = () => {
  const dispatch = useDispatch();

  const handleSubButtonClick = (actionType: string) => {
    dispatch(setUserAction(actionType));
    dispatch(setModalOpen(true));
  };

  return (
    <div className={s.container}>
      <button className={s.mainButton} title="Interactuar" onClick={() => dispatch(setUserAction("interact"))}>
        <FontAwesomeIcon icon={faHand} size="2x" />
      </button>
      <div className={s.subButtons}>
        <button className={s.subButton} title="Abrir libro" onClick={() => handleSubButtonClick("book")}>
          <FontAwesomeIcon icon={faBook} />
        </button>

        <button className={s.subButton} title="Ver misiones" onClick={() => handleSubButtonClick("quests")}>
          <FontAwesomeIcon icon={faListCheck} />
        </button>

        <button className={s.subButton} title="Abrir inventario" onClick={() => handleSubButtonClick("inventory")}>
          <FontAwesomeIcon icon={faSuitcase} />
        </button>
      </div>
    </div>
  );
};
