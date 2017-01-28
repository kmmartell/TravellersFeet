import React from 'react';
import { Route, IndexRoute} from 'react-router';
import Login from '../components/Login';
import App from '../components/app';
import PostList from '../components/post/PostList';
import Post from '../components/post/Post';
import PostPage from '../components/post/PostPage';
import Home from '../components/Home';
import { onPostEnter } from './route_callbacks';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />

    <Route path = "/posts" component={ PostList } />
    <Route path = "/postnew" component = { PostPage } />
    <Route path = "/postedit/:id" component = { PostPage } onEnter = { onPostEnter} />
    <Route path = "/login" component={Login} />
    <Route path = "/post/:id" component ={ Post } onEnter = { onPostEnter }/>
  </Route>
);
