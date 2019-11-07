import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Post from "./Post/";
import Comment from "./Comment/";
import Event from "./Event/";
import Course from "./Course/";

const resolvers = [User, Post, Comment, Event, Course];

export default mergeResolvers(resolvers);
