import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import * as actions from '../redux/actions'

function Post({ location, savePost }) {
    const [saved, setSaved] = useState(false)
    const { post } = location.state
    const history = useHistory()

    const handleSave = (values, setSubmitting) => {
        const newPost = { ...post, ...values }
        savePost(newPost)
        setSubmitting(false)
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 1000)
    }

    return (
        <div>
            <button onClick={() => history.goBack()}>back</button>
            <Formik
                initialValues={{ title: post.title, body: post.body }}
                onSubmit={(values, { setSubmitting }) => {
                    handleSave(values, setSubmitting)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <Field type='text' name='title' />
                        <Field type='text' name='body' />
                        <button type='submit' disabled={isSubmitting}>
                            save
                        </button>
                        {saved && <h2>Saved!</h2>}
                    </Form>
                )}
            </Formik>
        </div>
    )
}

Post.propTypes = {
    location: PropTypes.object.isRequired,
    savePost: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    savePost: (state) => dispatch(actions.savePost(state)),
})

export default connect(null, mapDispatchToProps)(Post)
