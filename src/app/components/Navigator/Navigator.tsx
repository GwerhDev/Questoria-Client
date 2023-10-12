import { useDispatch, useSelector } from 'react-redux';
import { ActionButton } from '../ActionButton/ActionButton';
import { Language } from '../Language/Language';
import { MenuButton } from '../MenuButton/MenuButton';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import s from './Navigator.module.css';
import { AuthButton } from '../AuthButton/AuthButton';
import { MenuUser } from '../MenuUser/MenuUser';
import { useEffect } from 'react';
import { getUserData } from '../../../middlewares/redux/actions/account';

export const Navigator = () => {
  const dispatch: any = useDispatch();
  const currentUser: any = useSelector((state: any) => state.currentUser);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <nav className={s.navigator}>
        <section className={s.menuSection}>
          <MenuButton />
          <ActionButton />
          <Language />
        </section>
        <section>
          {currentUser ? <ProfileButton /> : <AuthButton />}
        </section>
      </nav>
      <MenuUser />
    </div>
  )
}