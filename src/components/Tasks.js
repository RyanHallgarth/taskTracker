import Task from "./Task";

/* 
    -tasks is an array of objects defined in App.js and passed into Tasks component
    -
*/

const Tasks = ({ tasks, onDelete, onToggle }) => {
  /* 
        -For each task object in the tasks array, render a Task.js
        component with the data stored in that object

        -onDelete logic uses a filter array method to create a new array
        without the selected task
        -onToggle is triggered on a double click.  It changes the reminder boolean, 
        which determines how the task is styled (green left border for true,
        no left border for false)
    */
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
