
const initialState: any = {

}

export default function rootReducer(state: any = initialState, action: any) {
  switch (action.type) {
    default:
      return { ...state };
  }
}