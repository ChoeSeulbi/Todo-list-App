import {useState, useRef} from "react";
import "./App.css";
import Header from "./component/Header";
import Editor from "./component/Editor";
import List from "./component/List";

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

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  const onUpdate = (targetId) => {
    //투두 스테이트 값들 중에
    // 타겟아이디와 일치하는 아이디를 갖는 투두아이템의 이즈던 변경

    //인수: 투두스 배열에서 타겟아이디와 일치하는 아이디를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo
      )
    );
  };
  const onDelete = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
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
