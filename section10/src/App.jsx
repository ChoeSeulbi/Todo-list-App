import {useState, useRef, useReducer} from "react";
import "./App.css";
import Header from "./component/Header";
import Editor from "./component/Editor";
import List from "./component/List";
import Exam from "./component/Exam";
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "study React1",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "study React2",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "study React3",
    date: new Date().getTime(),
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        item.id === action.targetId ? {...item, isDone: !item.isDone} : item
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
  }
}
function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };

  const onUpdate = (targetId) => {
    //투두 스테이트 값들 중에
    // 타겟아이디와 일치하는 아이디를 갖는 투두아이템의 이즈던 변경

    //인수: 투두스 배열에서 타겟아이디와 일치하는 아이디를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
