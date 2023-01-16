import TaskCard from "./TaskCard"
import { useContext } from "react"
import { TaskContext } from "../context/TaskContext"

const TaskList = () => {

    const {tasks} = useContext(TaskContext)

    if (tasks.length === 0) {
        return <h1 className="text-slate-200 text-2xl text-center">No hay tareas aun</h1>
    }

    return <div className="grid grid-cols-4 gap-2 rounded-md">
        {tasks.map((task) => (
                <TaskCard task={task} key={task.id}/>
        ))}
    </div>

}

export default TaskList