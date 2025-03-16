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
      dat: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List />
    </div>
  );
}

export default App;
