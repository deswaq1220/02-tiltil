// 공장(reducer) 제작하려고 만든 파일
const LOG_IN = "LOG_IN";

const initialState = {
  isLoggedIn: false,
};

export default function authReducer(
  prevState = initialState,
  action: { type: string; payload: unknown }
) {
  const nextState = { ...prevState };
  if (action.type === LOG_IN) {
    nextState.isLoggedIn = true;
  }
  return nextState;
}
