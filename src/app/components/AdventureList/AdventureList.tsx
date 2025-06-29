import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdventures } from '../../../middlewares/redux/actions/adventure';

export const AdventureList = () => {
  const dispatch = useDispatch();
  const adventures = useSelector((state: any) => state.adventures);

  useEffect(() => {
    dispatch(getAdventures());
  }, [dispatch]);

  return (
    <ul>
      {adventures.map((adventure: any, index: number) => (
        <li key={index}>{adventure.name}</li>
      ))}
    </ul>
  );
};