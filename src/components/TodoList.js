import React, { useState } from "react";
import TodoInput from "./TodoInput";
import "./TodoList.css";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { completeTodo, addTodo, removeTodo, editToDOs } from "../state/action";
import Todo from "./Todo";

const TodoList = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  const [edit, setEdit] = useState(false);
  const [editTodo, setEditToDo] = useState({});
  console.log("todos", state);
  const dispatch = useDispatch();
  const handleEdit = (todo) => {
    console.log("i am inside edit mode", todo);
    setEdit(true);
    setEditToDo(todo);
  };
  console.log("editToDo",edit, editTodo)
  return (
    <div className="TodoList">
      <h1>Todo app </h1>
      <TodoInput
        edit={edit}
        editToDo={editTodo}
        createTodo={(newTodo) => dispatch(addTodo(newTodo))}
        handleEdit={(task) => {
            setEdit(false);
            setEditToDo({});
            dispatch(editToDOs(task));
        }}
      />
      <ul>
        <TransitionGroup className="todo-list">
          {state &&
            state.todos.map((todo, i) => {
              return (
                <CSSTransition key={i} className="todo">
                  <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    toggleTodo={() => dispatch(completeTodo(todo))}
                    handleRemove={() => dispatch(removeTodo(todo))}
                    handleEdit={() => handleEdit(todo)}
                  />
                </CSSTransition>
              );
            })}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default TodoList;
