import s from './Language.module.css';

export const Language = () => {
  return (
    <select className={s.selectLanguage}>
      <option value="es">ESPAÑOL (ES)</option>
      <option value="en">ENGLISH (EN)</option>
      <option value="fr">FRANÇAIS (FR) </option>
    </select>
  )
}
