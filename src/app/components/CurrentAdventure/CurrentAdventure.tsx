import s from "./CurrentAdventure.module.css";
import { useEffect } from "react";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentAdventure } from "../../../middlewares/redux/actions/adventure";
import { QuestCard } from "../Cards/QuestCard";
import { Adventure } from "../../../models/interfaces";
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../middlewares/redux/hooks';

export const CurrentAdventure = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const currentAdventure: Adventure | null = useAppSelector((state: RootState) => state.currentAdventure);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      dispatch(getCurrentAdventure(id));
    }
  }, [dispatch, id]);

  return (
    <div className={s.container}>
      <span className={s.title}>
        <FontAwesomeIcon size="3x" icon={faLandmark} />
        <h1>{currentAdventure?.name}</h1>
      </span>

      <span>Elige una misión para comenzar tu aventura histórica:</span>

      <div className={s.unityContainer}>
        <ul className={s.unityList}>
          {currentAdventure?.quests?.map((quest, index) => (
            <li key={index}>
              <QuestCard quest={quest} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
