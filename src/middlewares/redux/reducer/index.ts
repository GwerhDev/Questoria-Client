import { Adventure, User } from "../../../models/interfaces";
import { CURRENT_ADVENTURE, CURRENT_USER, GET_ADVENTURES, GET_USER_DATA, SET_MENU_TYPE, SET_USER_ACTION, SET_MODAL_OPEN, LOGOUT } from "../../misc/consts";

export interface RootState {
  currentUser: User | null;
  adventures: Adventure[];
  currentAdventure: Adventure | null;
  ui: {
    menuType: string | null;
    userAction: string | null;
    isModalOpen: boolean;
  };
}

const initialState: RootState = {
  currentUser: null,
  adventures: [],
  currentAdventure: null,
  ui: {
    menuType: null,
    userAction: null,
    isModalOpen: false,
  },
}

export default function rootReducer(state: RootState = initialState, action: any) {
  switch (action.type) {
    case CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case GET_USER_DATA:
      return {
        ...state,
        currentUser: action.payload
      };
    case GET_ADVENTURES:
      return {
        ...state,
        adventures: action.payload
      };
    case CURRENT_ADVENTURE:
      return {
        ...state,
        currentAdventure: action.payload
      };
    case SET_MENU_TYPE:
      return {
        ...state,
        ui: {
          ...state.ui,
          menuType: action.payload
        },
      };
    case SET_USER_ACTION:
      return {
        ...state,
        ui: {
          ...state.ui,
          userAction: action.payload
        },
      };
    case SET_MODAL_OPEN:
      return {
        ...state,
        ui: {
          ...state.ui,
          isModalOpen: action.payload
        },
      };
    case LOGOUT:
      return initialState;
    default:
      return { ...state };
  }
}