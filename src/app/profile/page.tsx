"use client";

import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProfilePage = () => {
  const router = useRouter();

  const [userData, setUserData] = useState({});
          
  const getUserDetails = async () => {
    const response = await axios.get("/api/users/userDetail");
    console.log(response.data.data);
    setUserData(response.data.data);
  };
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <div>
      <h2>Profile Page</h2>
      <br />
      {userData?.username && (
        <div>
          <h1 className="text-orange-500">User Details</h1>
          <h1>Username: {userData?.username}</h1>
          <h1>Email: {userData?.email}</h1>
        </div>
      )}
      <button
        onClick={logout}
        className="mt-2 hover:shadow-form w-100 rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
      >
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className="mt-2 ml-2 hover:shadow-form w-100 rounded-md bg-[#f19564] py-3 px-8 text-center text-base font-semibold text-white outline-none"
      >
        Fetch User Details
      </button>
    </div>
  );
};

export default ProfilePage;
