"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { signOutUser } from "@/redux/slices/userSlice";

const UserInfo = () => {
  const dispatch: AppDispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  async function handleSignOut() {
    await signOut(auth);

    dispatch(signOutUser());
  }

  return user.username ? (
    <div
      className="hidden sm:flex w-full space-x-3 p-2 absolute bottom-9 items-center transition-colors duration-150 bg-transparent hover:bg-[#dde2dd] rounded-full hover:cursor-pointer"
      onClick={() => handleSignOut()}
    >
      <Image
        src="/assets/profile-pic.jpg"
        width="32"
        height="32"
        alt="profile picture"
        className="rounded-full w-11 h-11 "
      />
      <div className="hidden xl:flex flex-col">
        <div className="font-bold">{user.name}</div>
        <div className="text-[#7e887d]">@{user.username}</div>
      </div>
    </div>
  ) : null;
};
export default UserInfo;
