import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import style from '../sass/App.sass';

import Header from './Header.jsx';
import Home from './Home.jsx';
import Posts from './Posts.jsx';
import Post from './Post.jsx';
import NotFound from './NotFound.jsx';

import { fetchPosts } from '../actions/posts';

import uniqueId from '../helpers/uniqueId';

class App extends Component {

    constructor(props) {
        super(props);

        this.generateNewId = uniqueId().bind(this);
    }

    componentWillMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ Home } />
                        <Route path="/home" render={ () => <Redirect to='/' /> } />
                        <Route path="/posts" render={ () => <Posts generateNewId={ this.generateNewId }/> } />
                        <Route component={ NotFound } />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps, { fetchPosts })(App);
