import { Post, Comment, Like, SET_POSTS, ADD_COMMENT, REMOVE_COMMENT, ADD_LIKE, REMOVE_LIKE, PostActionTypes } from '../reducers/postReducer';

export const setPosts = (posts: Post[]): PostActionTypes => ({
    type: SET_POSTS,
    payload: posts,
});

export const addComment = (comment: Comment): PostActionTypes => ({
    type: ADD_COMMENT,
    payload: comment,
});

export const removeComment = (commentId: number): PostActionTypes => ({
    type: REMOVE_COMMENT,
    payload: commentId,
});

export const addLike = (like: Like): PostActionTypes => ({
    type: ADD_LIKE,
    payload: like,
});

export const removeLike = (likeId: number): PostActionTypes => ({
    type: REMOVE_LIKE,
    payload: likeId,
});
