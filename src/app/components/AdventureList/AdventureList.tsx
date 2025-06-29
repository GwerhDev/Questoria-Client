import s from "./AdventureList.module.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdventures } from '../../../middlewares/redux/actions/adventure';
import { AdventureCard } from "../Cards/AdventureCard";

export const AdventureList = () => {
  const dispatch = useDispatch();
  const adventures = useSelector((state: any) => state.adventures);

  useEffect(() => {
    dispatch(getAdventures());
  }, [dispatch]);

  return (
    <ul className={s.container}>
      {adventures?.map((adventure, index) => (
        <li key={index}>
          <AdventureCard adventure={adventure} />
        </li>
      ))}
    </ul>
  );
};