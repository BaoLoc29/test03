// App.js
import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Build some websites", done: false },
    { id: 2, title: "Do exercises", done: false },
    { id: 3, title: "Go shopping", done: false },
    { id: 4, title: "House cleaning", done: true }
  ]);
  const [showOnlyUndone, setShowOnlyUndone] = useState(false);
  const [showOnlyDone, setShowOnlyDone] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setShowOnlyUndone(searchParams.get("withDone") !== "1");
    setShowOnlyDone(searchParams.get("onlyDone") === "1");
  }, [location.search]);

  const addTask = (title) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      done: false
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, done: !task.done } : task
    ));
  };

  const countUndoneTasks = () => {
    return tasks.filter(task => !task.done).length;
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (showOnlyUndone) {
      searchParams.set("withDone", "0");
    } else {
      searchParams.delete("withDone");
    }
    navigate({ search: searchParams.toString() });
  }, [showOnlyUndone, navigate, location.search]);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (showOnlyDone) {
      searchParams.set("onlyDone", "1");
    } else {
      searchParams.delete("onlyDone");
    }
    navigate({ search: searchParams.toString() });
  }, [showOnlyDone, navigate, location.search]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );

  function Home() {
    let filteredTasks = tasks;
    if (showOnlyUndone) {
      filteredTasks = tasks.filter(task => !task.done);
    } else if (showOnlyDone) {
      filteredTasks = tasks.filter(task => task.done);
    }

    return (
      <div className="App">
        <div className="container">
          <TodoListHeader
            count={showOnlyDone ? tasks.filter(task => task.done).length : countUndoneTasks()}
            showOnlyDone={showOnlyDone}
            toggleShowOnlyDone={() => setShowOnlyDone(!showOnlyDone)}
          />
          <TodoList tasks={filteredTasks} toggleTaskStatus={toggleTaskStatus} />
          <Form addTask={addTask} />
        </div>
        <Footer />
      </div>
    );
  }
};

export default App;
