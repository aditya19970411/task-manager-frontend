import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = { addTask: Function };

type Inputs = {
  description: string;
};

const AddTask = ({ addTask }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const handleAddTask = async (description: string) => {
    await addTask(description);

    reset();
  };

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    handleAddTask(data.description);

  return (
    <form
      className="flex w-full flex-col gap-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex w-full">
        <input
          {...register("description", {
            required: "Please add a description to add task.",
          })}
          className="flex flex-1 border-2 border-primary outline-none bg-secondary px-4 py-2 text-base w-full rounded-l font-semibold text-primary placeholder-primary/50"
          placeholder="What is the task for today ?"
        />
        <input
          className="bg-primary flex px-4 py-2 cursor-pointer font-bold rounded-r text-base outline-none"
          value={"Add Task"}
          type="submit"
        />
      </div>
      {errors.description && (
        <span className="text-red-600 text-sm">
          {errors.description.message}
        </span>
      )}
    </form>
  );
};

export default AddTask;
