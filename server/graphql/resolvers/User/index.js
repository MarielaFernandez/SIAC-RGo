import User from "../../../server/models/User";
import Post from "../../../server/models/Post";
import Comment from "../../../server/models/Comment";

export default {
  Query: {
    user: async (parent, { _id }, context, info) => {
      return await User.findOne({ _id }).exec();
    },
    users: async (parent, args, context, info) => {
      const users = await User.find({})
        .populate()
        .exec();

      return users.map(u => ({
        _id: u._id.toString(),
        document: u.document,
        name: u.name,
        lastName: u.lastName,
        sex: u.sex,
        email: u.email,
        age: u.age,
        rol: u.rol,
        status: u.status,
        posts: u.posts,
        comments: u.comments
      }));
    }
  },
  Mutation: {
    createUser: async (parent, { user }, context, info) => {
      const newUser = await new User({
        document: user.document,
        name: user.name,
        lastName: user.lastName,
        sex: user.sex,
        email: user.email,
        age: user.age,
        rol: user.rol,
        province:user.province,
        canton:user.canton,
        district:user.district,
        neighborhood:user.neighborhood,
        km:user.km,
        appointment:user.appointment,
        academic_degree:user.academic_degree,
        phone_number:user.phone_number,
        status: user.status
      });

      return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    },
    updateUser: async (parent, { _id, user }, context, info) => {
      return new Promise((resolve, reject) => {
        User.findByIdAndUpdate(_id, { $set: { ...user } }, { new: true }).exec(
          (err, res) => {
            err ? reject(err) : resolve(res);
          }
        );
      });
    },
    deleteUser: async (parent, { _id }, context, info) => {
      return new Promise((resolve, reject) => {
        User.findByIdAndDelete(_id).exec((err, res) => {
          err ? reject(err) : resolve(res);
        });
      });
    }
  },
  User: {
    posts: async ({ _id }, args, context, info) => {
      return await Post.find({ author: _id });
    },
    comments: async ({ _id }, args, context, info) => {
      return await Comment.find({ author: _id });
    }
  }
};
