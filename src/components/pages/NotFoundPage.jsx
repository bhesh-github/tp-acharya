import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 1000);
  return (
    <div style={{ height: "400px" }}>
      <br />
      <h1 style={{ color: "#000", fontWeight: "700" }}>Page Not Found 404</h1>
      <br />
      <br />
    </div>
  );
};

export default NotFoundPage;
