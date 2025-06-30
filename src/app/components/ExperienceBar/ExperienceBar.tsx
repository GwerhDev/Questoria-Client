import { useSelector } from 'react-redux';
import s from './ExperienceBar.module.css';

export const ExperienceBar = () => {
  const currentUser = useSelector((state: any) => state.currentUser);
  const experience = currentUser?.experience || 0;
  const level = currentUser?.level || 1; // Assuming level starts at 1
  const maxExperienceForLevel = 100; // Placeholder: You'll need a function to calculate this based on level

  const progress = (experience / maxExperienceForLevel) * 100;

  return (
    <div className={s.container}>
      <div className={s.barBackground}>
        <span className={s.text}>Level {level} - Exp: {experience}/{maxExperienceForLevel}</span>
        <div className={s.barFill} style={{ width: `${progress}%` }}>
        </div>
      </div>
    </div>
  );
};
