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
    payload: Like;
}

interface RemoveLikeAction {
    type: typeof REMOVE_LIKE;
    payload: number;
}

export type PostActionTypes =
    | SetPostsAction
    | AddCommentAction
    | RemoveCommentAction
    | AddLikeAction
    | RemoveLikeAction;

const initialState: PostState = {
    posts: []
};

const postReducer = (
    state = initialState,
    action: PostActionTypes
): PostState => {
    switch (action.type) {
        case SET_POSTS:
            return { ...state, posts: action.payload };
        case ADD_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload.id
                        ? { ...post, comments: [...post.comments, action.payload] }
                        : post
                )
            };
        case REMOVE_COMMENT:
            return {
                ...state,
                posts: state.posts.map(post => ({
                    ...post,
                    comments: post.comments.filter(comment => comment.id !== action.payload)
                }))
            };
        case ADD_LIKE:
            return {
                ...state,
                posts: state.posts.map(post =>
                    post.id === action.payload.userId
                        ? { ...post, likes: [...post.likes, action.payload] }
                        : post
                )
            };
        case REMOVE_LIKE:
            return {
                ...state,
                posts: state.posts.map(post => ({
                    ...post,
                    likes: post.likes.filter(like => like.id !== action.payload)
                }))
            };
        default:
            return state;
    }
};

export default postReducer;
