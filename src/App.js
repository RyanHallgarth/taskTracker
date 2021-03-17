import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Do a thing",
      day: "Feb 3rd at 2:30pm",
      reminder: false,
    },
    {
      id: 2,
      text: "Do another thing",
      day: "Feb 4th at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Do a different thing",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);

  //add task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  /*Deletes a task from the tasks array. This logic is passed to the 
  Tasks.js component in a variable called onDelete */
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  /* 
    -When a task div is double clicked, the reminder boolean is changed.
    when the reminder boolean is true, the css class '.task.reminder' is applied.
    
    -.map() creates a new array that keeps all the properties in 
    tact (... (spread)), except for the reminder property, which is changed,
    effectively changing the class that is applied to that task.

  */
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask ? <AddTask onAdd={addTask} /> : ""}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Currently no tasks to show."
      )}
    </div>
  );
}

export default App;
