var express = require('express');
const mongoose = require('mongoose');
let postSchema = require('../schema/posts');
var router = express.Router();

//connection to database via mongoose
var uri =
  'mongodb+srv://hassan:hassan12345@post-kpob1.mongodb.net/test?retryWrites=true&w=majority';
const connecting = async () => {
  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};
connecting();
const connection = mongoose.connection;
connection.on('open', () =>
  console.log('Connection to mongodb established successfully'),
);

//Route
router.get('/', (req, res, next) => {
  postSchema
    .find()
    .then(data => res.json(data))
    .catch(err => console.log(err));
});

router.post('/add', (req, res) => {
  const title = req.body.title;
  const image = req.body.image;
  var date = Date.now();
  const newPost = postSchema({title, image, date});
  newPost
    .save()
    .then(() => console.log('Post added'))
    .catch(err => console.log(err));
});

module.exports = router;
