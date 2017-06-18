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

router.put('/by-subreddit/', (req, res) => {
  console.log(req.body);


  // const entry = new Post(req.body.postID, );
  //
  // entry.findByIdAndUpdate((err,savedPost) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("saved post");
  //   }
  // });
  Post.findByIdAndUpdate(req.body.postID, {$push:{comments: req.body.comment}},{'new':true},
    (err, updatedDoc) => {
    if (err) {
      console.log(err);
    } else {
      console.log("updated");
      //res.json(updatedDoc);
    }
  });
});

router.get('/by-subreddit/:subreddit/:post_id', (req, res) => {
  let post_id = req.params.post_id;

  Post.findById(post_id, (err, doc) => {
    if (err) {
      next(err);
    } else {
      res.json(doc);
    }
  });
});

module.exports = router;
