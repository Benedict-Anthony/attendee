import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Container = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      navigate("/login");
    }
  }, []); // eslint-disable-line
  return <main className="container pl-32">{children}</main>;
};

export default Container;
