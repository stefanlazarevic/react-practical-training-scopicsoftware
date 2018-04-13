import * as postsActionTypes from '../actiontypes/posts';

const fetchURL =  'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = () => dispatch => {
    console.log('Fetching Posts...');
    fetch(fetchURL)
        .then(res => res.json())
        .then(posts => {
            dispatch({
                type: postsActionTypes.FETCH_POSTS,
                payload: posts,
            });
        })
        .catch(err => {
            console.error('Error occurred when fetching posts: ', err);
            dispatch({
                type: postsActionTypes.FETCH_POSTS,
                payload: [],
            });
        });
};

export const getPosts = () => dispatch => {
    dispatch({
        type: postsActionTypes.GET_POSTS,
        payload: null,
    });
};

export const createPost = postData => dispatch => {
    console.log('Creating new post...');
    fetch(fetchURL, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(postData),
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: postsActionTypes.CREATE_POST,
        payload: post,
    }))
    .catch(err => {
        console.error('Error occurred when creating new post: ', err);
        dispatch({
            type: postsActionTypes.CREATE_POST,
            payload: {
                title: 'Error',
                content: 'Error'
            }
        })
    })
}

export const updatePost = newData => dispatch => {
    dispatch({
        type: postsActionTypes.UPDATE_POST,
        payload: newData,
    });
};

export const removePost = id => dispatch => {
    dispatch({
        type: postsActionTypes.DELETE_POST,
        payload: id
    });
};
