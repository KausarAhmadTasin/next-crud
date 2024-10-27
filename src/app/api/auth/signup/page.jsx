"use client";
import Link from "next/link";
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";

const Register = () => {
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [isConfirmEyeOpen, setIsConfirmEyeOpen] = useState(false);
  const [passErr, setPassErr] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    const passwordConfirm = e.target.passwordConfirm.value;
    const password = e.target.password.value;

    if (password === passwordConfirm) {
      const user = {
        email: e.target.email.value,
        password,
      };
      const res = await fetch(
        "http://localhost:3000/api/auth/signup/new-user",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "content-type": "application/json" },
        }
      );
      console.log(res);
    } else {
      setPassErr("Password did not match!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h2>
        <form onSubmit={handleSignUp}>
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
              name="email"
            />
          </div>
          <div className="relative mb-4">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={isEyeOpen ? `text` : `password`}
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              name="password"
            />
            <GoEye
              onClick={() => setIsEyeOpen(true)}
              className={`${
                isEyeOpen ? "hidden" : "absolute"
              } bottom-3 right-2`}
            />
            <GoEyeClosed
              onClick={() => setIsEyeOpen(false)}
              className={`${
                !isEyeOpen ? "hidden" : "absolute"
              } bottom-3 right-2`}
            />
          </div>
          <div className="relative mb-1">
            <label
              className="block text-gray-700 font-semibold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              type={isConfirmEyeOpen ? `text` : `password`}
              id="confirmPassword"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
              name="passwordConfirm"
            />
            <GoEye
              onClick={() => setIsConfirmEyeOpen(true)}
              className={`${
                isConfirmEyeOpen ? "hidden" : "absolute"
              } bottom-3 right-2`}
            />
            <GoEyeClosed
              onClick={() => setIsConfirmEyeOpen(false)}
              className={`${
                !isConfirmEyeOpen ? "hidden" : "absolute"
              } bottom-3 right-2`}
            />
          </div>
          {passErr && <p className="text-red-500 text-sm mb-6">{passErr}</p>}
          <div className="mb-4 text-sm">
            <Link href="/api/auth/signin">
              {" "}
              <p>
                Already have an account?{" "}
                <span className="text-blue-400 hover:text-blue-500 hover:underline underline-offset-2 transition duration-150 ease-in-out cursor-pointer">
                  Login
                </span>
              </p>
            </Link>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
