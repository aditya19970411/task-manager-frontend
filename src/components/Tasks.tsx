import React from "react";
import DeleteIcon from "./DeleteIcon";
import { TaskType } from "../types/task.type";

type Props = { tasks: Array<TaskType>; deleteTask: Function };

const Tasks = ({ tasks, deleteTask }: Props) => {
  /**
   * Capitalizes first letter of string
   * @param text string
   * @returns
   */
  const capitalizeFirst = (text: string) => {
    return text.split("").reduce((prev, next, idx) => {
      if (idx === 0) return prev + next.toUpperCase();
      else return prev + next;
    }, "");
  };

  return (
    <div className="flex flex-col w-full sm:gap-5 gap-3 overflow-auto scrollbar sm:pr-2 pr-1">
      {tasks.map((task) => (
        <div
          className="flex bg-primary px-4 py-3 rounded justify-between items-center gap-2"
          key={task.id.toString()}
        >
          <span className="flex sm:text-xl text-base font-medium">
            {capitalizeFirst(task.description)}
          </span>
          <DeleteIcon
            className="cursor-pointer sm:min-w-8 w-5 min-w-5 fill-secondary"
            onClick={() => deleteTask(task.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default Tasks;
