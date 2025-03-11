import {useState} from "react";
import "./App.css";

import Header from "./component/Header";
import Editor from "./component/Editor";
import List from "./component/List";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
