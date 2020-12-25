import { 
    POSTS_GET_ALL,
    POSTS_GET_ALL_ERROR,
    POSTS_SET_SHOW
} from '@redux/types';

const initialState = {
    status: 'idle',
    data: [],
    show: -1
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case POSTS_GET_ALL:
            return {
                ...state,
                status: 'success',
                data: action.payload
            }
        case POSTS_GET_ALL_ERROR:
            return {
                ...state,
                status: 'unsuccess'
            }
        case POSTS_SET_SHOW:
            return {
                ...state,
                show: action.payload
            }
        default:
            return state;
    }
}