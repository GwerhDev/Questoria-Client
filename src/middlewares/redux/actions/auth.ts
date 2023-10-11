import axios from "axios";
import { URL_API } from "../../config";
import { CURRENT_USER, ERROR } from "../../misc/consts";
import { options } from "../../helpers";

export function auth() {
  return async function (dispatch: any) {
    await axios.get(`${URL_API}/auth`, options())
      .then(res => {
        dispatch({
          type: CURRENT_USER,
          payload: res.data.userData
        })
        return res.data.logged;
      })
      .catch((e) => {
        console.error(e);
        return;
      }
    )
  }
}

export function loginInner(email: string, password: string) {
  return async function (dispatch: any) {
    await axios.post(`${URL_API}/login-inner`, { email, password })
      .then(res => {
        localStorage.setItem('userToken', res.data.token);
        res.data.logged;
      })
      .catch((e) => {
        dispatch({ 
          type: ERROR, 
          payload: e.response.data.message 
        });
        console.error(e.code);
        return;
      }
    )
  }
}

export function loginGoogle() {
  return async function () {
    await axios.get(`${URL_API}/login-google`)
      .catch((e) => { console.error(e) });
  }
}

export function signupInner(email: string, password: string) {
  return async function () {
    await axios.post(`${URL_API}/signup-inner`, { email, password })
      .then(res => {
        return res.data.logged;
      })
      .catch((e) => {
        console.error(e);
        return;
      }
    )
  }
}

export function signupGoogle() {
  return async function () {
    await axios.get(`${URL_API}/signup-google`)
      .then(res => {
        return res.data.logged;
      })
      .catch((e) => {
        console.error(e);
        return;
      }
    )
  }
}

