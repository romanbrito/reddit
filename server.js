const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');


// body parser config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


const posts = require('./api/routes/posts');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/posts', posts);
//app.use(posts);
mongoose.connect('mongodb://localhost/reddit');

app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});
