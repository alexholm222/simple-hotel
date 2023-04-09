
const login = JSON.parse(localStorage.getItem('isLogin'));

const defaultState = {
  login: login,
};
const LOGIN_TRUE = 'LOGIN_TRUE';
const LOGIN_FALSE = 'LOGIN_FALSE';

export function reducerLogin(state = defaultState, action) {
  switch (action.type) {
    case LOGIN_TRUE: 
      return {...state, login: true} 
    case LOGIN_FALSE:  
    return {...state, login: false}
    default: return state;
  }
};

export function setLoginTrue(payload) {
  return {
    type: LOGIN_TRUE,
    payload
  }
};

export function setLoginFalse(payload) {
  return {
    type: LOGIN_FALSE,
    payload
  }
};