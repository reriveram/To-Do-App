import Todo from "./Todo";
import { memo } from "react";

const TodoList = (props) => {
  const { list, handleListUpdate } = props;

  const onChangeStatus = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked);

    const updateList = list.map((todo) => ({
      ...todo,
      done: todo.id === name ? checked : todo.done,
    }));

    handleListUpdate(updateList);
  };

  const onClickRemoveTodo = () => {
    const updateList = list.filter((todo) => !todo.done);
    handleListUpdate(updateList);
  };

  const todoList = list.map((todo) => (
    <Todo key={todo.id} data={todo} onChange={onChangeStatus} />
  ));

  return (
    <div>
      {list.length ? todoList : "No Tasks"}
      {list.length ? (
        <p>
          <button onClick={onClickRemoveTodo}>Delete all done</button>
        </p>
      ) : null}
    </div>
  );
};

export default memo(TodoList);
