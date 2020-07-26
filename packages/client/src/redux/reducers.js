import { SET_POSTS, TOGGLE_LOADING, INIT, SAVE_POST, SET_FILTER } from './types'
import _ from 'lodash'

const initialState = {
    posts: [],
    filter: '',
    loading: false,
    init: false
}

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_POSTS:
        return {
            ...state,
            posts: action.payload,
        }
    case SAVE_POST:
        return {
            ...state,
            posts: _.unionBy(action.payload, state.posts, 'id')
        }
    case TOGGLE_LOADING:
        return {
            ...state,
            loading: action.payload,
        }
    case INIT:
        return {
            ...state,
            init: true
        }
    case SET_FILTER:
        return {
            ...state,
            filter: action.payload
        }
    default:
        return state
    }
}
