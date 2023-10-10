import { useSelector } from 'react-redux';
import { ActionButton } from '../ActionButton/ActionButton';
import { Language } from '../Language/Language';
import { MenuButton } from '../MenuButton/MenuButton';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import s from './Navigator.module.css';
import { AuthButton } from '../AuthButton/AuthButton';

const Navigator = () => {
  const currentUser = useSelector((state: any) => state.currentUser);

  return (
    <nav className={s.navigator}>
      <section className={s.menuSection}>
        <MenuButton />
        <ActionButton />
        <Language />
      </section>
      <section>
        { currentUser ? <ProfileButton /> : <AuthButton /> }
      </section>
    </nav>
  )
}

export default Navigator; 