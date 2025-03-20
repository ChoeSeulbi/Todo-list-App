import {act, useReducer} from "react";

//reducer : 변환기 -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  //   if (action.type === "INCREASE") {
  //     return state + action.data;
  //   } else if (action.type === "DECREASE") {
  //     return state - action.data;
  //   }

  //switch문 default값도 있어야 좋음
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  const onClickPlus = () => {
    //인수: 상태가 어떻게 변화되길 원하는지
    // -> 액션 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };
  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};
export default Exam;
