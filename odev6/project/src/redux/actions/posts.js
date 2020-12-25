import { POSTS_GET_ALL, POSTS_GET_ALL_ERROR, POSTS_SET_SHOW } from '@redux/types';
import { $get } from '@app/api';

export const postsGetAll = () => {
    return async dispatch => {
        const result = await $get('/posts');

        if (result !== false) {
            dispatch({
                type: POSTS_GET_ALL,
                payload: result
            });
        } else {
            dispatch({
                type: POSTS_GET_ALL_ERROR
            });
        }
    }
}

export const postsSetShow = id => dispatch => dispatch({ type: POSTS_SET_SHOW, payload: id });