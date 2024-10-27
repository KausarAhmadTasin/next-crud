"use client";
const TodoForm = () => {
  const handleTodoSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const todo = {
      todo: form.todo.value,
      date: form.date.value,
      starts: form.starts.value,
      ends: form.ends.value,
    };
    console.log(todo);
  };
  return (
    <div>
      <form onSubmit={handleTodoSubmit}>
        <div>
          {" "}
          <input
            className="border border-blue-400 w-full my-2 px-5 py-2 rounded-lg"
            type="text"
            name="todo"
            placeholder="Add todo "
          />{" "}
          <input
            className="border w-full border-blue-400 px-5 py-2 rounded-lg"
            type="date"
            name="date"
            id=""
          />
          <div className="space-x-2 flex my-2">
            <input
              className="border w-1/2 border-blue-400 px-5 py-2 rounded-lg"
              type="time"
              name="starts"
              id=""
            />
            <input
              className="border w-1/2 border-blue-400 px-5 py-2 rounded-lg"
              type="time"
              name="ends"
              id=""
            />
          </div>
        </div>
        <button className="bg-orange-600 text-white w-full my-3 px-5 py-2 rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
