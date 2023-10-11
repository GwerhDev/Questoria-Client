import axios from "axios";
import { options } from "../../helpers";
import { URL_API } from "../../config";
import { GET_USER_DATA } from "../../misc/consts";

export function getUserData() {
  return async function (dispatch: any) {
    try {
      const response: any = await axios.get(`${URL_API}/account/my-data`, options());
      dispatch({
        type: GET_USER_DATA,
        payload: response.data?.userData
      });
    } catch (e: any) {
      console.error(e);
    }
  }
}