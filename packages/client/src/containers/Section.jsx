import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Title, Body, Meta } from '../components/section'
import { Button } from '../components/common'

export function Section({ post }) {
    const { title, body, id, userId } = post
    return (
        <div className='box'>
            <Title>{title}</Title>
            <Body>{body}</Body>
            <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to={{
                    pathname: '/edit',
                    state: { post },
                }}
            >
                <Button extraStyle='is-small is-info is-light'>edit</Button>
            </Link>
            <Meta id={id} userId={userId} />
        </div>
    )
}

Section.propTypes = {
    post: PropTypes.object.isRequired,
}
