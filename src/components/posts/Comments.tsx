import React from "react";
import { Comment as CommentType } from "../../redux/reducers/postReducer";
import Comment from "./Comment";

interface CommentsProps {
  comments: CommentType[];
  handleAddComment: (postId: number, text: string) => void;
  handleRemoveComment: (commentId: number) => void;
}

const Comments: React.FC<CommentsProps> = ({
  comments,
  handleAddComment,
  handleRemoveComment,
}) => {
  return (
    <div>
      {comments.map((comment) => (
        <Comment
          key={comment.id}
          comment={comment}
          handleRemoveComment={handleRemoveComment}
        />
      ))}
      {/* Comment Input */}
      <div className="p-4 border-t">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full p-2"
        />
      </div>
    </div>
  );
};

export default Comments;
