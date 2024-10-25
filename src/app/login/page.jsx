const login = () => {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-1">
              <label
                className="block text-gray-700 font-semibold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            <div className="mb-6 text-sm">
              <a href="/register">
                Don&apos;t have an account{" "}
                <span className="text-blue-400 hover:text-blue-500 hover:underline underline-offset-2 transition duration-150 ease-in-out cursor-pointer">
                  Register
                </span>
              </a>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
