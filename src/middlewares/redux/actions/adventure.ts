import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { GET_ADVENTURES } from "../../misc/consts";

export const getAdventures = () => {
  return async (dispatch: any) => {
    try {
      const response: any = await axios.get(`${URL_API}/adventure`, options());
      dispatch({
        type: GET_ADVENTURES,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching adventures:", error);
    }
  };
};

export const getCurrentAdventure = () => {
  return async (dispatch: any) => {
    try {
      const response: any = await axios.get(`${URL_API}/adventure/current`, options());
      dispatch({
        type: GET_ADVENTURES,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error fetching adventures:", error);
    }
  };
};