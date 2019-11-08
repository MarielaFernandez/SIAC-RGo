import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const CourseSchema = new Schema({
  initials: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  credits: {
    type: String,
    required: true
  },
  period: {
    type: String,    
    required: true
  },
  
});

export default mongoose.model("Course", CourseSchema);