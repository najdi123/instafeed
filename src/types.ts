// Define Comment interface
export interface Like {
    id: number;
    userId: number;
}
export interface Comment {
    id: number;
    user: User;
    text: string; // Ensure 'body' is included in the Comment interface
    replies: Comment[];
    likes: Like[];
}

// Ensure other types are defined correctly
export interface User {
    id: number;
    name: string;
    avatar: string;
}

export interface Post {
    id: number;
    user: User;
    image: string;
    caption: string;
    likes: Like[];
    comments: Comment[];
}

export interface PostState {
    posts: Post[] | [];
}

// Define action types
export const SET_POSTS = 'SET_POSTS';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const ADD_LIKE = 'ADD_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

// Define action interfaces
interface SetPostsAction {
    type: typeof SET_POSTS;
    payload: Post[];
}

interface AddCommentAction {
    type: typeof ADD_COMMENT;
    payload: Comment;
}

interface RemoveCommentAction {
    type: typeof REMOVE_COMMENT;
    payload: number;
}

interface AddLikeAction {
    type: typeof ADD_LIKE;
    payload: { postId: number, like: Like };
}

interface RemoveLikeAction {
    type: typeof REMOVE_LIKE;
    payload: { postId: number, userId: number };
}

export type PostActionTypes =
    | SetPostsAction
    | AddCommentAction
    | RemoveCommentAction
    | AddLikeAction
    | RemoveLikeAction;
