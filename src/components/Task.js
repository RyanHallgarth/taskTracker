import { FaTimes } from "react-icons/fa";
// commenting in React is TRASH.
function Task({ task, onDelete, onToggle }) {
  /*
        If task.reminder is false, render the .task class
        if task.reminder is true, apply the .reminder class to the .task class    
    */

  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {/* render task text */}
        {task.text}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
          }}
          /*
                when FaTimes is clicked, trigger onDelete 
                (new array created and rendered minus clicked task) 
            */

          onClick={() => onDelete(task.id)}
        />
      </h3>

      <p>{task.day}</p>
    </div>
  );
}

export default Task;
