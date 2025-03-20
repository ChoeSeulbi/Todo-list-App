import "./List.css";
import TodoItem from "./TodoItem";
import {useState} from "react";
const List = ({todos, onUpdate, onDelete}) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLocaleLowerCase())
    );
  };
  const filteredTodos = getFilteredData();
  const getAnalyzedData = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  };
  const {totalCount, doneCount, notDoneCount} = getAnalyzedData();
  return (
    <div className="List">
      <h4>Todo List 🌟</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDont : {notDoneCount}</div>
      </div>
      <input
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={onChangeSearch}
      />
      <div className="todos-wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};
export default List;
