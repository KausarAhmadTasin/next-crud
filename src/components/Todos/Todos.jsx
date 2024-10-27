"use client";

const Todos = ({ todos, loading }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-xl text-orange-600 font-bold">Loading...</div>
      </div>
    );
  }

  if (!loading && todos.length === 0) {
    return <p className="h-96 flex items-center">No todos added!</p>;
  }

  return (
    <div className="p-6 rounded-xl bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center text-orange-600">
        My Todos
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {todos.map((todo) => (
          <div
            key={todo._id}
            className="bg-white p-5 rounded-lg shadow-lg border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {todo.todo}
            </h2>
            <p className="text-gray-600">
              <span className="font-bold">Date:</span> {todo.date}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Starts:</span> {todo.starts}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Ends:</span> {todo.ends}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
