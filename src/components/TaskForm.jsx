import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };
    createTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-indigo-700 p-4 mb-4 grid gap-1 rounded-sm"
    >
      <input
        type="text"
        placeholder="Titulo"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="bg-indigo-100 p-3 mb-2"
      />
      <input
        type="text"
        placeholder="Descripción"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="bg-indigo-100 p-3 mb-2 "
      />
      <button className="bg-indigo-800 text-slate-300 text-xl  font-semibold hover:bg-indigo-900 p-3">
        Enviar
      </button>
    </form>
  );
};

export default TaskForm;
