
const initialState: any = {
  currentUser: null
}

export default function rootReducer(state: any = initialState, action: any) {
  switch (action.type) {
    default:
      return { ...state };
  }
}