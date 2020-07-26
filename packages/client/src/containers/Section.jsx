import React from 'react'
import PropTypes from 'prop-types'
import { Title, Body, Meta } from '../components/section'
import { Link } from 'react-router-dom'

export function Section({ post }) {
    const { title, body, id, userId } = post
    return (
        <Link to={{
            pathname: `/post/${id}`,
            state: { post }
        }}>
            <section>
                <Title title={title} />
                <Body body={body} />
                <Meta id={id} userId={userId} />
            </section>
        </Link>
    )
}

Section.propTypes = {
    post: PropTypes.object.isRequired,
}
