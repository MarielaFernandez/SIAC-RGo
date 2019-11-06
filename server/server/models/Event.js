import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const EventSchema = new Schema({
 title: {
    type: String,
    unique: true,
    required: true
  },
  start: {
    type: String,    
    required: true
  },
  end: {
    type: String,
    required: true
  },
  allDay: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  }
});

export default mongoose.model("Event", EventSchema);
