import Event from "../../../server/models/Course";

export default {
  Query: {
    course: async (parent, { _id }, context, info) => {
      return await Course.findOne({ _id }).exec();
    },
   courses: async (parent, args, context, info) => {
      const coursess = await Course.find({})
        .populate()
        .exec();

      return courses.map(u => ({
        _id: u._id.toString(),
        name: u.name,
        startDate: u.startDate,
        endDate: u.endDate                
      }));
    }
  },
  

  Mutation: {
    createCourse: async (parent, { course }, context, info) => {
      const newCourse = await new Course({
        name: course.name,
        startDate: course.startDate,
        endDate: course.endDate
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
