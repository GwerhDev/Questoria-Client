import axios from "axios";
import { URL_API } from "../../config";
import { CURRENT_USER, ERROR } from "../../misc/consts";
import { options } from "../../helpers";

export function auth(navigate: any) {
  return async function (dispatch: any) {
    await axios.get(`${URL_API}/auth`, options())
      .then((res: any) => {
        dispatch({
          type: CURRENT_USER,
          payload: res.data.userData
        });
        return res.data.logged && navigate(`/profile/${res.data.userData.id}`);
      })
      .catch((e: object) => {
        console.error(e);
        return;
      });
  };
}

export function loginInner(formData: object, navigate: any) {
  return async function (dispatch: any) {
    await axios.post(`${URL_API}/login-inner`, formData)
      .then((res: any) => {
        localStorage.setItem('userToken', res.data.token);
        return res.data.logged && navigate(`/auth?token=${res.data.token}`);
      })
      .catch((e) => {
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
  return async function () {
    await axios.get(`${URL_API}/login-google`)
      .catch((e: object) => { console.error(e); });
  };
}

export function signupInner(formData: object) {
  return async function () {
    await axios.post(`${URL_API}/signup-inner`, formData)
      .then((res: any) => {
        return res.data.logged;
      })
      .catch((e: object) => {
        console.error(e);
        return;
      });
  };
}

export function signupGoogle() {
  return async function () {
    await axios.get(`${URL_API}/signup-google`)
      .then((res: any) => {
        return res.data.logged;
      })
      .catch((e: object) => {
        console.error(e);
        return;
      });
  };
}