const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let blogsSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    short:{
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: true,
    },
    tags: {
      type: Array,
      require: true,
    },
    url:{
      type: String,
      require: true,
    },
    token:{
      type: String,
      require: true,
    },
  },
  { timestamp: true }
);

let blogs = mongoose.model("Blogs", blogsSchema);
module.exports = blogs;
