import s from './Navigator.module.css';
import { useSelector } from 'react-redux';
import { IconButton } from '../Buttons/IconButton';
import { MenuButton } from '../Buttons/MenuButton';
import { AccountButton } from '../Buttons/AccountButton';
import { faBagShopping, faHome, faScroll, faShield, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { LateralCanvas } from '../Canvas/LateralCanvas';

export const Navigator = () => {
  const currentUser: any = useSelector((state: any) => state.currentUser);

  return (
    <div className={s.container}>
      <nav className={s.navigator}>
        <section className={s.menuSection}>
          <IconButton icon={faHome} to={"/"} title="Inicio" />
          <IconButton icon={faScroll} to={"/adventures"} title="Aventuras" />
          <IconButton icon={faShield} to={"/clan"} title="Clan" />
          <IconButton icon={faBagShopping} to={"/shop"} title={"Tienda"} />
          {(currentUser?.role === "admin" || currentUser?.role === "teacher") && (
            <IconButton icon={faTableColumns} to={"/dashboard"} title={"Dashboard"} />
          )}
        </section>
        <section className={s.appSection}>
          <MenuButton />
          <AccountButton />
        </section>
      </nav>
      <LateralCanvas />
    </div>
  )
}