import s from './AuthButton.module.css';
import { Link } from "react-router-dom";

export const AuthButton = () => {
  return (
    <div className={s.buttons}>
      <Link to="/register" className={s.buttonRegister}>Register</Link>
      <Link to="/login"><button className='primary-button'>Login</button></Link>
    </div>
  )
}
