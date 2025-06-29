import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen, setUserAction } from '../../../middlewares/redux/actions/ui';
import s from './ModalCanvas.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const ModalCanvas = () => {
  const dispatch = useDispatch();
  const isModalOpen = useSelector((state: any) => state.ui.isModalOpen);
  const userAction = useSelector((state: any) => state.ui.userAction);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current) {
      if (isModalOpen) {
        dialogRef.current.showModal();
      } else {
        dialogRef.current.close();
      }
    }
  }, [isModalOpen]);

  const closeModal = () => {
    dispatch(setModalOpen(false));
    dispatch(setUserAction(null));
  };

  return (
    <dialog ref={dialogRef} className={s.container}>
      <div className={s.header}>
        <button onClick={closeModal} className={s.closeButton}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className={s.content}>
        {userAction === "book" && <p>This is the Book content.</p>}
        {userAction === "quests" && <p>This is the Quests content.</p>}
        {userAction === "inventory" && <p>This is the Inventory content.</p>}
      </div>
    </dialog>
  );
};
