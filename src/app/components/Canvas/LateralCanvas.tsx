import s from './LateralCanvas.module.css';
import { useEffect } from 'react';
import { $d } from '../../../functions';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuType } from '../../../middlewares/redux/actions/ui';
import { Menu } from '../Menu/Menu';

export const LateralCanvas = () => {
  const dispatch = useDispatch();
  const menuType = useSelector((state: any) => state.ui.menuType);
  const currrentUser = useSelector((state: any) => state.currentUser);
  const { id } = currrentUser || {};
  
  useEffect(() => {
    const handleMouseUp = (e: MouseEvent) => {
      const container: any = $d('#lateral-canvas');
      if (container && !container.contains(e.target)) {
        dispatch(setMenuType(null)); // Close menu by setting menuType to null
        $d('#lateral-canvas').style.display = 'none';
        $d('#menu').style.display = 'none';
      }
    };

    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dispatch]);

  return (
    <div className={s.container} id='lateral-canvas'>
      <Menu type={menuType} userId={id} />
    </div>
  )
}
