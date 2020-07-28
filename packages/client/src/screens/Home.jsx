import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import * as actions from '../redux/actions'
import { Loading, SearchBar } from '../components'
import { PostList } from '../containers'

function Home({ getPosts, posts, loading, init, filter }) {

    useEffect(() => {
        if (!init) getPosts()
    }, [])

    const postsToShow =
        filter.length >= 1
            ? _.filter(posts, (post) => post.title.indexOf(filter) > -1)
            : posts

    const uniqueUsers = Object.keys(_.groupBy(postsToShow, 'userId')).length || 0

    return loading ? (
        <Loading />
    ) : (
        <div className='box'>
            <SearchBar numFound={postsToShow.length} uniqueUsers={uniqueUsers}/>
            <PostList posts={postsToShow} />
        </div>
    )
}

Home.propTypes = {
    getPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    init: PropTypes.bool.isRequired,
    filter: PropTypes.string.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    getPosts: () => dispatch(actions.getPosts()),
})

const mapStateToProps = (state) => ({
    ...state,
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
