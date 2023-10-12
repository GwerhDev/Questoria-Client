import s from './MenuButton.module.css';
import { $display } from '../../../functions';
import burgerMenuIcon from '../../../assets/icons/burger-menu.svg';

export const MenuButton = () => {
  function showMenu() {
    $display("#lateral-menu");
    $display('#menu');
  }

  return (
    <button className={s.menuButton} onClick={showMenu}>
      <img src={burgerMenuIcon} alt="" width="100%"/>
    </button>
  )
}
