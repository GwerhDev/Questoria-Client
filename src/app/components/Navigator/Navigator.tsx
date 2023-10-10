import { ActionButton } from '../ActionButton/ActionButton';
import { Language } from '../Language/Language';
import { MenuButton } from '../MenuButton/MenuButton';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import s from './Navigator.module.css';

const Navigator = () => {
  return (
    <nav className={s.navigator}>
      <section className={s.menuSection}>
        <MenuButton />
        <ActionButton />
        <Language />
      </section>
      <ProfileButton />
    </nav>
  )
}

export default Navigator;