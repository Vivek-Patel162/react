import { useState } from "react";
import { v4 as uuidv4 } from "uuid";



export default function ToDo() {
  let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4(), isDone: false }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);

    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };


  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
  };


  let upperCaseAll = () => {
    setTodos((Todos) => (
      Todos.map((todo) => {
        return {
          ...todo,
          task: todo.task.toUpperCase(),
        };
      })
    ))
  }

  let upperCaseOne = (id) => {
    setTodos((Todos) => (
      Todos.map((todo) => {

        if (todo.id == id) {
          if (todo.isDone) {
            console.log("vivek");
            return {
              ...todo,
              task: todo.task.toUpperCase(),
              isDone: false,
            };

          }
          else {

            console.log("vivek2");
            return {
              ...todo,
              task: todo.task.toUpperCase(),
              isDone: true,
            }
          }

        } else {
          return todo;
        }


      })
    ))
  }
  return (
    <div>
      <input placeholder="add a task" value={newTodo} onChange={updateTodoValue}></input>
      <br></br>
      <button onClick={addNewTask}>add a task</button>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Task Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>
              {todo.task}
            </span>

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <br></br>
            <button onClick={() => upperCaseOne(todo.id)}>UpperCaseOne</button>
            <br></br>


          </li>
        )
        )}
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>UpperCase All</button>
    </div>
  );
}