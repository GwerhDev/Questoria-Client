import s from './Menu.module.css';

export const Menu = (props: any) => {
  const { type } = props || {};

  return (
    <ul className={s.menu} id='menu'>
      {
        type === "info" &&
        <>
          <p className={s.title}>General</p>
          <li>Noticias</li>
          <li className='dashed-border-top'>Certificaciones</li>
          <p className={s.title}>Acerca de</p>
          <li>¿Quiénes somos?</li>
          <li className='dashed-border-top'>Nuestra misión</li>
        </>
      }
    </ul>
  )
}