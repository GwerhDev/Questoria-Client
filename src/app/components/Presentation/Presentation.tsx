import s from './Presentation.module.css'

export const Presentation = () => {
  return (
    <div className={s.container}>
      <div className={s.photoContainer}>
        <img src="" alt="" width="100%"/>
      </div>
      <h3>Mr <span>G Fernández</span></h3>
    </div>
  )
}
