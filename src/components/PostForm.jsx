import React from 'react';
import PropTypes from 'prop-types';

import style from '../sass/PostForm.sass';

const PostForm = props => (
    <form onSubmit={ props.onFormSubmit }>
        <fieldset>
            <legend>{ props.legend }</legend>
            <div className="form__group">
                <label htmlFor="title" className="form__label">Title <abbr title="required" className="text--danger">*</abbr></label>
                <input type="text" name="title" id="title" placeholder="My Awesome new title." className="form__input" value={ props.title } onChange={ props.onInputChange } />
            </div>
            <div className="form__group">
                <label htmlFor="content" className="form__label">Content <abbr title="required" className="text--danger">*</abbr></label>
                <textarea name="content" id="content" placeholder="Start writing your new blog post." className="form__textarea" value={ props.content } onChange={ props.onInputChange }></textarea>
            </div>
            <div className="form__group">
                <button type="submit" className="form__button">{ props.formActionText }</button>
                <button type="reset" className="form__button text--danger" onClick={ props.onFormReset }>{ props.resetText }</button>
            </div>
        </fieldset>
    </form>
);

PostForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
    legend: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    onInputChange: PropTypes.func.isRequired,
    onFormReset: PropTypes.func.isRequired,
    resetText: PropTypes.string,
    formActionText: PropTypes.string
};

PostForm.defaultProps = {
    legend: 'Post Form',
    resetText: 'Cancel',
    formActionText: 'Post'
}

export default PostForm;
