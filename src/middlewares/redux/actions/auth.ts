import axios from "axios";
import { Dispatch } from "redux";
import { URL_API } from "../../config";
import { User } from "../../../models/interfaces";
import { ERROR, LOGOUT } from "../../misc/consts";

axios.defaults.withCredentials = true;

export function loginInner(formData: object, navigate: (path: string) => void) {
  return async function (dispatch: Dispatch) {
    await axios.post<{ token: string; logged: boolean }>(`${URL_API}/login-inner`, formData)
      .then((res) => {
        return res.data.logged && navigate(`/auth`);
      })
      .catch((e: any) => {
        dispatch({
          type: ERROR,
          payload: e.response.data.message
        });
        console.error(e.code);
        return;
      });
  };
}

export function loginGoogle() {
  return async function (): Promise<void> {
    await axios.get(`${URL_API}/login-google`)
      .catch((e: object) => { console.error(e); });
  };
}

export function signupInner(formData: Partial<User>) {
  return async function (): Promise<boolean | void> {
    return await axios.post<{ logged: boolean }>(`${URL_API}/signup-inner`, formData)
      .then((res) => {
        return res.data.logged;
      })
      .catch((e: object) => {
        console.error(e);
        return;
      });
  };
}

export function signupGoogle() {
  return async function (): Promise<boolean | void> {
    return await axios.get<{ logged: boolean }>(`${URL_API}/signup-google`)
      .then((res) => {
        return res.data.logged;
      })
      .catch((e: object) => {
        console.error(e);
        return;
      });
  };
}

export function logout() {
  return async (dispatch: Dispatch) => {
    try {
      await axios.post(`${URL_API}/auth/logout`).then(() => {
        dispatch({
          type: LOGOUT,
        });
      })

    } catch (error) {
      console.error("Error during logout:", error);
      dispatch({
        type: LOGOUT,
      });
    }
  }
}