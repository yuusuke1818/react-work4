import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const test = "ユースケ";
  return (
    <UserContext.Provider value={{ test }}>{children}</UserContext.Provider>
  );
};
