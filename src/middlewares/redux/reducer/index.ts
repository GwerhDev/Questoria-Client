import { CURRENT_USER } from "../../misc/consts";

const initialState: any = {
  currentUser: null
}

export default function rootReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case CURRENT_USER: 
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return { ...state };
  }
}