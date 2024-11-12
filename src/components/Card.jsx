import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ user }) => {
  const navigate = useNavigate();
  const { avatar, email, first_name, last_name } = user;
  return (
    <div className="flex flex-col justify-center items-center gap-4 border-4 border-black rounded-3xl w-80 py-4">
      <h1>
        Name: {first_name} {last_name}
      </h1>
      <img src={avatar} alt="userAvatar" />
      <p>Email ID: {email}</p>
    </div>
  );
};

export default Card;
