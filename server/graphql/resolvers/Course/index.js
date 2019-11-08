import Course from "../../../server/models/Course";

export default {
  Query: {
    course: async (parent, { _id }, context, info) => {
      return await Course.findOne({ _id }).exec();
    },
   courses: async (parent, args, context, info) => {
      const courses = await Course.find({})
        .populate()
        .exec();

      return courses.map(u => ({
        _id: u._id.toString(),
        name: u.name,
        type: u.type,
        credits: u.credits,
        period: u.period                
      }));
    }
  },
  

  Mutation: {
    createCourse: async (parent, { course }, context, info) => {
      const newCourse = await new Course({
        name: u.name,
        type: u.type,
        credits: u.credits,
        period: u.period 
      });

      return new Promise((resolve, reject) => {
        newCourse.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateCourse: async (parent, { _id, course }, context, info) => {
      return new Promise((resolve, reject) => {
        Course.findByIdAndUpdate(_id, { $set: { ...course } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteCourse: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        Course.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  }
};
