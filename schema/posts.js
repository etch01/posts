const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: false,
      minlength: 3,
    },
    image: {
      type: String,
      required: true,
      unique: false,
      minlength: 3,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
