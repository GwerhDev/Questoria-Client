import s from './ExperienceBar.module.css';
import { useSelector } from 'react-redux';

export const ExperienceBar = () => {
  const currentUser = useSelector((state: any) => state.currentUser);
  const experience = currentUser?.experience || 0;
  const level = currentUser?.level || 1;
  const isAdmin = currentUser?.role === "admin";
  const isTeacher = currentUser?.role === "teacher";
  const isStudent = currentUser?.role === "student";
  const maxExperienceForLevel = 100;

  const progress = (experience / maxExperienceForLevel) * 100;

  return (
    <div className={s.container}>
      <div className={s.barBackground}>
        <div className={`${s.barFill} ${isTeacher && s.teacherBarFill} ${isAdmin && s.adminBarFill} ${isStudent && s.studentBarFill}`} style={{ width: `${(isTeacher || isAdmin) ? 100 : progress}%` }}></div>
        {isAdmin && <span className={s.text}>Admin</span>}
        {isTeacher && <span className={s.text}>Master</span>}
        {isStudent && <span className={s.text}>Level {level} - Exp: {experience}/{maxExperienceForLevel}</span>}
      </div>
    </div>
  );
};
