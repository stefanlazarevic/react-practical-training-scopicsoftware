import * as postsActionTypes from '../actiontypes/posts';

const initialState = {
    posts: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case postsActionTypes.FETCH_POSTS: // FETCH_POSTS
            return { posts: action.payload };
        case postsActionTypes.GET_POSTS: // GET_POSTS
            return { posts: [...state.posts] };
        case postsActionTypes.CREATE_POST: // CREATE_POST
            return {
                posts: [
                    action.payload,
                    ...state.posts
                ]
            }
        case postsActionTypes.UPDATE_POST: // UPDATE_POST
            return { posts: state.posts.map(post => post.id === action.payload.id ? action.payload : post) }
        case postsActionTypes.DELETE_POST: // DELETE_POST
            return { posts: state.posts.filter(post => post.id !== action.payload), }
        default: return state;
    }
};
