const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let projectSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  url: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  token: {
    type: String,
    require: true,
  },
  photo:{
    type: String,
    require: true,
  }
},{timestamps: true});

let project = mongoose.model("Project", projectSchema);
module.exports = project;
