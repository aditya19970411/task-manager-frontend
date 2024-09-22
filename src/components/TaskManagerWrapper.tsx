import React, { useEffect, useState } from "react";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import { TaskType } from "../types/task.type";
import { Delete, Get, Post } from "../utils/api";

type Props = {};

const TaskManagerWrapper = (props: Props) => {
  const [tasks, setTasks] = useState(Array<TaskType>);

  const updateTasks = (task: TaskType) => {
    const updatedTasks: Array<TaskType> = [...tasks];
    updatedTasks.unshift(task);

    setTasks(updatedTasks);
  };

  const addTask = async (description: string) => {
    try {
      const task: TaskType = await Post("/tasks", { description });

      if (task !== undefined) updateTasks(task);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const getTasks = async () => {
    try {
      const tasks: { tasks: Array<TaskType>; total: number } = await Get(
        "/tasks"
      );

      setTasks(tasks.tasks);
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  const deleteTask = async (id: number) => {
    try {
      const deleteTask = await Delete(`/tasks/${id}`);

      if (deleteTask.affected > 0) {
        const newTasks = [...tasks.filter((t) => t.id !== id)];
        setTasks(newTasks);
      }
    } catch (error) {
      console.log("ERROR:", error);
    }
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="flex w-[90%] max-w-lg h-auto flex-col sm:p-8 p-5 justify-center items-center sm:max-h-[75%] max-h-[60%] bg-secondary text-secondary sm:gap-10 gap-6 rounded-[8px]">
      <span className="sm:text-3xl text-2xl font-bold text-primary w-full items-start">
        Let's Get Things Done
      </span>
      <AddTask addTask={addTask} />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskManagerWrapper;
