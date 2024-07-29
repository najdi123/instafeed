import React from "react";
import { User as UserType } from "../../redux/reducers/postReducer";

interface UserProps {
  user: UserType;
}

const User: React.FC<UserProps> = ({ user }) => {
  //   console.log("Rendering User:", user);
  return (
    <div className="flex items-center p-4">
      <img
        src={user.avatar}
        alt={user.name}
        className="w-10 h-10 rounded-full"
      />
      <span className="ml-4 font-bold">{user.name}</span>
    </div>
  );
};

export default User;
