import s from "./CurrentAdventure.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { faLandmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getCurrentAdventure } from "../../../middlewares/redux/actions/adventure";
import { QuestCard } from "../Cards/QuestCard";
import { Adventure } from "../../../models/interfaces";

export const CurrentAdventure = () => {
  const dispatch = useDispatch();
  const adventure: Adventure | null = useSelector((state: any) => state.adventure);

  useEffect(() => {
    dispatch(getCurrentAdventure());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <span className={s.title}>
        <FontAwesomeIcon size="3x" icon={faLandmark} />
        <h1>{adventure?.name}</h1>
      </span>

      <span>Elige una misión para comenzar tu aventura histórica:</span>

      <div className={s.unityContainer}>
        <ul className={s.unityList}>
          {adventure?.quest.map((quest, index) => (
            <li key={index}>
              <QuestCard quest={quest} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
