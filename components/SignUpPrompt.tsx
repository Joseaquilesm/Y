import React from "react";
import SignUpModal from "./modals/SignUpModal";
import LogInModal from "./modals/LogInModal";

const SignUpPrompt = () => {
  return (
    <div className="fixed bottom-0 bg-[#415d43] h-[80px] w-full flex justify-center items-center">
      <div className="space-x-9">
        <LogInModal />
        <SignUpModal />
      </div>
    </div>
  );
};

export default SignUpPrompt;
