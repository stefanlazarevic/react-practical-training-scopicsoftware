import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import style from '../sass/Post.sass';

import PostEditForm from './PostEditForm.jsx';

import { updatePost } from '../actions/posts';
import { removePost } from '../actions/posts';

class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            inEditMode: false,
            title: this.props.title,
            content: this.props.content
        };

        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handlePostDelete = this.handlePostDelete.bind(this);
    }

    toggleEditMode() {
        this.setState({
            inEditMode: !this.state.inEditMode,
            title: this.props.title,
            content: this.props.content
        });
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        const updatedPost = {
            id: this.props.id,
            title: this.state.title,
            body: this.state.content,
        };

        this.props.updatePost(updatedPost);

        this.toggleEditMode();
    }

    handlePostDelete() {
        this.props.removePost(this.props.id);
    }

    render() {
        if (this.state.inEditMode) {
            return (
                <article className="post">
                    <PostEditForm title={ this.state.title }
                                  content={ this.state.content }
                                  onFormReset={ this.toggleEditMode }
                                  onInputChange={ this.handleInputChange }
                                  onFormSubmit={ this.handleFormSubmit } />
                </article>
            );
        }

        return (
            <article className="post">
                <header>
                    <h1 className="post__title">{ this.props.title }</h1>
                </header>
                <p className="post__content">{ this.props.content }</p>
                <div className="post__actions">
                    <button className="post__edit" title="edit" onClick={ this.toggleEditMode }>✎</button>
                    <button className="post__remove" title="remove" onClick={ this.handlePostDelete }>✖</button>
                </div>
            </article>
        );
    };
};

Post.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export default connect(null, { updatePost, removePost })(Post);
