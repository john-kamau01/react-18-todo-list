import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      name: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div className="App">
      <div className="add-task-container">
        <input type="text" onChange={handleChange} />
        <button onClick={addTask}>Add Task </button>
      </div>

      <div className="tasks-container">
        {tasks.map((task) => {
          return (
            <div>
              <h3 style={{ color: task.completed ? "green" : "black" }}>
                {task.name}
              </h3>
              <button onClick={() => completeTask(task.id)}>Complete</button>
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
