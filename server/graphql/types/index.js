import { mergeTypes } from "merge-graphql-schemas";

import User from "./User/";
import Event from "./Event/";
import Post from "./Post/";
import Comment from "./Comment/";
import Course from "./Course/";

const typeDefs = [User, Event, Post, Comment, Course];

// NOTE: 2nd param is optional, and defaults to false
// Only use if you have defined the same type multiple times in
// different files and wish to attempt merging them together.
export default mergeTypes(typeDefs, { all: true });

