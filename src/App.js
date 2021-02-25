import { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

    const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Do a thing",
        day: "Feb 3rd at 2:30pm",
        reminder: false,
},
    {
        id: 2,
        text: "Do two things",
        day: "Feb 4th at 2:30pm",
        reminder: true,
},
    {
        id: 3,
        text: "Do three things",
        day: "Feb 5th at 2:30pm",
        reminder: false,
}
])

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">

      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'Currently no tasks to show.'}
    </div>
  );
}

export default App;
