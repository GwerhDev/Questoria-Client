import axios from "axios";
import { URL_API } from "../../config";
import { CURRENT_USER, ERROR } from "../../misc/consts";
import { options } from "../../helpers";
import { Dispatch } from "redux";
import { User } from "../../../models/interfaces";

export function auth(navigate: (path: string) => void) {
  return async function (dispatch: Dispatch) {
    await axios.get<{ userData: User, logged: boolean }>(`${URL_API}/auth`, options())
      .then((res) => {
        dispatch({
          type: CURRENT_USER,
          payload: res.data.userData
        });
        return res.data.logged && navigate("/");
      })
      .catch((e: object) => {
        console.error(e);
        navigate("/login");
        return;
      });
  };
}

export function loginInner(formData: object, navigate: (path: string) => void) {
  return async function (dispatch: Dispatch) {
    await axios.post<{ token: string; logged: boolean }>(`${URL_API}/login-inner`, formData)
      .then((res) => {
        localStorage.setItem('userToken', res.data.token);
        return res.data.logged && navigate(`/auth?token=${res.data.token}`);
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
  localStorage.removeItem('userToken');
  window.location.href = "/login";
}