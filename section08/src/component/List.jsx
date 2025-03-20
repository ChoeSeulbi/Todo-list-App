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
  return (
    <div className="List">
      <h4>Todo List 🌟</h4>
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
