import s from "./AdventureList.module.css";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdventures } from '../../../middlewares/redux/actions/adventure';
import { AdventureCard } from "../Cards/AdventureCard";
import { RootState } from '../../../middlewares/redux/reducer';
import { Adventure } from '../../../models/interfaces';
import { AppDispatch } from '../../../middlewares/redux/store';

export const AdventureList = () => {
  const dispatch: AppDispatch = useDispatch();
  const adventures = useSelector((state: RootState) => state.adventures);

  useEffect(() => {
    dispatch(getAdventures());
  }, [dispatch]);

  return (
    <ul className={s.container}>
      {adventures?.map((adventure: Adventure, index: number) => (
        <li key={index}>
          <AdventureCard adventure={adventure} />
        </li>
      ))}
    </ul>
  );
};