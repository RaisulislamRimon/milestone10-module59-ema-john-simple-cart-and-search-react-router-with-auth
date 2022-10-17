import React, { useContext } from "react";
import { AuthContext } from "../../contexts/UserContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>This is About</h1>
      <p>{user?.email}</p>
    </div>
  );
};

export default About;
