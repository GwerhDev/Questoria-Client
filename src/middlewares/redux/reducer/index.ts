import { CURRENT_USER, GET_USER_DATA } from "../../misc/consts";

const initialState: any = {
  currentUser: null
}

export default function rootReducer(state: any = initialState, action: any) {
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
    default:
      return { ...state };
  }
}