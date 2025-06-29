import s from './MenuButton.module.css';
import { $display } from '../../../functions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { setMenuType } from '../../../middlewares/redux/actions/ui';

export const MenuButton = () => {
  const dispatch = useDispatch();

  function showMenu() {
    $display("#lateral-canvas");
    $display('#menu');
    dispatch(setMenuType("info"));
  }

  return (
    <button className={s.container} onClick={showMenu}>
      <FontAwesomeIcon size='lg' icon={faBars} />
    </button>
  )
}
