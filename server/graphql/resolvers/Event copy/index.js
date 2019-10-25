import Event from "../../../server/models/Event";

export default {
  Query: {
    event: async (parent, { _id }, context, info) => {
      return await Event.findOne({ _id }).exec();
    },
    events: async (parent, args, context, info) => {
      const events = await Event.find({})
        .populate()
        .exec();

      return events.map(u => ({
        _id: u._id.toString(),
        name: u.name,
        startDate: u.startDate,
        endDate: u.endDate                
      }));
    }
  },
  

  Mutation: {
    createEvent: async (parent, { event }, context, info) => {
      const newEvent = await new Event({
        name: event.name,
        startDate: event.startDate,
        endDate: event.endDate
      });

      return new Promise((resolve, reject) => {
        newEvent.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateEvent: async (parent, { _id, event }, context, info) => {
      return new Promise((resolve, reject) => {
        Event.findByIdAndUpdate(_id, { $set: { ...event } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteEvent: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Event.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
