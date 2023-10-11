import s from './SignupInner.module.css';
import { useState } from 'react';

export const SignupInner = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSignup(e: any) {
    e.preventDefault();
    console.log(username, password);
  }

  return (
    <>
      <div className="form-group">
        <input onInput={(e: any) => setUsername(e.target.value)} type="text" placeholder="Username" />
        <input onInput={(e: any) => setPassword(e.target.value)} type="password" placeholder="Password" />
      </div>
      <button className={s.buttonSignup} onClick={handleSignup}>Signup</button>
    </>
  )
}
