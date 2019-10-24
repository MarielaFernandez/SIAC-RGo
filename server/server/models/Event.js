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
    type: String,    
    required: true
  },
  endDate: {
    type: String,
    required: true
  }
});

export default mongoose.model("Event", EventSchema);
