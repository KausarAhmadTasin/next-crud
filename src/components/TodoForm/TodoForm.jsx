"use client";

import { useSession } from "next-auth/react";

const TodoForm = () => {
  const session = useSession();

  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const todo = {
      todo: form.todo.value,
      date: form.date.value,
      starts: form.starts.value,
      ends: form.ends.value,
    };
  };
  return (
    <div>
      <form className="min-w-96" onSubmit={handleTodoSubmit}>
        <div>
          {" "}
          <label htmlFor="todo">Todo</label>
          <input
            className="border border-blue-400 w-full my-2 px-5 py-2 rounded-lg"
            type="text"
            id="todo"
            name="todo"
            placeholder="Add todo "
          />{" "}
          <div>
            <label htmlFor="date">Date</label>
            <input
              className="border w-full border-blue-400 px-5 py-2 rounded-lg"
              type="date"
              name="date"
              id="date"
            />
          </div>
          <div className="my-2">
            <label htmlFor="starts">Starts At</label>

            <input
              className="border w-full border-blue-400 px-5 py-2 rounded-lg"
              type="time"
              name="starts"
              id="starts"
            />
            <div className="mt-2">
              {" "}
              <label htmlFor="ends">Ends At</label>
              <input
                className="border w-full border-blue-400 px-5 py-2 rounded-lg"
                type="time"
                name="ends"
                id="ends"
              />
            </div>
          </div>
        </div>
        <button
          disabled={!(session.status === "authenticated")}
          className={` text-white w-full my-3 px-5 py-2 rounded-lg ${
            session.status === "authenticated" ? "bg-orange-600" : "bg-gray-400"
          }`}
        >
          {session.status === "authenticated"
            ? "Add"
            : "*First login to add todos*"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
