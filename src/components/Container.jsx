import React from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import { Outlet, Link } from "react-router-dom";

import { useState, useCallback } from "react";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = useCallback((item) => {
    setList([...list, item]);
  },[list]);

  const handleListUpdate = (updatedList) => {
    setList(updatedList);
  };

  return (
    <div>
      <h1>todos</h1>
      <FormTodo handleAddItem={handleAddItem} />
      <TodoList list={list} handleListUpdate={handleListUpdate} />
      <footer>
        <Link to="/">
          <button>All</button>
        </Link>
        <Link to="/active">
          <button>Active</button>
        </Link>
        <Link to="/done">
          <button>Done</button>
        </Link>
      </footer>
      <Outlet />
    </div>
  );
};

export default Container;
