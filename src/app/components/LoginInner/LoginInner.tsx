import s from './LoginInner.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginInner } from '../../../middlewares/redux/actions/auth';

export const LoginInner = () => {
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e: any) {
    e.preventDefault();
    const formData = { email, password }
    dispatch(loginInner(formData, navigate));
  }

  return (
    <>
      <div className="form-group">
        <input onInput={(e: any) => setEmail(e.target.value)} type="email" placeholder="Email" />
        <input onInput={(e: any) => setPassword(e.target.value)} type="password" placeholder="Password" />
      </div>
      <div>
        <Link to="/password-recovery">¿Olvidaste tu contraseña?</Link>
      </div>
      <button className={s.buttonLogin} onClick={handleLogin}>Ingresar</button>
    </>
  )
}
