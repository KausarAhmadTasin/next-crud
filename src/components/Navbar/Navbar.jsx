"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const session = useSession();
  return (
    <div className="w-full bg-blue-500 ">
      <div className="mx-auto container px-8 py-4 flex justify-between">
        <div>
          <Link href="/">
            <p className="text-xl text-white cursor-pointer">Todo</p>
          </Link>
        </div>
        {session.status === "authenticated" ? (
          <p onClick={() => signOut()} className="cursor-pointer text-white">
            Logout
          </p>
        ) : (
          <div className="flex gap-4 text-white font-medium">
            <Link href="/api/auth/signin">
              <p className="cursor-pointer">Login</p>
            </Link>
            <Link href="/api/auth/signup">
              <p className="cursor-pointer">Register</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
