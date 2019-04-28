import React from 'react';
import ReactDOM from 'react-dom';

import postsData from './data/posts-data';
import Provider from "react-redux/es/components/Provider";
import store from "./redux";
import App from "./App";

localStorage.setItem('postsData', JSON.stringify(postsData));

const Root = () => (
    <Provider store = {store}>
        <App />
    </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
