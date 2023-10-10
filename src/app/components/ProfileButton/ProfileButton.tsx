import s from './ProfileButton.module.css';

export const ProfileButton = () => {
  return (
    <div className={s.container}>
      <p>Mr <span>G Fernández</span></p>
      <div className={s.buttonContainer}>
        <img src='' width="100%"/>
      </div>
    </div>
  )
}
