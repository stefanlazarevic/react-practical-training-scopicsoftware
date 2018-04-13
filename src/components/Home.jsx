import React from 'react';
import style from '../sass/Home.sass';

const Home = () => (
    <div>
        <h1>Welcome to my blog posts project.</h1>
        <p>This is a overall of what I learned from Treehouse Learn React path.</p>
        <p>Following topics are covered withing this project:</p>
        <ul className="intro__list">
            <li>Setup custom <code>webpack</code> using <code>babel, react, sass, webpack-dev-server</code> and <code>browser-sync</code> for React Project.</li>
            <li>How to create React components <small>(stateful and stateless)</small></li>
            <li>What are props and how to pass them to child components.</li>
            <li>React Routing <small>(BrowserRouter, Route, Switch, Redirect, NavLink)</small></li>
            <li>Differences between Application state and Local <small>(component)</small> state</li>
            <li>How to validate component props using <code>PropTypes</code></li>
            <li>How to set default props using <code>defaultProps</code></li>
            <li>How to handle React events such as <code>onClick</code> and <code>onChange</code></li>
            <li>React lifecycle events such as <code>componentWillMount, componentDidMount, componentWillUnmount</code> etc.</li>
            <li>Data fetching with React using ES6 native <code>fetch</code> function.</li>
            <li>How to integrate Redux <code>dev tools</code></li>
            <li>React component conditional rendering.</li>
            <li>How to perform CRUD operations with React.</li>
            <li>What are Redux, Actions, ActionTypes, Middlewares, Reducers, Storage and Provider.</li>
            <li>How to add animations to components using <code>react-addons-css-transition-group</code></li>
        </ul>
    </div>
);

export default Home;
