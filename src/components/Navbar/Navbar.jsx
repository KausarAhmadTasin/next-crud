import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-500 ">
      <div className="mx-auto container px-8 py-4 flex justify-between">
        <div>
          <Link href="/">
            <p className="text-xl text-white cursor-pointer">Next Todo</p>
          </Link>
        </div>
        <div className="flex gap-4 text-white font-medium">
          <Link href="/login">
            <p className="cursor-pointer">Login</p>
          </Link>
          <Link href="/register">
            <p className="cursor-pointer">Register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
