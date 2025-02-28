// components/ClientWrapper.js
"use client"
import React from "react";
import useLoading from "../components/useLoading";
import LoadingScreen from "../components/LoadingScreen";

const ClientWrapper = ({ children }) => {
  const loading = useLoading();

  return (
    <>
      {loading && <LoadingScreen />}
      {children}
    </>
  );
};

export default ClientWrapper;
