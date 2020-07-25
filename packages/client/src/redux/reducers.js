import { SET_POSTS } from './types'

const initialState = {
    posts: []
}

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_POSTS:
        return {
            posts: action.payload
        }
    default:
        return state
    }
}


