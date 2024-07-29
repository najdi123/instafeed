import React from "react";
import { Post as PostType } from "../../redux/reducers/postReducer";
import User from "./User";
import CommentsBottomSheet from "./CommentsBottomSheet";

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleRemoveComment = (commentId: number) => {
    console.log(`Removing comment with ID: ${commentId}`);
    // Implement the comment removal logic here
  };

  console.log("Rendering Post:", post);

  return (
    <div className="bg-white border rounded-lg shadow-md">
      {/* User Info */}
      <div className="flex items-center p-4">
        <User user={post.user} />
      </div>
      {/* Post Image */}
      {post.image && <img src={post.image} alt="Post" />}
      {/* Post Actions */}
      <div className="p-4 flex items-center justify-between">
        <div>
          <button className="text-red-500">❤️</button>
          <button className="ml-4" onClick={() => setIsOpen(true)}>
            💬
          </button>
        </div>
        <span>{post.likes?.length || 0} likes</span>
      </div>
      {/* Post Caption */}
      <div className="p-4">
        <span className="font-bold">{post.user.name}</span> {post.caption}
      </div>
      {/* View Comments Button */}
      <div className="p-4">
        <button className="text-gray-500" onClick={() => setIsOpen(true)}>
          View all {post.comments?.length || 0} comments
        </button>
      </div>
      {/* Comment Input */}
      <div className="p-4 border-t">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full p-2"
        />
      </div>
      <CommentsBottomSheet
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
        comments={post.comments || []}
        handleRemoveComment={handleRemoveComment}
      />
    </div>
  );
};

export default Post;
