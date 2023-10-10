import s from './LoginInner.module.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

export const LoginInner = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e: any) {
    e.preventDefault();
    console.log(username, password);
  }
  
  return (
    <form className="auth-form">
    Login
    <div className="form-group">
      <input onInput={(e: any) => setUsername(e.target.value) } type="text" placeholder="Username" />
      <input onInput={(e: any) => setPassword(e.target.value)} type="password" placeholder="Password" />
    </div>
    <div>
      <Link to="/password-recovery">Forgot password?</Link>
    </div>
    <button className={s.buttonLogin} onClick={handleLogin}>Login</button>
  </form>
  )
}
