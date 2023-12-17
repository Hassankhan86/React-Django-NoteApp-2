// Token ActionType  
import { LOGIN_TOKEN } from "./actionTypes"
import { RESET_STORE } from "./actionTypes"

export const loginToken = (data) => {
  return {
    type: LOGIN_TOKEN,
    payload: data
  }
}

export const resetToken = (data) => {
  return {
    type: RESET_STORE,
    payload: data
  }
  
}
