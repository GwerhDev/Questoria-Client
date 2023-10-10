import s from './MenuButton.module.css';
import burgerMenuIcon from '../../../assets/icons/burger-menu.svg';

export const MenuButton = () => {
  return (
    <button className={s.menuButton}>
      <img src={burgerMenuIcon} alt="" width="100%"/>
    </button>
  )
}
