import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-indigo-500 rounded-sm p-2">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <h3 className="text-gray-800">{task.description}</h3>
      <p className="text-gray-700 text-sm">{task.id}</p>
      <button
        className="bg-indigo-700 hover:bg-indigo-900 text-slate-300 px-2 py-1 rounded-sm mt-3 w-full "
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
};

export default TaskCard;
