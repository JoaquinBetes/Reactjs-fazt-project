import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(taskInfo) {
        setTasks([...tasks, {
            title: taskInfo.title,
            description: taskInfo.description,
            id: tasks.length
        }])
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    return (
        <TaskContext.Provider
            value={
                {
                    tasks,
                    createTask,
                    deleteTask
                }
            }
        >
            {props.children}
        </TaskContext.Provider>
    )
}

