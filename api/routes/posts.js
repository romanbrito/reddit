const express = require('express')
const router = express.Router();

const Post = require('../models/post');

router.get('/by-subreddit/:subreddit', (req, res) => {
	let subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');

	Post.find({
		subredditId: subredditId
	}, (err, results) => {
		res.json(results);
	});
});

router.post('/by-subreddit/', (req, res) => {
  console.log(req.body);

  const result ={};
  result.comments = [];
  result.content = req.body.content;
  result.subredditId = req.body.subredditId;
  result.title = req.body.title;


  const entry = new Post(result);

  entry.save((err,savedPost) => {
    if (err) {
      console.log(err);
    } else {
      console.log("saved post");
    }
  });
});

module.exports = router;
