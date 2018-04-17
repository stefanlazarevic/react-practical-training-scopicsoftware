webpackJsonp([0],{

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(124);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./App.sass", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./App.sass");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, "*,\n*:before,\n*:after {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-family: Roboto;\n  font-size: 1em;\n  background-color: #fafafa; }\n\nul {\n  padding-left: 0;\n  list-style: none; }\n\n.container {\n  width: 100%;\n  padding-left: 15px;\n  padding-right: 15px;\n  margin: 0 auto; }\n  @media screen and (min-width: 1000px) {\n    .container {\n      width: 1000px; } }\n\nabbr {\n  text-decoration: none;\n  cursor: help; }\n\ntextarea {\n  resize: vertical;\n  min-height: 90px; }\n\nlabel {\n  cursor: pointer; }\n\nfieldset {\n  border-color: #fafafa; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin: 0; }\n", ""]);

// exports


/***/ }),

/***/ 125:
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(127);

var _Header2 = _interopRequireDefault(_Header);

var _reactRouterDom = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
    return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement(
            'nav',
            { className: 'navigation__main' },
            _react2.default.createElement(
                'ul',
                { className: 'navigation-main__list' },
                _react2.default.createElement(
                    'li',
                    { className: 'navigation-main-list__item' },
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { exact: true, to: '/' },
                        'Home'
                    )
                ),
                _react2.default.createElement(
                    'li',
                    { className: 'navigation-main-list__item' },
                    _react2.default.createElement(
                        _reactRouterDom.NavLink,
                        { to: '/posts' },
                        'Posts'
                    )
                )
            )
        )
    );
};

exports.default = Header;

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(128);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Header.sass", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Header.sass");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 128:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".header {\n  width: 100%;\n  border-bottom: 1px solid silver;\n  margin-bottom: 20px; }\n\n.navigation__main {\n  text-align: center; }\n\n.navigation-main__list {\n  width: 100%; }\n\n.navigation-main-list__item {\n  display: inline-block;\n  margin: 0 10px; }\n  .navigation-main-list__item a {\n    color: #999;\n    text-decoration: none; }\n    .navigation-main-list__item a:hover {\n      text-decoration: underline; }\n  .navigation-main-list__item a.active {\n    color: #333; }\n", ""]);

// exports


/***/ }),

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Home = __webpack_require__(130);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h1',
            null,
            'Welcome to my blog posts project.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'This is a overall of what I learned from Treehouse Learn React path.'
        ),
        _react2.default.createElement(
            'p',
            null,
            'Following topics are covered withing this project:'
        ),
        _react2.default.createElement(
            'ul',
            { className: 'intro__list' },
            _react2.default.createElement(
                'li',
                null,
                'Setup custom ',
                _react2.default.createElement(
                    'code',
                    null,
                    'webpack'
                ),
                ' using ',
                _react2.default.createElement(
                    'code',
                    null,
                    'babel, react, sass, webpack-dev-server'
                ),
                ' and ',
                _react2.default.createElement(
                    'code',
                    null,
                    'browser-sync'
                ),
                ' for React Project.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'How to create React components ',
                _react2.default.createElement(
                    'small',
                    null,
                    '(stateful and stateless)'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'What are props and how to pass them to child components.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'React Routing ',
                _react2.default.createElement(
                    'small',
                    null,
                    '(BrowserRouter, Route, Switch, Redirect, NavLink)'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'Differences between Application state and Local ',
                _react2.default.createElement(
                    'small',
                    null,
                    '(component)'
                ),
                ' state'
            ),
            _react2.default.createElement(
                'li',
                null,
                'How to validate component props using ',
                _react2.default.createElement(
                    'code',
                    null,
                    'PropTypes'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'How to set default props using ',
                _react2.default.createElement(
                    'code',
                    null,
                    'defaultProps'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'How to handle React events such as ',
                _react2.default.createElement(
                    'code',
                    null,
                    'onClick'
                ),
                ' and ',
                _react2.default.createElement(
                    'code',
                    null,
                    'onChange'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'React lifecycle events such as ',
                _react2.default.createElement(
                    'code',
                    null,
                    'componentWillMount, componentDidMount, componentWillUnmount'
                ),
                ' etc.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'Data fetching with React using ES6 native ',
                _react2.default.createElement(
                    'code',
                    null,
                    'fetch'
                ),
                ' function.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'How to integrate Redux ',
                _react2.default.createElement(
                    'code',
                    null,
                    'dev tools'
                )
            ),
            _react2.default.createElement(
                'li',
                null,
                'React component conditional rendering.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'How to perform CRUD operations with React.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'What are Redux, Actions, ActionTypes, Middlewares, Reducers, Storage and Provider.'
            ),
            _react2.default.createElement(
                'li',
                null,
                'How to add animations to components using ',
                _react2.default.createElement(
                    'code',
                    null,
                    'react-addons-css-transition-group'
                )
            )
        )
    );
};

exports.default = Home;

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(131);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Home.sass", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Home.sass");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".intro__list {\n  list-style: disc; }\n  .intro__list li {\n    margin-bottom: 10px; }\n", ""]);

// exports


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _reactAddonsCssTransitionGroup = __webpack_require__(51);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _Animation = __webpack_require__(143);

var _Animation2 = _interopRequireDefault(_Animation);

var _PostCreateForm = __webpack_require__(145);

var _PostCreateForm2 = _interopRequireDefault(_PostCreateForm);

var _PostEditForm = __webpack_require__(58);

var _PostEditForm2 = _interopRequireDefault(_PostEditForm);

var _Post = __webpack_require__(59);

var _Post2 = _interopRequireDefault(_Post);

var _posts = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Posts = function (_Component) {
    _inherits(Posts, _Component);

    function Posts(props) {
        _classCallCheck(this, Posts);

        return _possibleConstructorReturn(this, (Posts.__proto__ || Object.getPrototypeOf(Posts)).call(this, props));
    }

    _createClass(Posts, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.getPosts();
        }
    }, {
        key: 'render',
        value: function render() {
            var posts = this.props.posts;


            var PostsComponent = posts.map(function (post, index) {
                return _react2.default.createElement(_Post2.default, { key: post.id, id: post.id, title: post.title, content: post.body });
            });

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_PostCreateForm2.default, { generateNewId: this.props.generateNewId }),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactAddonsCssTransitionGroup2.default,
                        { transitionName: 'slide',
                            transitionEnterTimeout: 500,
                            transitionLeaveTimeout: 1000 },
                        PostsComponent
                    )
                )
            );
        }
    }]);

    return Posts;
}(_react.Component);

Posts.propTypes = {
    posts: _propTypes2.default.array.isRequired,
    getPosts: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
    return { posts: state.posts };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { getPosts: _posts.getPosts })(Posts);

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(144);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Animation.sass", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Animation.sass");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".slide-enter {\n  transform: translateX(-30%); }\n\n.slide-enter.slide-enter-active {\n  transform: translateX(0);\n  transition: transform .5s ease-out; }\n\n.slide-leave {\n  overflow: hidden;\n  background: #f17777; }\n  .slide-leave * {\n    display: none !important; }\n\n.slide-leave.slide-leave-active {\n  padding: 0 15px;\n  animation-name: example;\n  animation-duration: 1s; }\n\n@keyframes example {\n  from {\n    height: 100px; }\n  to {\n    height: 0; } }\n", ""]);

// exports


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _posts = __webpack_require__(16);

var _PostForm = __webpack_require__(55);

var _PostForm2 = _interopRequireDefault(_PostForm);

var _uniqueId = __webpack_require__(57);

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostCreateForm = function (_Component) {
    _inherits(PostCreateForm, _Component);

    function PostCreateForm(props) {
        _classCallCheck(this, PostCreateForm);

        var _this = _possibleConstructorReturn(this, (PostCreateForm.__proto__ || Object.getPrototypeOf(PostCreateForm)).call(this, props));

        _this.initialState = {
            title: '',
            content: ''
        };

        _this.state = _this.initialState;

        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleFormReset = _this.handleFormReset.bind(_this);
        _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
        return _this;
    }

    _createClass(PostCreateForm, [{
        key: 'handleInputChange',
        value: function handleInputChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'handleFormSubmit',
        value: function handleFormSubmit(e) {
            e.preventDefault();

            var id = this.props.generateNewId();

            var newPost = {
                id: id,
                title: this.state.title || 'Post Title',
                body: this.state.content || 'No content'
            };

            this.props.createPost(newPost);
            this.handleFormReset();
        }
    }, {
        key: 'handleFormReset',
        value: function handleFormReset() {
            this.setState(this.initialState);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_PostForm2.default, { legend: 'Add new post',
                title: this.state.title,
                content: this.state.content,
                resetText: 'Reset',
                onFormReset: this.handleFormReset,
                onFormSubmit: this.handleFormSubmit,
                onInputChange: this.handleInputChange });
        }
    }]);

    return PostCreateForm;
}(_react.Component);

PostCreateForm.propTypes = {
    createPost: _propTypes2.default.func.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { createPost: _posts.createPost })(PostCreateForm);

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".form__group {\n  display: block;\n  margin-bottom: 10px; }\n\n.text--danger {\n  color: #c31313; }\n\n.form__label {\n  display: block;\n  margin-bottom: 5px; }\n\n.form__input,\n.form__textarea {\n  width: 100%;\n  border: 1px solid silver;\n  padding: 10px 15px;\n  max-height: 300px;\n  font-family: Roboto; }\n\n.form__button {\n  width: 100%;\n  max-width: 120px;\n  background: none;\n  border: 1px solid currentColor;\n  padding: 10px 15px;\n  cursor: pointer; }\n  .form__button + .form__button {\n    margin-left: 5px; }\n\n.post {\n  padding: 15px 15px 10px; }\n", ""]);

// exports


/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(148);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Post.sass", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./Post.sass");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(false);
// imports


// module
exports.push([module.i, ".post {\n  position: relative;\n  border: 1px solid silver;\n  margin-bottom: 15px; }\n  .post:first-child {\n    margin-top: 15px; }\n  .post__title {\n    padding: 5px 15px;\n    border-bottom: 1px solid silver; }\n  .post__content {\n    padding: 5px 15px;\n    white-space: pre; }\n  .post:hover .post__actions {\n    display: block; }\n\n.post__actions {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 0; }\n  .post__actions button {\n    cursor: pointer;\n    border: none;\n    width: 30px;\n    height: 30px;\n    font-size: 1.4em; }\n\n.post__edit {\n  background: #e28833;\n  color: white; }\n\n.post__remove {\n  background: #c31313;\n  color: white; }\n", ""]);

// exports


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    'h1',
    null,
    '404 Page not found.'
  );
};

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(21);

var _reduxThunk = __webpack_require__(60);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _posts = __webpack_require__(151);

var _posts2 = _interopRequireDefault(_posts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialStoreState = {
    posts: []
};

var customMiddlewares = [_reduxThunk2.default];

// const reduxDevToolsMiddleware = window.devToolsExtension && window.devToolsExtension();

var store = (0, _redux.createStore)(_posts2.default, initialStoreState, (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, customMiddlewares)
// reduxDevToolsMiddleware
));

exports.default = store;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _posts = __webpack_require__(54);

var postsActionTypes = _interopRequireWildcard(_posts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
    posts: []
};

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case postsActionTypes.FETCH_POSTS:
            // FETCH_POSTS
            return { posts: action.payload };
        case postsActionTypes.GET_POSTS:
            // GET_POSTS
            return { posts: [].concat(_toConsumableArray(state.posts)) };
        case postsActionTypes.CREATE_POST:
            // CREATE_POST
            return {
                posts: [action.payload].concat(_toConsumableArray(state.posts))
            };
        case postsActionTypes.UPDATE_POST:
            // UPDATE_POST
            return { posts: state.posts.map(function (post) {
                    return post.id === action.payload.id ? action.payload : post;
                }) };
        case postsActionTypes.DELETE_POST:
            // DELETE_POST
            return { posts: state.posts.filter(function (post) {
                    return post.id !== action.payload;
                }) };
        default:
            return state;
    }
};

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removePost = exports.updatePost = exports.createPost = exports.getPosts = exports.fetchPosts = undefined;

var _posts = __webpack_require__(54);

var postsActionTypes = _interopRequireWildcard(_posts);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var fetchURL = 'https://jsonplaceholder.typicode.com/posts';

var fetchPosts = exports.fetchPosts = function fetchPosts() {
    return function (dispatch) {
        console.log('Fetching Posts...');
        fetch(fetchURL).then(function (res) {
            return res.json();
        }).then(function (posts) {
            dispatch({
                type: postsActionTypes.FETCH_POSTS,
                payload: posts
            });
        }).catch(function (err) {
            console.error('Error occurred when fetching posts: ', err);
            dispatch({
                type: postsActionTypes.FETCH_POSTS,
                payload: []
            });
        });
    };
};

var getPosts = exports.getPosts = function getPosts() {
    return function (dispatch) {
        dispatch({
            type: postsActionTypes.GET_POSTS,
            payload: null
        });
    };
};

var createPost = exports.createPost = function createPost(postData) {
    return function (dispatch) {
        console.log('Creating new post...');
        fetch(fetchURL, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(postData)
        }).then(function (res) {
            return res.json();
        }).then(function (post) {
            return dispatch({
                type: postsActionTypes.CREATE_POST,
                payload: post
            });
        }).catch(function (err) {
            console.error('Error occurred when creating new post: ', err);
            dispatch({
                type: postsActionTypes.CREATE_POST,
                payload: {
                    title: 'Error',
                    content: 'Error'
                }
            });
        });
    };
};

var updatePost = exports.updatePost = function updatePost(newData) {
    return function (dispatch) {
        dispatch({
            type: postsActionTypes.UPDATE_POST,
            payload: newData
        });
    };
};

var removePost = exports.removePost = function removePost(id) {
    return function (dispatch) {
        dispatch({
            type: postsActionTypes.DELETE_POST,
            payload: id
        });
    };
};

/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_POSTS = exports.FETCH_POSTS = 'posts/FETCH_POSTS';
var GET_POSTS = exports.GET_POSTS = 'posts/GET_POSTS';
var CREATE_POST = exports.CREATE_POST = 'posts/CREATE_POST';
var UPDATE_POST = exports.UPDATE_POST = 'posts/UPDATE_POST';
var DELETE_POST = exports.DELETE_POST = 'posts/DELETE_POST';

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostForm = __webpack_require__(56);

var _PostForm2 = _interopRequireDefault(_PostForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostForm = function PostForm(props) {
    return _react2.default.createElement(
        'form',
        { onSubmit: props.onFormSubmit },
        _react2.default.createElement(
            'fieldset',
            null,
            _react2.default.createElement(
                'legend',
                null,
                props.legend
            ),
            _react2.default.createElement(
                'div',
                { className: 'form__group' },
                _react2.default.createElement(
                    'label',
                    { htmlFor: 'title', className: 'form__label' },
                    'Title ',
                    _react2.default.createElement(
                        'abbr',
                        { title: 'required', className: 'text--danger' },
                        '*'
                    )
                ),
                _react2.default.createElement('input', { type: 'text', name: 'title', id: 'title', placeholder: 'My Awesome new title.', className: 'form__input', value: props.title, onChange: props.onInputChange })
            ),
            _react2.default.createElement(
                'div',
                { className: 'form__group' },
                _react2.default.createElement(
                    'label',
                    { htmlFor: 'content', className: 'form__label' },
                    'Content ',
                    _react2.default.createElement(
                        'abbr',
                        { title: 'required', className: 'text--danger' },
                        '*'
                    )
                ),
                _react2.default.createElement('textarea', { name: 'content', id: 'content', placeholder: 'Start writing your new blog post.', className: 'form__textarea', value: props.content, onChange: props.onInputChange })
            ),
            _react2.default.createElement(
                'div',
                { className: 'form__group' },
                _react2.default.createElement(
                    'button',
                    { type: 'submit', className: 'form__button' },
                    props.formActionText
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'reset', className: 'form__button text--danger', onClick: props.onFormReset },
                    props.resetText
                )
            )
        )
    );
};

PostForm.propTypes = {
    onFormSubmit: _propTypes2.default.func.isRequired,
    legend: _propTypes2.default.string,
    title: _propTypes2.default.string,
    content: _propTypes2.default.string,
    onInputChange: _propTypes2.default.func.isRequired,
    onFormReset: _propTypes2.default.func.isRequired,
    resetText: _propTypes2.default.string,
    formActionText: _propTypes2.default.string
};

PostForm.defaultProps = {
    legend: 'Post Form',
    resetText: 'Cancel',
    formActionText: 'Post'
};

exports.default = PostForm;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(146);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./PostForm.sass", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./PostForm.sass");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = uniqueId;
function uniqueId() {
    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id_';

    var start = 0;
    return function incrementId() {
        return prefix + start++;
    };
}

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PostForm = __webpack_require__(56);

var _PostForm2 = _interopRequireDefault(_PostForm);

var _PostForm3 = __webpack_require__(55);

var _PostForm4 = _interopRequireDefault(_PostForm3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PostEditForm = function (_Component) {
    _inherits(PostEditForm, _Component);

    function PostEditForm(props) {
        _classCallCheck(this, PostEditForm);

        return _possibleConstructorReturn(this, (PostEditForm.__proto__ || Object.getPrototypeOf(PostEditForm)).call(this, props));
    }

    _createClass(PostEditForm, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_PostForm4.default, { legend: 'Edit post',
                title: this.props.title,
                content: this.props.content,
                resetText: 'Cancel',
                onFormSubmit: this.props.onFormSubmit,
                onFormReset: this.props.onFormReset,
                onInputChange: this.props.onInputChange,
                formActionText: 'Update' });
        }
    }]);

    return PostEditForm;
}(_react.Component);

PostEditForm.propTypes = {
    title: _propTypes2.default.string.isRequired,
    content: _propTypes2.default.string.isRequired
};

exports.default = PostEditForm;

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(6);

var _Post = __webpack_require__(147);

var _Post2 = _interopRequireDefault(_Post);

var _PostEditForm = __webpack_require__(58);

var _PostEditForm2 = _interopRequireDefault(_PostEditForm);

var _posts = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Post = function (_Component) {
    _inherits(Post, _Component);

    function Post(props) {
        _classCallCheck(this, Post);

        var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));

        _this.state = {
            inEditMode: false,
            title: _this.props.title,
            content: _this.props.content
        };

        _this.toggleEditMode = _this.toggleEditMode.bind(_this);
        _this.handleInputChange = _this.handleInputChange.bind(_this);
        _this.handleFormSubmit = _this.handleFormSubmit.bind(_this);
        _this.handlePostDelete = _this.handlePostDelete.bind(_this);
        return _this;
    }

    _createClass(Post, [{
        key: 'toggleEditMode',
        value: function toggleEditMode() {
            this.setState({
                inEditMode: !this.state.inEditMode,
                title: this.props.title,
                content: this.props.content
            });
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(e) {
            this.setState(_defineProperty({}, e.target.name, e.target.value));
        }
    }, {
        key: 'handleFormSubmit',
        value: function handleFormSubmit(e) {
            e.preventDefault();

            var updatedPost = {
                id: this.props.id,
                title: this.state.title,
                body: this.state.content
            };

            this.props.updatePost(updatedPost);

            this.toggleEditMode();
        }
    }, {
        key: 'handlePostDelete',
        value: function handlePostDelete() {
            this.props.removePost(this.props.id);
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.inEditMode) {
                return _react2.default.createElement(
                    'article',
                    { className: 'post' },
                    _react2.default.createElement(_PostEditForm2.default, { title: this.state.title,
                        content: this.state.content,
                        onFormReset: this.toggleEditMode,
                        onInputChange: this.handleInputChange,
                        onFormSubmit: this.handleFormSubmit })
                );
            }

            return _react2.default.createElement(
                'article',
                { className: 'post' },
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'h1',
                        { className: 'post__title' },
                        this.props.title
                    )
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'post__content' },
                    this.props.content
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'post__actions' },
                    _react2.default.createElement(
                        'button',
                        { className: 'post__edit', title: 'edit', onClick: this.toggleEditMode },
                        '\u270E'
                    ),
                    _react2.default.createElement(
                        'button',
                        { className: 'post__remove', title: 'remove', onClick: this.handlePostDelete },
                        '\u2716'
                    )
                )
            );
        }
    }]);

    return Post;
}(_react.Component);

;

Post.propTypes = {
    title: _propTypes2.default.string.isRequired,
    content: _propTypes2.default.string.isRequired
};

exports.default = (0, _reactRedux.connect)(null, { updatePost: _posts.updatePost, removePost: _posts.removePost })(Post);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(19);

var _reactRedux = __webpack_require__(6);

var _App = __webpack_require__(97);

var _App2 = _interopRequireDefault(_App);

var _store = __webpack_require__(150);

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(125);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(23);

var _App = __webpack_require__(123);

var _App2 = _interopRequireDefault(_App);

var _Header = __webpack_require__(126);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(129);

var _Home2 = _interopRequireDefault(_Home);

var _Posts = __webpack_require__(132);

var _Posts2 = _interopRequireDefault(_Posts);

var _Post = __webpack_require__(59);

var _Post2 = _interopRequireDefault(_Post);

var _NotFound = __webpack_require__(149);

var _NotFound2 = _interopRequireDefault(_NotFound);

var _posts = __webpack_require__(16);

var _uniqueId = __webpack_require__(57);

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.generateNewId = (0, _uniqueId2.default)().bind(_this);
        return _this;
    }

    _createClass(App, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.props.fetchPosts();
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                _reactRouterDom.BrowserRouter,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(_Header2.default, null),
                    _react2.default.createElement(
                        _reactRouterDom.Switch,
                        null,
                        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/home', render: function render() {
                                return _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' });
                            } }),
                        _react2.default.createElement(_reactRouterDom.Route, { path: '/posts', render: function render() {
                                return _react2.default.createElement(_Posts2.default, { generateNewId: _this2.generateNewId });
                            } }),
                        _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return { posts: state.posts };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _posts.fetchPosts })(App);

/***/ })

},[61]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9BcHAuc2Fzcz8zZTgxIiwid2VicGFjazovLy8uL3NyYy9zYXNzL0FwcC5zYXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9IZWFkZXIuc2Fzcz8yNzc5Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL0hlYWRlci5zYXNzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0hvbWUuanN4Iiwid2VicGFjazovLy8uL3NyYy9zYXNzL0hvbWUuc2Fzcz8yODJhIiwid2VicGFjazovLy8uL3NyYy9zYXNzL0hvbWUuc2FzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3N0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvQW5pbWF0aW9uLnNhc3M/MDk3MCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9BbmltYXRpb24uc2FzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3N0Q3JlYXRlRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3MvUG9zdEZvcm0uc2FzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9Qb3N0LnNhc3M/ODllOSIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9Qb3N0LnNhc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTm90Rm91bmQuanN4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdWNlcnMvcG9zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnMvcG9zdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FjdGlvbnR5cGVzL3Bvc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Bvc3RGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9Qb3N0Rm9ybS5zYXNzP2JlM2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hlbHBlcnMvdW5pcXVlSWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUG9zdEVkaXRGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qb3N0LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanN4Il0sIm5hbWVzIjpbIkhlYWRlciIsIkhvbWUiLCJQb3N0cyIsInByb3BzIiwiZ2V0UG9zdHMiLCJwb3N0cyIsIlBvc3RzQ29tcG9uZW50IiwibWFwIiwicG9zdCIsImluZGV4IiwiaWQiLCJ0aXRsZSIsImJvZHkiLCJnZW5lcmF0ZU5ld0lkIiwicHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiUG9zdENyZWF0ZUZvcm0iLCJpbml0aWFsU3RhdGUiLCJjb250ZW50IiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlRm9ybVJlc2V0IiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0IiwibmV3UG9zdCIsImNyZWF0ZVBvc3QiLCJpbml0aWFsU3RvcmVTdGF0ZSIsImN1c3RvbU1pZGRsZXdhcmVzIiwic3RvcmUiLCJwb3N0c0FjdGlvblR5cGVzIiwiYWN0aW9uIiwidHlwZSIsIkZFVENIX1BPU1RTIiwicGF5bG9hZCIsIkdFVF9QT1NUUyIsIkNSRUFURV9QT1NUIiwiVVBEQVRFX1BPU1QiLCJERUxFVEVfUE9TVCIsImZpbHRlciIsImZldGNoVVJMIiwiZmV0Y2hQb3N0cyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGlzcGF0Y2giLCJjYXRjaCIsImVycm9yIiwiZXJyIiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJwb3N0RGF0YSIsInVwZGF0ZVBvc3QiLCJuZXdEYXRhIiwicmVtb3ZlUG9zdCIsIlBvc3RGb3JtIiwib25Gb3JtU3VibWl0IiwibGVnZW5kIiwib25JbnB1dENoYW5nZSIsImZvcm1BY3Rpb25UZXh0Iiwib25Gb3JtUmVzZXQiLCJyZXNldFRleHQiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJ1bmlxdWVJZCIsInByZWZpeCIsInN0YXJ0IiwiaW5jcmVtZW50SWQiLCJQb3N0RWRpdEZvcm0iLCJQb3N0IiwiaW5FZGl0TW9kZSIsInRvZ2dsZUVkaXRNb2RlIiwiaGFuZGxlUG9zdERlbGV0ZSIsInVwZGF0ZWRQb3N0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxFQUFFOztBQUVGLGdDQUFnQyxVQUFVLEVBQUU7QUFDNUMsQzs7Ozs7OztBQzVDQTtBQUNBOzs7QUFHQTtBQUNBLGlEQUFrRCwyQkFBMkIsRUFBRSxVQUFVLGNBQWMsZUFBZSxjQUFjLHdCQUF3QixtQkFBbUIsOEJBQThCLEVBQUUsUUFBUSxvQkFBb0IscUJBQXFCLEVBQUUsZ0JBQWdCLGdCQUFnQix1QkFBdUIsd0JBQXdCLG1CQUFtQixFQUFFLDJDQUEyQyxrQkFBa0Isc0JBQXNCLEVBQUUsRUFBRSxVQUFVLDBCQUEwQixpQkFBaUIsRUFBRSxjQUFjLHFCQUFxQixxQkFBcUIsRUFBRSxX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QSxzQkFBSyxXQUFVLFdBQWY7QUFDSSx5RUFESjtBQUVJO0FBQUE7QUFBQTtBQUNJLCtFQUFPLFdBQVAsRUFBYSxNQUFLLEdBQWxCLEVBQXNCLHlCQUF0QixHQURKO0FBRUksK0VBQU8sTUFBSyxPQUFaLEVBQW9CLFFBQVM7QUFBQSx1Q0FBTSwwREFBVSxJQUFHLEdBQWIsR0FBTjtBQUFBLDZCQUE3QixHQUZKO0FBR0ksK0VBQU8sTUFBSyxRQUFaLEVBQXFCLFFBQVM7QUFBQSx1Q0FBTSxpREFBTyxlQUFnQixPQUFLcEMsYUFBNUIsR0FBTjtBQUFBLDZCQUE5QixHQUhKO0FBSUksK0VBQU8sNkJBQVA7QUFKSjtBQUZKO0FBREosYUFESjtBQWFIOzs7Ozs7QUFHTCxJQUFNSyxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsV0FBVSxFQUFFYixPQUFPYyxNQUFNZCxLQUFmLEVBQVY7QUFBQSxDQUF4Qjs7a0JBRWUseUJBQVFhLGVBQVIsRUFBeUIsRUFBRStCLDZCQUFGLEVBQXpCLEVBQXlDd0MsR0FBekMsQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQXBwLnNhc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQXBwLnNhc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0FwcC5zYXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9BcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOmJlZm9yZSxcXG4qOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XFxuXFxudWwge1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xcbiAgbWFyZ2luOiAwIGF1dG87IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xcbiAgICAuY29udGFpbmVyIHtcXG4gICAgICB3aWR0aDogMTAwMHB4OyB9IH1cXG5cXG5hYmJyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogaGVscDsgfVxcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxuICBtaW4taGVpZ2h0OiA5MHB4OyB9XFxuXFxubGFiZWwge1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuZmllbGRzZXQge1xcbiAgYm9yZGVyLWNvbG9yOiAjZmFmYWZhOyB9XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgbWFyZ2luOiAwOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3Nhc3MvQXBwLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDEyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGlkID0gMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc2Fzcy9IZWFkZXIuc2Fzcyc7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uX19tYWluXCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmlnYXRpb24tbWFpbl9fbGlzdFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2aWdhdGlvbi1tYWluLWxpc3RfX2l0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIGV4YWN0IHRvPVwiL1wiPkhvbWU8L05hdkxpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZpZ2F0aW9uLW1haW4tbGlzdF9faXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgdG89XCIvcG9zdHNcIj5Qb3N0czwvTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIDwvaGVhZGVyPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0hlYWRlci5qc3giLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9IZWFkZXIuc2Fzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9IZWFkZXIuc2Fzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vSGVhZGVyLnNhc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL0hlYWRlci5zYXNzXG4vLyBtb2R1bGUgaWQgPSAxMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IH1cXG5cXG4ubmF2aWdhdGlvbl9fbWFpbiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ubmF2aWdhdGlvbi1tYWluX19saXN0IHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm5hdmlnYXRpb24tbWFpbi1saXN0X19pdGVtIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMCAxMHB4OyB9XFxuICAubmF2aWdhdGlvbi1tYWluLWxpc3RfX2l0ZW0gYSB7XFxuICAgIGNvbG9yOiAjOTk5O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5hdmlnYXRpb24tbWFpbi1saXN0X19pdGVtIGE6aG92ZXIge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XFxuICAubmF2aWdhdGlvbi1tYWluLWxpc3RfX2l0ZW0gYS5hY3RpdmUge1xcbiAgICBjb2xvcjogIzMzMzsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9zYXNzL0hlYWRlci5zYXNzXG4vLyBtb2R1bGUgaWQgPSAxMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZSBmcm9tICcuLi9zYXNzL0hvbWUuc2Fzcyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPGgxPldlbGNvbWUgdG8gbXkgYmxvZyBwb3N0cyBwcm9qZWN0LjwvaDE+XG4gICAgICAgIDxwPlRoaXMgaXMgYSBvdmVyYWxsIG9mIHdoYXQgSSBsZWFybmVkIGZyb20gVHJlZWhvdXNlIExlYXJuIFJlYWN0IHBhdGguPC9wPlxuICAgICAgICA8cD5Gb2xsb3dpbmcgdG9waWNzIGFyZSBjb3ZlcmVkIHdpdGhpbmcgdGhpcyBwcm9qZWN0OjwvcD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImludHJvX19saXN0XCI+XG4gICAgICAgICAgICA8bGk+U2V0dXAgY3VzdG9tIDxjb2RlPndlYnBhY2s8L2NvZGU+IHVzaW5nIDxjb2RlPmJhYmVsLCByZWFjdCwgc2Fzcywgd2VicGFjay1kZXYtc2VydmVyPC9jb2RlPiBhbmQgPGNvZGU+YnJvd3Nlci1zeW5jPC9jb2RlPiBmb3IgUmVhY3QgUHJvamVjdC48L2xpPlxuICAgICAgICAgICAgPGxpPkhvdyB0byBjcmVhdGUgUmVhY3QgY29tcG9uZW50cyA8c21hbGw+KHN0YXRlZnVsIGFuZCBzdGF0ZWxlc3MpPC9zbWFsbD48L2xpPlxuICAgICAgICAgICAgPGxpPldoYXQgYXJlIHByb3BzIGFuZCBob3cgdG8gcGFzcyB0aGVtIHRvIGNoaWxkIGNvbXBvbmVudHMuPC9saT5cbiAgICAgICAgICAgIDxsaT5SZWFjdCBSb3V0aW5nIDxzbWFsbD4oQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QsIE5hdkxpbmspPC9zbWFsbD48L2xpPlxuICAgICAgICAgICAgPGxpPkRpZmZlcmVuY2VzIGJldHdlZW4gQXBwbGljYXRpb24gc3RhdGUgYW5kIExvY2FsIDxzbWFsbD4oY29tcG9uZW50KTwvc21hbGw+IHN0YXRlPC9saT5cbiAgICAgICAgICAgIDxsaT5Ib3cgdG8gdmFsaWRhdGUgY29tcG9uZW50IHByb3BzIHVzaW5nIDxjb2RlPlByb3BUeXBlczwvY29kZT48L2xpPlxuICAgICAgICAgICAgPGxpPkhvdyB0byBzZXQgZGVmYXVsdCBwcm9wcyB1c2luZyA8Y29kZT5kZWZhdWx0UHJvcHM8L2NvZGU+PC9saT5cbiAgICAgICAgICAgIDxsaT5Ib3cgdG8gaGFuZGxlIFJlYWN0IGV2ZW50cyBzdWNoIGFzIDxjb2RlPm9uQ2xpY2s8L2NvZGU+IGFuZCA8Y29kZT5vbkNoYW5nZTwvY29kZT48L2xpPlxuICAgICAgICAgICAgPGxpPlJlYWN0IGxpZmVjeWNsZSBldmVudHMgc3VjaCBhcyA8Y29kZT5jb21wb25lbnRXaWxsTW91bnQsIGNvbXBvbmVudERpZE1vdW50LCBjb21wb25lbnRXaWxsVW5tb3VudDwvY29kZT4gZXRjLjwvbGk+XG4gICAgICAgICAgICA8bGk+RGF0YSBmZXRjaGluZyB3aXRoIFJlYWN0IHVzaW5nIEVTNiBuYXRpdmUgPGNvZGU+ZmV0Y2g8L2NvZGU+IGZ1bmN0aW9uLjwvbGk+XG4gICAgICAgICAgICA8bGk+SG93IHRvIGludGVncmF0ZSBSZWR1eCA8Y29kZT5kZXYgdG9vbHM8L2NvZGU+PC9saT5cbiAgICAgICAgICAgIDxsaT5SZWFjdCBjb21wb25lbnQgY29uZGl0aW9uYWwgcmVuZGVyaW5nLjwvbGk+XG4gICAgICAgICAgICA8bGk+SG93IHRvIHBlcmZvcm0gQ1JVRCBvcGVyYXRpb25zIHdpdGggUmVhY3QuPC9saT5cbiAgICAgICAgICAgIDxsaT5XaGF0IGFyZSBSZWR1eCwgQWN0aW9ucywgQWN0aW9uVHlwZXMsIE1pZGRsZXdhcmVzLCBSZWR1Y2VycywgU3RvcmFnZSBhbmQgUHJvdmlkZXIuPC9saT5cbiAgICAgICAgICAgIDxsaT5Ib3cgdG8gYWRkIGFuaW1hdGlvbnMgdG8gY29tcG9uZW50cyB1c2luZyA8Y29kZT5yZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXA8L2NvZGU+PC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzeCIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0hvbWUuc2Fzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Ib21lLnNhc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL0hvbWUuc2Fzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvSG9tZS5zYXNzXG4vLyBtb2R1bGUgaWQgPSAxMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW50cm9fX2xpc3Qge1xcbiAgbGlzdC1zdHlsZTogZGlzYzsgfVxcbiAgLmludHJvX19saXN0IGxpIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9zYXNzL0hvbWUuc2Fzc1xuLy8gbW9kdWxlIGlkID0gMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBSZWFjdENTU1RyYW5zaXRpb25Hcm91cCBmcm9tICdyZWFjdC1hZGRvbnMtY3NzLXRyYW5zaXRpb24tZ3JvdXAnO1xuXG5pbXBvcnQgYW5pbWF0aW9uIGZyb20gJy4uL3Nhc3MvQW5pbWF0aW9uLnNhc3MnO1xuXG5pbXBvcnQgUG9zdENyZWF0ZUZvcm0gZnJvbSAnLi9Qb3N0Q3JlYXRlRm9ybS5qc3gnO1xuaW1wb3J0IFBvc3RFZGl0Rm9ybSBmcm9tICcuL1Bvc3RFZGl0Rm9ybS5qc3gnO1xuaW1wb3J0IFBvc3QgZnJvbSAnLi9Qb3N0LmpzeCc7XG5cbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSAnLi4vYWN0aW9ucy9wb3N0cyc7XG5cbmNsYXNzIFBvc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICB0aGlzLnByb3BzLmdldFBvc3RzKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHBvc3RzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIGNvbnN0IFBvc3RzQ29tcG9uZW50ID0gcG9zdHMubWFwKFxuICAgICAgICAgICAgKHBvc3QsIGluZGV4KSA9PiA8UG9zdCBrZXk9eyBwb3N0LmlkIH0gaWQ9eyBwb3N0LmlkIH0gdGl0bGU9eyBwb3N0LnRpdGxlIH0gY29udGVudD17IHBvc3QuYm9keSB9IC8+XG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPFBvc3RDcmVhdGVGb3JtIGdlbmVyYXRlTmV3SWQ9eyB0aGlzLnByb3BzLmdlbmVyYXRlTmV3SWQgfS8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwIHRyYW5zaXRpb25OYW1lPVwic2xpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbkVudGVyVGltZW91dD17IDUwMCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uTGVhdmVUaW1lb3V0PXsgMTAwMCB9ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgUG9zdHNDb21wb25lbnQgfVxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0Q1NTVHJhbnNpdGlvbkdyb3VwPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Qb3N0cy5wcm9wVHlwZXMgPSB7XG4gICAgcG9zdHM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICAgIGdldFBvc3RzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHsgcG9zdHM6IHN0YXRlLnBvc3RzIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgeyBnZXRQb3N0cyB9KShQb3N0cyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qb3N0cy5qc3giLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9BbmltYXRpb24uc2Fzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9BbmltYXRpb24uc2Fzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vQW5pbWF0aW9uLnNhc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL0FuaW1hdGlvbi5zYXNzXG4vLyBtb2R1bGUgaWQgPSAxNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2xpZGUtZW50ZXIge1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMCUpOyB9XFxuXFxuLnNsaWRlLWVudGVyLnNsaWRlLWVudGVyLWFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2Utb3V0OyB9XFxuXFxuLnNsaWRlLWxlYXZlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZjE3Nzc3OyB9XFxuICAuc2xpZGUtbGVhdmUgKiB7XFxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5zbGlkZS1sZWF2ZS5zbGlkZS1sZWF2ZS1hY3RpdmUge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XFxuICBhbmltYXRpb24tZHVyYXRpb246IDFzOyB9XFxuXFxuQGtleWZyYW1lcyBleGFtcGxlIHtcXG4gIGZyb20ge1xcbiAgICBoZWlnaHQ6IDEwMHB4OyB9XFxuICB0byB7XFxuICAgIGhlaWdodDogMDsgfSB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3Nhc3MvQW5pbWF0aW9uLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDE0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGNyZWF0ZVBvc3QgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RzJztcblxuaW1wb3J0IFBvc3RGb3JtIGZyb20gJy4vUG9zdEZvcm0uanN4JztcblxuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4uL2hlbHBlcnMvdW5pcXVlSWQnO1xuXG5jbGFzcyBQb3N0Q3JlYXRlRm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5pbml0aWFsU3RhdGUgPSB7XG4gICAgICAgICAgICB0aXRsZTogJycsXG4gICAgICAgICAgICBjb250ZW50OiAnJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnN0YXRlID0gdGhpcy5pbml0aWFsU3RhdGU7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtUmVzZXQgPSB0aGlzLmhhbmRsZUZvcm1SZXNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUZvcm1TdWJtaXQgPSB0aGlzLmhhbmRsZUZvcm1TdWJtaXQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRm9ybVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMuZ2VuZXJhdGVOZXdJZCgpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Bvc3QgPSB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnN0YXRlLnRpdGxlIHx8ICdQb3N0IFRpdGxlJyxcbiAgICAgICAgICAgIGJvZHk6IHRoaXMuc3RhdGUuY29udGVudCB8fCAnTm8gY29udGVudCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVQb3N0KG5ld1Bvc3QpO1xuICAgICAgICB0aGlzLmhhbmRsZUZvcm1SZXNldCgpO1xuICAgIH1cblxuICAgIGhhbmRsZUZvcm1SZXNldCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh0aGlzLmluaXRpYWxTdGF0ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBvc3RGb3JtIGxlZ2VuZD1cIkFkZCBuZXcgcG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyB0aGlzLnN0YXRlLnRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXsgdGhpcy5zdGF0ZS5jb250ZW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICByZXNldFRleHQ9XCJSZXNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3JtUmVzZXQ9eyB0aGlzLmhhbmRsZUZvcm1SZXNldCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgb25Gb3JtU3VibWl0PXsgdGhpcy5oYW5kbGVGb3JtU3VibWl0IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSB9IC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Qb3N0Q3JlYXRlRm9ybS5wcm9wVHlwZXMgPSB7XG4gICAgY3JlYXRlUG9zdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwgeyBjcmVhdGVQb3N0IH0pKFBvc3RDcmVhdGVGb3JtKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Bvc3RDcmVhdGVGb3JtLmpzeCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm1fX2dyb3VwIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDsgfVxcblxcbi50ZXh0LS1kYW5nZXIge1xcbiAgY29sb3I6ICNjMzEzMTM7IH1cXG5cXG4uZm9ybV9fbGFiZWwge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cXG5cXG4uZm9ybV9faW5wdXQsXFxuLmZvcm1fX3RleHRhcmVhIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBmb250LWZhbWlseTogUm9ib3RvOyB9XFxuXFxuLmZvcm1fX2J1dHRvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogMTIwcHg7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuZm9ybV9fYnV0dG9uICsgLmZvcm1fX2J1dHRvbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7IH1cXG5cXG4ucG9zdCB7XFxuICBwYWRkaW5nOiAxNXB4IDE1cHggMTBweDsgfVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIhLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL3NyYy9zYXNzL1Bvc3RGb3JtLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Qb3N0LnNhc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUG9zdC5zYXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Qb3N0LnNhc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zYXNzL1Bvc3Quc2Fzc1xuLy8gbW9kdWxlIGlkID0gMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvc3Qge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgc2lsdmVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMTVweDsgfVxcbiAgLnBvc3Q6Zmlyc3QtY2hpbGQge1xcbiAgICBtYXJnaW4tdG9wOiAxNXB4OyB9XFxuICAucG9zdF9fdGl0bGUge1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHNpbHZlcjsgfVxcbiAgLnBvc3RfX2NvbnRlbnQge1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgd2hpdGUtc3BhY2U6IHByZTsgfVxcbiAgLnBvc3Q6aG92ZXIgLnBvc3RfX2FjdGlvbnMge1xcbiAgICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5wb3N0X19hY3Rpb25zIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDsgfVxcbiAgLnBvc3RfX2FjdGlvbnMgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIHdpZHRoOiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07IH1cXG5cXG4ucG9zdF9fZWRpdCB7XFxuICBiYWNrZ3JvdW5kOiAjZTI4ODMzO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLnBvc3RfX3JlbW92ZSB7XFxuICBiYWNrZ3JvdW5kOiAjYzMxMzEzO1xcbiAgY29sb3I6IHdoaXRlOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL3Nhc3MvUG9zdC5zYXNzXG4vLyBtb2R1bGUgaWQgPSAxNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gPGgxPjQwNCBQYWdlIG5vdCBmb3VuZC48L2gxPjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL05vdEZvdW5kLmpzeCIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IFBvc3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvcG9zdHMnO1xuXG5jb25zdCBpbml0aWFsU3RvcmVTdGF0ZSA9IHtcbiAgICBwb3N0czogW10sXG59O1xuXG5jb25zdCBjdXN0b21NaWRkbGV3YXJlcyA9IFt0aHVua107XG5cbi8vIGNvbnN0IHJlZHV4RGV2VG9vbHNNaWRkbGV3YXJlID0gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uICYmIHdpbmRvdy5kZXZUb29sc0V4dGVuc2lvbigpO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICAgIFBvc3RSZWR1Y2VyLFxuICAgIGluaXRpYWxTdG9yZVN0YXRlLFxuICAgIGNvbXBvc2UoXG4gICAgICAgIGFwcGx5TWlkZGxld2FyZSguLi5jdXN0b21NaWRkbGV3YXJlcyksXG4gICAgICAgIC8vIHJlZHV4RGV2VG9vbHNNaWRkbGV3YXJlXG4gICAgKSxcbik7XG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0b3JlLmpzIiwiaW1wb3J0ICogYXMgcG9zdHNBY3Rpb25UeXBlcyBmcm9tICcuLi9hY3Rpb250eXBlcy9wb3N0cyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBwb3N0czogW10sXG59O1xuXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIHBvc3RzQWN0aW9uVHlwZXMuRkVUQ0hfUE9TVFM6IC8vIEZFVENIX1BPU1RTXG4gICAgICAgICAgICByZXR1cm4geyBwb3N0czogYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgICAgY2FzZSBwb3N0c0FjdGlvblR5cGVzLkdFVF9QT1NUUzogLy8gR0VUX1BPU1RTXG4gICAgICAgICAgICByZXR1cm4geyBwb3N0czogWy4uLnN0YXRlLnBvc3RzXSB9O1xuICAgICAgICBjYXNlIHBvc3RzQWN0aW9uVHlwZXMuQ1JFQVRFX1BPU1Q6IC8vIENSRUFURV9QT1NUXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBvc3RzOiBbXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZS5wb3N0c1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBwb3N0c0FjdGlvblR5cGVzLlVQREFURV9QT1NUOiAvLyBVUERBVEVfUE9TVFxuICAgICAgICAgICAgcmV0dXJuIHsgcG9zdHM6IHN0YXRlLnBvc3RzLm1hcChwb3N0ID0+IHBvc3QuaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkID8gYWN0aW9uLnBheWxvYWQgOiBwb3N0KSB9XG4gICAgICAgIGNhc2UgcG9zdHNBY3Rpb25UeXBlcy5ERUxFVEVfUE9TVDogLy8gREVMRVRFX1BPU1RcbiAgICAgICAgICAgIHJldHVybiB7IHBvc3RzOiBzdGF0ZS5wb3N0cy5maWx0ZXIocG9zdCA9PiBwb3N0LmlkICE9PSBhY3Rpb24ucGF5bG9hZCksIH1cbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVkdWNlcnMvcG9zdHMuanMiLCJpbXBvcnQgKiBhcyBwb3N0c0FjdGlvblR5cGVzIGZyb20gJy4uL2FjdGlvbnR5cGVzL3Bvc3RzJztcblxuY29uc3QgZmV0Y2hVUkwgPSAgJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cyc7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFBvc3RzID0gKCkgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBQb3N0cy4uLicpO1xuICAgIGZldGNoKGZldGNoVVJMKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocG9zdHMgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IHBvc3RzQWN0aW9uVHlwZXMuRkVUQ0hfUE9TVFMsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogcG9zdHMsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCB3aGVuIGZldGNoaW5nIHBvc3RzOiAnLCBlcnIpO1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IHBvc3RzQWN0aW9uVHlwZXMuRkVUQ0hfUE9TVFMsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDogW10sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UG9zdHMgPSAoKSA9PiBkaXNwYXRjaCA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBwb3N0c0FjdGlvblR5cGVzLkdFVF9QT1NUUyxcbiAgICAgICAgcGF5bG9hZDogbnVsbCxcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQb3N0ID0gcG9zdERhdGEgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBuZXcgcG9zdC4uLicpO1xuICAgIGZldGNoKGZldGNoVVJMLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSxcbiAgICB9KVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKHBvc3QgPT4gZGlzcGF0Y2goe1xuICAgICAgICB0eXBlOiBwb3N0c0FjdGlvblR5cGVzLkNSRUFURV9QT1NULFxuICAgICAgICBwYXlsb2FkOiBwb3N0LFxuICAgIH0pKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCB3aGVuIGNyZWF0aW5nIG5ldyBwb3N0OiAnLCBlcnIpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBwb3N0c0FjdGlvblR5cGVzLkNSRUFURV9QT1NULFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3InLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdFcnJvcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgY29uc3QgdXBkYXRlUG9zdCA9IG5ld0RhdGEgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogcG9zdHNBY3Rpb25UeXBlcy5VUERBVEVfUE9TVCxcbiAgICAgICAgcGF5bG9hZDogbmV3RGF0YSxcbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVQb3N0ID0gaWQgPT4gZGlzcGF0Y2ggPT4ge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogcG9zdHNBY3Rpb25UeXBlcy5ERUxFVEVfUE9TVCxcbiAgICAgICAgcGF5bG9hZDogaWRcbiAgICB9KTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9wb3N0cy5qcyIsImV4cG9ydCBjb25zdCBGRVRDSF9QT1NUUyA9ICdwb3N0cy9GRVRDSF9QT1NUUyc7XG5leHBvcnQgY29uc3QgR0VUX1BPU1RTID0gJ3Bvc3RzL0dFVF9QT1NUUyc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX1BPU1QgPSAncG9zdHMvQ1JFQVRFX1BPU1QnO1xuZXhwb3J0IGNvbnN0IFVQREFURV9QT1NUID0gJ3Bvc3RzL1VQREFURV9QT1NUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfUE9TVCA9ICdwb3N0cy9ERUxFVEVfUE9TVCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9udHlwZXMvcG9zdHMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3Nhc3MvUG9zdEZvcm0uc2Fzcyc7XG5cbmNvbnN0IFBvc3RGb3JtID0gcHJvcHMgPT4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXsgcHJvcHMub25Gb3JtU3VibWl0IH0+XG4gICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsZWdlbmQ+eyBwcm9wcy5sZWdlbmQgfTwvbGVnZW5kPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBjbGFzc05hbWU9XCJmb3JtX19sYWJlbFwiPlRpdGxlIDxhYmJyIHRpdGxlPVwicmVxdWlyZWRcIiBjbGFzc05hbWU9XCJ0ZXh0LS1kYW5nZXJcIj4qPC9hYmJyPjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHBsYWNlaG9sZGVyPVwiTXkgQXdlc29tZSBuZXcgdGl0bGUuXCIgY2xhc3NOYW1lPVwiZm9ybV9faW5wdXRcIiB2YWx1ZT17IHByb3BzLnRpdGxlIH0gb25DaGFuZ2U9eyBwcm9wcy5vbklucHV0Q2hhbmdlIH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtX19ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29udGVudFwiIGNsYXNzTmFtZT1cImZvcm1fX2xhYmVsXCI+Q29udGVudCA8YWJiciB0aXRsZT1cInJlcXVpcmVkXCIgY2xhc3NOYW1lPVwidGV4dC0tZGFuZ2VyXCI+KjwvYWJicj48L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBuYW1lPVwiY29udGVudFwiIGlkPVwiY29udGVudFwiIHBsYWNlaG9sZGVyPVwiU3RhcnQgd3JpdGluZyB5b3VyIG5ldyBibG9nIHBvc3QuXCIgY2xhc3NOYW1lPVwiZm9ybV9fdGV4dGFyZWFcIiB2YWx1ZT17IHByb3BzLmNvbnRlbnQgfSBvbkNoYW5nZT17IHByb3BzLm9uSW5wdXRDaGFuZ2UgfT48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm1fX2dyb3VwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiZm9ybV9fYnV0dG9uXCI+eyBwcm9wcy5mb3JtQWN0aW9uVGV4dCB9PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwicmVzZXRcIiBjbGFzc05hbWU9XCJmb3JtX19idXR0b24gdGV4dC0tZGFuZ2VyXCIgb25DbGljaz17IHByb3BzLm9uRm9ybVJlc2V0IH0+eyBwcm9wcy5yZXNldFRleHQgfTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZmllbGRzZXQ+XG4gICAgPC9mb3JtPlxuKTtcblxuUG9zdEZvcm0ucHJvcFR5cGVzID0ge1xuICAgIG9uRm9ybVN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBsZWdlbmQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29udGVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbklucHV0Q2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIG9uRm9ybVJlc2V0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHJlc2V0VGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtQWN0aW9uVGV4dDogUHJvcFR5cGVzLnN0cmluZ1xufTtcblxuUG9zdEZvcm0uZGVmYXVsdFByb3BzID0ge1xuICAgIGxlZ2VuZDogJ1Bvc3QgRm9ybScsXG4gICAgcmVzZXRUZXh0OiAnQ2FuY2VsJyxcbiAgICBmb3JtQWN0aW9uVGV4dDogJ1Bvc3QnXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RGb3JtO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUG9zdEZvcm0uanN4IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vUG9zdEZvcm0uc2Fzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Qb3N0Rm9ybS5zYXNzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9Qb3N0Rm9ybS5zYXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9Qb3N0Rm9ybS5zYXNzXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlxdWVJZChwcmVmaXggPSAnaWRfJykge1xuICAgIGxldCBzdGFydCA9IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGluY3JlbWVudElkKCkge1xuICAgICAgICByZXR1cm4gcHJlZml4ICsgc3RhcnQrKztcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaGVscGVycy91bmlxdWVJZC5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3Nhc3MvUG9zdEZvcm0uc2Fzcyc7XG5cbmltcG9ydCBQb3N0Rm9ybSBmcm9tICcuL1Bvc3RGb3JtLmpzeCc7XG5cbmNsYXNzIFBvc3RFZGl0Rm9ybSBleHRlbmRzIENvbXBvbmVudCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFBvc3RGb3JtIGxlZ2VuZD1cIkVkaXQgcG9zdFwiXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyB0aGlzLnByb3BzLnRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXsgdGhpcy5wcm9wcy5jb250ZW50IH1cbiAgICAgICAgICAgICAgICAgICAgICByZXNldFRleHQ9XCJDYW5jZWxcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uRm9ybVN1Ym1pdD17IHRoaXMucHJvcHMub25Gb3JtU3VibWl0IH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkZvcm1SZXNldD17IHRoaXMucHJvcHMub25Gb3JtUmVzZXQgfVxuICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyB0aGlzLnByb3BzLm9uSW5wdXRDaGFuZ2UgfVxuICAgICAgICAgICAgICAgICAgICAgIGZvcm1BY3Rpb25UZXh0PVwiVXBkYXRlXCIgLz5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBvc3RFZGl0Rm9ybS5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0RWRpdEZvcm07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qb3N0RWRpdEZvcm0uanN4IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgc3R5bGUgZnJvbSAnLi4vc2Fzcy9Qb3N0LnNhc3MnO1xuXG5pbXBvcnQgUG9zdEVkaXRGb3JtIGZyb20gJy4vUG9zdEVkaXRGb3JtLmpzeCc7XG5cbmltcG9ydCB7IHVwZGF0ZVBvc3QgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RzJztcbmltcG9ydCB7IHJlbW92ZVBvc3QgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RzJztcblxuY2xhc3MgUG9zdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpbkVkaXRNb2RlOiBmYWxzZSxcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnByb3BzLnRpdGxlLFxuICAgICAgICAgICAgY29udGVudDogdGhpcy5wcm9wcy5jb250ZW50XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy50b2dnbGVFZGl0TW9kZSA9IHRoaXMudG9nZ2xlRWRpdE1vZGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVJbnB1dENoYW5nZSA9IHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVGb3JtU3VibWl0ID0gdGhpcy5oYW5kbGVGb3JtU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlUG9zdERlbGV0ZSA9IHRoaXMuaGFuZGxlUG9zdERlbGV0ZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHRvZ2dsZUVkaXRNb2RlKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGluRWRpdE1vZGU6ICF0aGlzLnN0YXRlLmluRWRpdE1vZGUsXG4gICAgICAgICAgICB0aXRsZTogdGhpcy5wcm9wcy50aXRsZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMucHJvcHMuY29udGVudFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dENoYW5nZShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRm9ybVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCB1cGRhdGVkUG9zdCA9IHtcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgICAgICAgdGl0bGU6IHRoaXMuc3RhdGUudGl0bGUsXG4gICAgICAgICAgICBib2R5OiB0aGlzLnN0YXRlLmNvbnRlbnQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVQb3N0KHVwZGF0ZWRQb3N0KTtcblxuICAgICAgICB0aGlzLnRvZ2dsZUVkaXRNb2RlKCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUG9zdERlbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5yZW1vdmVQb3N0KHRoaXMucHJvcHMuaWQpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuaW5FZGl0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxQb3N0RWRpdEZvcm0gdGl0bGU9eyB0aGlzLnN0YXRlLnRpdGxlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PXsgdGhpcy5zdGF0ZS5jb250ZW50IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvcm1SZXNldD17IHRoaXMudG9nZ2xlRWRpdE1vZGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uSW5wdXRDaGFuZ2U9eyB0aGlzLmhhbmRsZUlucHV0Q2hhbmdlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkZvcm1TdWJtaXQ9eyB0aGlzLmhhbmRsZUZvcm1TdWJtaXQgfSAvPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwb3N0X190aXRsZVwiPnsgdGhpcy5wcm9wcy50aXRsZSB9PC9oMT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwb3N0X19jb250ZW50XCI+eyB0aGlzLnByb3BzLmNvbnRlbnQgfTwvcD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb3N0X19lZGl0XCIgdGl0bGU9XCJlZGl0XCIgb25DbGljaz17IHRoaXMudG9nZ2xlRWRpdE1vZGUgfT7inI48L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb3N0X19yZW1vdmVcIiB0aXRsZT1cInJlbW92ZVwiIG9uQ2xpY2s9eyB0aGlzLmhhbmRsZVBvc3REZWxldGUgfT7inJY8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgKTtcbiAgICB9O1xufTtcblxuUG9zdC5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBjb250ZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHsgdXBkYXRlUG9zdCwgcmVtb3ZlUG9zdCB9KShQb3N0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Bvc3QuanN4IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvQXBwLmpzeCc7XG5pbXBvcnQgc3RvcmUgZnJvbSAnLi9zdG9yZS5qcyc7XG5cbnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9eyBzdG9yZSB9PlxuICAgICAgICA8QXBwIC8+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgUm91dGUsIFN3aXRjaCwgUmVkaXJlY3QgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuaW1wb3J0IHN0eWxlIGZyb20gJy4uL3Nhc3MvQXBwLnNhc3MnO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyLmpzeCc7XG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUuanN4JztcbmltcG9ydCBQb3N0cyBmcm9tICcuL1Bvc3RzLmpzeCc7XG5pbXBvcnQgUG9zdCBmcm9tICcuL1Bvc3QuanN4JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL05vdEZvdW5kLmpzeCc7XG5cbmltcG9ydCB7IGZldGNoUG9zdHMgfSBmcm9tICcuLi9hY3Rpb25zL3Bvc3RzJztcblxuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4uL2hlbHBlcnMvdW5pcXVlSWQnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVOZXdJZCA9IHVuaXF1ZUlkKCkuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMuZmV0Y2hQb3N0cygpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxCcm93c2VyUm91dGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17IEhvbWUgfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaG9tZVwiIHJlbmRlcj17ICgpID0+IDxSZWRpcmVjdCB0bz0nLycgLz4gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcG9zdHNcIiByZW5kZXI9eyAoKSA9PiA8UG9zdHMgZ2VuZXJhdGVOZXdJZD17IHRoaXMuZ2VuZXJhdGVOZXdJZCB9Lz4gfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17IE5vdEZvdW5kIH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoeyBwb3N0czogc3RhdGUucG9zdHMgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCB7IGZldGNoUG9zdHMgfSkoQXBwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0FwcC5qc3giXSwic291cmNlUm9vdCI6IiJ9