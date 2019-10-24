import mongoose from "mongoose";
import { ObjectID } from "mongodb";

const Schema = mongoose.Schema;

ObjectID.prototype.valueOf = function() {
  return this.toString();
};

const EventSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  startDate: {
    type: Date,    
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

export default mongoose.model("Event", EventSchema);
