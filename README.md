# Setup

### This project is not created using create-react-app since I wanted to build custom environment using webpack, webpack-dev-server, babel, sass, uglify and browser-sync.

To set up project run following commands:

```js
npm i
```

```js
npm run watch
```

```
Structure

dist
    app.bundle.js
    vendor.bundle.js
    index.html
src
    actions // => Redux actions for dispatch.
    actiontypes // => Redux action types.
    components // => Application jsx components.
    helpers // => Helper functions.
    reducers // => Redux Reducers.
    sass // => Component animation and styles.
    index.js // => Entry file.
    store.js // => Redux Store.
```
