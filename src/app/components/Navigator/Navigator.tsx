import s from './Navigator.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '../Buttons/IconButton';
import { MenuButton } from '../Buttons/MenuButton';
import { AuthButton } from '../Buttons/AuthButton';
import { AccountButton } from '../Buttons/AccountButton';
import { getUserData } from '../../../middlewares/redux/actions/account';
import { faBagShopping, faHome, faIdBadge, faScroll, faShield, faShop, faShoppingBag, faSuitcase } from '@fortawesome/free-solid-svg-icons';

export const Navigator = () => {
  const dispatch: any = useDispatch();
  const currentUser: any = useSelector((state: any) => state.currentUser);

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <nav className={s.navigator}>
        <section className={s.accountSection}>
          {currentUser ? <AccountButton /> : <AuthButton />}
        </section>
        <section className={s.menuSection}>
          <IconButton icon={faHome} to={"/"} title="Inicio" />
          <IconButton icon={faScroll} to={"/adventures"} title="Aventuras" />
          <IconButton icon={faShield} to={"/clan"} title="Clan" />
          <IconButton icon={faBagShopping} to={"/shop"} title="Tienda" />
        </section>
        <section className={s.appSection}>
          <MenuButton />
        </section>
      </nav>
    </div>
  )
}