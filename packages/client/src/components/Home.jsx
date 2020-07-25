import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import {LineItem} from './LineItem'

function Home ({ getPosts, posts }) {
    useEffect(() => {
        getPosts()
    }, [])
    return (
        <ul>
            {posts.map((p, i) => <LineItem key={i}>{p.title}</LineItem>)}
        </ul>
    )
}

Home.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(actions.getPosts())
})

const mapStateToProps = (state) => ({
    posts: state.posts
})

export default connect(mapStateToProps,  mapDispatchToProps)(Home)
