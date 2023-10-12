import s from './Menu.module.css';

export const Menu = () => {
  return (
    <ul className={s.menu} id='menu'>
      <p>General</p>
      <li>News</li>
      <li className='dashed-border-top'>Courses</li>
      <li className='dashed-border-top'>Certifications</li>
      <p>About</p>
      <li>Who is Gustavo Fernández</li>
      <li className='dashed-border-top'>Our Mission</li>
    </ul>
  )
}