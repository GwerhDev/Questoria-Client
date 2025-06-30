import s from "./CurrentAdventure.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentAdventure } from "../../../middlewares/redux/actions/adventure";
import { QuestCard } from "../Cards/QuestCard";
import { Adventure } from "../../../models/interfaces";
import { useParams } from 'react-router-dom';
import { RootState } from '../../../middlewares/redux/reducer';
import { AppDispatch } from '../../../middlewares/redux/store';

export const CurrentAdventure = () => {
  const dispatch: AppDispatch = useDispatch();
  const currentAdventure: Adventure | null = useSelector((state: RootState) => state.currentAdventure);
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
