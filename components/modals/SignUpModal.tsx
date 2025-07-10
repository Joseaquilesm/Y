"use client";

import React, { useEffect, useState } from "react";
import { Modal } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { closeSignUpModal, openSignUpModal } from "@/redux/slices/modalSlice";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/firebase";
import { signInUser } from "@/redux/slices/userSlice";

const SignUpModal = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // const [isOpen, setIsOpen] = useState(false);

  //   const closeModal = () => {
  //     setIsOpen(false);
  //   };

  //   const openModal = () => {
  //     setIsOpen(true);
  //   };

  //use the reducers with selector
  const isOpen = useSelector((state: RootState) => {
    return state.modals.signUpModalOpen;
  });
  // we need to use dispatch to send actions to our redux store
  const dispatch: AppDispatch = useDispatch();

  async function handleSignUp() {
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;

      //handle user on redux
      dispatch(
        signInUser({
          name: "",
          username: currentUser.email!.split("@")[0],
          email: currentUser.email!,
          uid: currentUser.uid!,
        })
      );
    });

    //unsubscribe when unmount
    return unsubscribe;
  }, []);

  return (
    <>
      <button
        onClick={() => dispatch(openSignUpModal())}
        className=" bg-white rounded-full py-2 px-5 text-[#415d43] font-bold"
      >
        Sign up
      </button>

      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
        className="flex justify-center items-center"
      >
        <div className="w-full h-full bg-white  sm:w-[500px] sm:h-fit sm:rounded-lg outline-none  ">
          <form action="" className="pt-10 pb-14 px-4 sm:px-14">
            <h1 className="font-bold text-2xl mb-10 text-center">
              Create your account
            </h1>
            <div className="w-full space-y-3 ">
              <input
                type="text"
                placeholder="Name"
                className=" w-full h-[48px] border border-gray-200 p-4 rounded-lg outline-none focus:border-[#415d43] transition"
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                className=" w-full h-[48px] border border-gray-200 p-4 rounded-lg outline-none focus:border-[#415d43] transition"
              />
              <div className="flex items-center w-full h-[48px] border border-gray-200  rounded-lg outline-none overflow-hidden focus-within:border-[#415d43] transition pr-3">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  className="outline-none w-full h-full p-4 "
                />
                <div
                  className="w-7 h-7 text-gray-400 cursor-pointer "
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </div>
              </div>
              <div className="flex flex-col w-full pt-7 space-y-4">
                <button
                  type="button"
                  onClick={() => handleSignUp()}
                  className=" border border-[#415d43] selection:bg-white rounded-full py-2 px-5 text-[#415d43] font-bold"
                >
                  Sign up
                </button>
                <button
                  type="button"
                  className=" bg-[#415d43]  rounded-full py-2 px-5 text-white font-bold"
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default SignUpModal;
