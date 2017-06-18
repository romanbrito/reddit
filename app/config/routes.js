import React from 'react';
import {IndexRoute, Route, Router, hashHistory} from 'react-router';

import Main from '../components/Main';
import Listing from '../components/subreddit/Listing';
import Form from '../components/subreddit/Form';
import Post from '../components/subreddit/Post'
import commentForm from '../components/subreddit/commentForm'
module.exports = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/:subredditId" component={Listing}/>
      <Route path="/:subredditId/new" component={Form}/>
      <Route path="/:subredditId/:post_id" component={Post}>
        <Route path="comments" component={commentForm}/>
      </Route>

      <IndexRoute component={Listing}/>
    </Route>
  </Router>
);
