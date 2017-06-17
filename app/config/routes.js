import React from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';

import Main from '../components/Main';
import Listing from '../components/subreddit/Listing';
import Form from '../components/subreddit/Form';
import Post from '../components/subreddit/Post'

module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
			<Route path="/:subredditId" component={Listing} />
      <Route path="/:subredditId/new" component={Form}/>
      <Route path="/:subredditId/:post_id" component={Post}/>

			<IndexRoute component={Listing} />
    </Route>
  </Router>
);
