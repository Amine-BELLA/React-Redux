import React from 'react';
import Posts from "./components/Posts/Posts";
import PostForm from './components/PostForm/PostForm';

import { Provider } from 'react-redux';
import store from "./store";


function App() {
  return (
    <Provider store={store}>
      <div>
        <PostForm />
        <Posts />
      </div>
    </Provider>

  );
}

export default App;
