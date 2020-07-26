import React from 'react'
import PropTypes from 'prop-types'
import { Section } from './Section'

export function PostList({ posts }) {
    return posts ? (
        <div>
            {posts && posts.map((p, i) => {
                return <Section key={i} post={p} />
            })}
        </div>
    ) : <h1>No posts to show</h1>
}

PostList.propTypes = {
    posts: PropTypes.array
}
