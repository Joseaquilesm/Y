import React from "react";
import SignUpModal from "./modals/SignUpModal";

const SignUpPrompt = () => {
  return (
    <div className="fixed bottom-0 bg-[#415d43] h-[80px] w-full flex justify-center items-center">
      <div className="space-x-9">
        <button className="border border-white  rounded-full py-2 px-5 text-white font-bold">
          Log in
        </button>

        <SignUpModal />
      </div>
    </div>
  );
};

export default SignUpPrompt;
