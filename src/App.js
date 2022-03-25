import React, { useState, useEffect } from "react";
import './App.css';

// Components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // State stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Sort
  function sortTodos(list) {
    let b = list.sort((a, b) => a.text.localeCompare(b.text));
    return b;
  }

  // Run once when the app starts
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log('running once getLocalTodos()');

    // Get local
    function getLocalTodos() {
      if (localStorage.getItem('todos') === null) {
        localStorage.setItem('todos', JSON.stringify([]));
      } else {
        let todoFromLocal = localStorage.getItem('todos', JSON.stringify(todos));
        setTodos(sortTodos(JSON.parse(todoFromLocal)));
      }
    }

    getLocalTodos();
  }, []);

  // Run every time that 'todos' or 'status' changes
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Save to local
    function saveToLocalTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
    }

    function filterHandler() {
      switch (status) {
        case 'completed':
          setFilteredTodos(sortTodos(todos.filter(todo => todo.completed === true)));
          break;
        case 'uncompleted':
          setFilteredTodos(sortTodos(todos.filter(todo => todo.completed === false)));
          break;
        default:
          setFilteredTodos(sortTodos(todos));
          break;
      }
    }

    filterHandler();
    saveToLocalTodos();
  }, [todos, status]);

  return (
    <div className="App">
      <header>
        <h1>Simple Todo App</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
