"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const login = async () => {
    try {
      setLoading(true);

      const response = await axios.post("/api/users/login", user);
      console.log("login -- ", response.data);
      toast.success("Login success");
      router.push("/profile");
    } catch (error: any) {
      console.log("Login failed", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold">
        {loading ? "Processing" : "Login"}
      </h2>
      <br />
      <div className="flex flex-col items-center justify-center py-2">
        <div>
          <label
            htmlFor="email"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-200 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="mb-3 block text-base font-medium text-[#07074D]"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-200 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </div>
        <button
          onClick={login}
          className="mt-2 hover:shadow-form w-100 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Login
        </button>
        <Link className="text-blue-400 py-3 px-8" href={"/signup"}>
          Visit to Signup
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
