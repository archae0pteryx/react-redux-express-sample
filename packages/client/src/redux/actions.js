import axios from 'axios'
import { SET_POSTS, TOGGLE_LOADING } from './types'


export const getPosts = () => async (dispatch) => {
    dispatch({
        type: TOGGLE_LOADING,
        payload: true
    })
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
