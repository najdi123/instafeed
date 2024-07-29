import React from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import Comment from "./Comment";
import { Comment as CommentType } from "../../redux/reducers/postReducer";

interface CommentsBottomSheetProps {
  isOpen: boolean;
  onDismiss: () => void;
  comments: CommentType[];
  handleRemoveComment: (commentId: number) => void;
}

const CommentsBottomSheet: React.FC<CommentsBottomSheetProps> = ({
  isOpen,
  onDismiss,
  comments,
  handleRemoveComment,
}) => {
  console.log("Rendering CommentsBottomSheet:", { isOpen, comments });

  if (!comments) {
    console.warn("Comments are undefined, initializing to empty array.");
    comments = [];
  }

  return (
    <BottomSheet open={isOpen} onDismiss={onDismiss}>
      <div className="p-4">
        {comments.length === 0 && <p>No comments available.</p>}
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            handleRemoveComment={handleRemoveComment}
          />
        ))}
      </div>
    </BottomSheet>
  );
};

export default CommentsBottomSheet;
