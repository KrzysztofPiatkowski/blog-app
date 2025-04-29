// postsRedux.js

// helper
const createActionName = actionName => `app/posts/${actionName}`;

// selectors
export const getAllPosts = state => state.posts;
export const getPostById = (state, id) => state.posts.find(post => post.id.toString() === id.toString());

// actions
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const removePost = id => ({ type: REMOVE_POST, payload: id });
export const addPost = newPost => ({ type: ADD_POST, payload: newPost });
export const editPost = updatedPost => ({ type: EDIT_POST, payload: updatedPost });

// reducer
const postsReducer = (statePart = [], action) => {
  switch (action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, action.payload];
    case EDIT_POST:
      return statePart.map(post =>
        post.id === action.payload.id ? { ...post, ...action.payload } : post
      );
    default:
      return statePart;
  }
};

export default postsReducer;
