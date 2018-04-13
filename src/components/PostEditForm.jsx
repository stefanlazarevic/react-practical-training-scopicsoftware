import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from '../sass/PostForm.sass';

import PostForm from './PostForm.jsx';

class PostEditForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PostForm legend="Edit post"
                      title={ this.props.title }
                      content={ this.props.content }
                      resetText="Cancel"
                      onFormSubmit={ this.props.onFormSubmit }
                      onFormReset={ this.props.onFormReset }
                      onInputChange={ this.props.onInputChange }
                      formActionText="Update" />
        );
    }
}

PostEditForm.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default PostEditForm;
