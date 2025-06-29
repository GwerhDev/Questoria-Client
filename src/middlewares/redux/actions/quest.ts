import axios from "axios";
import { URL_API } from "../../config";
import { options } from "../../helpers";
import { CREATE_QUEST_SUCCESS, CREATE_QUEST_FAILURE } from "../../misc/consts";

export const createQuest = (questData: { title: string; description: string; rewardId: string; levelRequirement: number; adventureId: string }) => {
  return async (dispatch: any) => {
    try {
      const response: any = await axios.post(`${URL_API}/quests/create`, questData, options());
      dispatch({
        type: CREATE_QUEST_SUCCESS,
        payload: response.data,
      });
      return response.data; // Return response data
    } catch (error: any) {
      dispatch({
        type: CREATE_QUEST_FAILURE,
        payload: error.response?.data || error.message,
      });
      throw error; // Re-throw to handle in component
    }
  };
};