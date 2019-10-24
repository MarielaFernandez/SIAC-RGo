import { mergeResolvers } from "merge-graphql-schemas";

import User from "./User/";
import Post from "./Post/";
import Comment from "./Comment/";
import Event from "./Event/";

const resolvers = [User, Post, Comment, Event];

export default mergeResolvers(resolvers);
