"use client";
import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

type StoreProviderProps = {
  children: React.ReactNode;
};

export default StoreProvider;
