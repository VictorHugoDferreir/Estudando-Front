import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="mt-4 space-y-2 p-6 bg-slate-200 rounded-md shadow-md">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 text-white p-2 rounded-md ">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.onTaskDeleteClick(task.id)}
            className="bg-slate-400 text-white p-2 rounded-md "
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
