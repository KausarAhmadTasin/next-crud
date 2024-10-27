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
      <form className="min-w-96" onSubmit={handleTodoSubmit}>
        <div>
          {" "}
          <input
            className="border border-blue-400 w-full my-2 px-5 py-2 rounded-lg"
            type="text"
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
        <button className="bg-orange-600 text-white w-full my-3 px-5 py-2 rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
