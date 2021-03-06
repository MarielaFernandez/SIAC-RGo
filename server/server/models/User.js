import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const UserSchema = new Schema({
  document: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  sex: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  rol: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: false
  },
  canton: {
    type: String,
    required: false
  },
  district: {
    type: String,
    required: false
  },
  neighborhood: {
    type: String,
    required: false
  },
  km: {
    type: String,
    required: false
  },
  appointment: {
    type: String,
    required: false
  },
  academic_degree: {
    type: String,
    required: false
  },
  phone_number: {
    type: String,
    required: false
  },
  status: {
    type: String,
    required: true
  },

  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post"
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId, 
      ref: "Comment"
    }
  ]
});

export default mongoose.model("User", UserSchema);