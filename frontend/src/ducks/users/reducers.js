// Token ActionType  
import { LOGIN_TOKEN } from "./actionTypes"
import { RESET_STORE } from "./actionTypes"

const initialState = {
  loginToken: ['']
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case LOGIN_TOKEN:
      return {
        ...initialState, loginToken: action.payload,
      }
    case RESET_STORE:
      return  {
        ...initialState
      }
    default: return state;
  }

};

export default userReducer;
