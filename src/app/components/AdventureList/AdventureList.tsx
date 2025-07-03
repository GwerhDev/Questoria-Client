import s from "./AdventureList.module.css";
import { useEffect } from 'react';
import { getAdventures } from '../../../middlewares/redux/actions/adventure';
import { AdventureCard } from "../Cards/AdventureCard";
import { Adventure } from '../../../models/interfaces';
import { useAppDispatch, useAppSelector } from '../../../middlewares/redux/hooks';

export const AdventureList = () => {
  const dispatch = useAppDispatch();
  const adventures = useAppSelector((state) => state.adventures);

  useEffect(() => {
    dispatch(getAdventures());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <ul className={s.list}>
        {adventures?.map((adventure: Adventure, index: number) => (
          <li key={index}>
            <AdventureCard adventure={adventure} />
          </li>
        ))}
      </ul>
    </div>
  );
};