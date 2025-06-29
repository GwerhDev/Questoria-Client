export const SET_MENU_TYPE = "SET_MENU_TYPE";
export const SET_USER_ACTION = "SET_USER_ACTION";
export const SET_MODAL_OPEN = "SET_MODAL_OPEN";

export const setMenuType = (menuType: string | null) => {
  return {
    type: SET_MENU_TYPE,
    payload: menuType,
  };
};

export const setUserAction = (action: string | null) => {
  return {
    type: SET_USER_ACTION,
    payload: action,
  };
};

export const setModalOpen = (isOpen: boolean) => {
  return {
    type: SET_MODAL_OPEN,
    payload: isOpen,
  };
};