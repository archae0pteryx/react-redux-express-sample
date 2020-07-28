import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'
import * as actions from '../redux/actions'
import { Button, Input, TextArea } from '../components/common'

function Edit({ location, savePost, allPosts }) {
    const [saved, setSaved] = useState(false)
    const [post, setPost] = useState(
        (location.state && location.state.post) || {}
    )
    const history = useHistory()

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault()
            savePost(post)
            setSaved(true)
            setTimeout(() => {
                setSaved(false)
            }, 1000)
        },
        [post]
    )

    const handleChange = ({ target }) => {
        setPost((prevValues) => ({
            ...prevValues,
            [target.name]: target.value,
        }))
    }

    const handleTitleChange = ({ target }) => {
        const found = findByTitle(target.value)
        if (found) {
            setPost(found)
        } else {
            setPost((prevValues) => ({
                ...prevValues,
                [target.name]: target.value,
            }))
        }
    }

    const findByTitle = (title) => {
        return _.find(allPosts, ['title', title]) || false
    }

    return (
        <div className='box'>
            <form className='box'>
                <Input
                    name='title'
                    placeholder='Title Text'
                    label='Title'
                    extraStyle='mt-1'
                    handleChange={handleTitleChange}
                    value={post.title}
                />
                <TextArea
                    name='body'
                    label='Body'
                    placeholder='Body Text'
                    extraStyle='mt-1'
                    handleChange={handleChange}
                    value={post.body}
                />
            </form>
            <div className='buttons are-small is-right'>
                <Button
                    onClick={() => history.goBack()}
                    extraStyle='is-outline is-danger'
                >
                    Cancel
                </Button>
                {saved ? (
                    <Button extraStyle='is-disabled'>Saved</Button>
                ) : (
                    <Button extraStyle='is-success' type='submit' onClick={handleSubmit}>
                        Save
                    </Button>
                )}
            </div>
        </div>
    )
}

Edit.propTypes = {
    location: PropTypes.object.isRequired,
    savePost: PropTypes.func.isRequired,
    allPosts: PropTypes.array.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    savePost: (state) => dispatch(actions.savePost(state)),
})

const mapStateToProps = (state) => ({
    allPosts: state.posts,
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit)
