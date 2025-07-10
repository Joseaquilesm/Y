"use client";
import React from "react";
import SignUpModal from "./modals/SignUpModal";
import LogInModal from "./modals/LogInModal";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const SignUpPrompt = () => {
  const username = useSelector((state: RootState) => state.user.username);
  console.log(username);

  // render nothing if user is logged in
  return username ? null : (
    <div className="fixed bottom-0 bg-[#415d43] h-[80px] w-full flex justify-center items-center">
      <div className="space-x-9">
        <LogInModal />
        <SignUpModal />
      </div>
    </div>
  );
};

export default SignUpPrompt;
