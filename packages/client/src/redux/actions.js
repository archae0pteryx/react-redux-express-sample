import axios from 'axios'
import { SET_POSTS, TOGGLE_LOADING, INIT, SAVE_POST, SET_FILTER } from './types'


export const getPosts = () => async (dispatch) => {
    dispatch({
        type: TOGGLE_LOADING,
        payload: true
    })
    dispatch({
        type: INIT,
        payload: true
    })
    console.log('fetching data...')
    const { data } = await axios.get('http://localhost:3001/posts')

    dispatch({
        type: SET_POSTS,
        payload: data.data || []
    })

    dispatch({
        type: TOGGLE_LOADING,
        payload: false
    })
}

export const savePost = (post) => (dispatch) => {
    dispatch({
        type: SAVE_POST,
        payload: [post]
    })
}

export const setFilter = (term) => (dispatch) => {
    dispatch({
        type: SET_FILTER,
        payload: term
    })
}
