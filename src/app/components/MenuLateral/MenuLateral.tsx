import { $d } from '../../../functions';
import { Menu } from '../Menu/Menu';
import s from './MenuLateral.module.css';

export const MenuLateral = () => {
  document.addEventListener('mouseup', function (e) {
    const container: any = $d('#lateral-menu');
    if (!container?.contains(e.target)) {
      return (
        $d('#lateral-menu').style.display = 'none',
        $d('#menu').style.display = 'none'
      )
    }
    return;
  });

  return (
    <div className={s.container} id='lateral-menu'>
      <Menu/>
    </div>
  )
}
