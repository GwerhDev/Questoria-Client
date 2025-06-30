import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { Dispatch } from "redux";
import { Quest } from "../../../models/interfaces";

export const createQuest = (questData: Omit<Quest, '_id'>) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post<Quest>(`${URL_API}/quest/create`, questData, options());
      return response.data;
    } catch (error) {
      console.error("Error creating quest:", error);
    }
  };
};