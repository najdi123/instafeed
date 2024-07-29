import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../redux/actions/postActions";
import { RootState, AppDispatch } from "../../redux/store";
import axios from "axios";
import Post from "./Post";
import { Post as PostType } from "../../redux/reducers/postReducer";

const PostList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const posts = useSelector((state: RootState) => state.posts.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<PostType[]>(
          "http://localhost:5000/posts"
        );
        dispatch(setPosts(response.data));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [dispatch]);

  return (
    <div className="space-y-8">
      {posts.map((post: PostType) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
