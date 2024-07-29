import React from "react";
import { Comment as CommentType } from "../../redux/reducers/postReducer";
import User from "./User";

interface CommentProps {
  comment: CommentType;
  handleRemoveComment: (commentId: number) => void;
}

const Comment: React.FC<CommentProps> = ({ comment, handleRemoveComment }) => {
  console.log("🚀 ~ comment:", comment);
  //   console.log("Rendering Comment:", comment);

  if (!comment) {
    return null;
  }

  return (
    <div className="p-2 border-t border-gray-200 dark:border-gray-700 flex items-center">
      <img
        src={comment.user.avatar}
        alt={comment.user.name}
        className="w-10 h-10 rounded-full"
      />
      <div className="w-full px-5">
        <p>{comment.user.name}</p>
        <p>{comment.text}</p>
        <p>reply</p>
      </div>
      <button className="m-5" onClick={() => handleRemoveComment(comment.id)}>
        Remove
      </button>
      <div className="flex flex-col justify-center">
        <button className="text-red-500">❤️</button>
        <p className="min-w-12">{comment.likes?.length | 0} likes</p>
      </div>
    </div>
  );
};

export default Comment;
