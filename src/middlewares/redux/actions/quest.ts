import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";

export const createQuest = (questData: any) => {
  return async (dispatch: any) => {
    try {
      const response: any = await axios.post(`${URL_API}/quests/create`, questData, options());
      return response.data;
    } catch (error) {
      console.error("Error creating quest:", error);
    }
  };
};