import React from "react";

export const AuthContext = React.createContext();

const UserContext = ({ children }) => {
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default UserContext;
