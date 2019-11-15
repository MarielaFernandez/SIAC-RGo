export default `
  type User {
    _id: String!
    document: String!
    name: String!
    lastName: String!
    sex: String!
    email: String!
    age: Int!
    rol: String!
    status: String!
    posts: [Post!]!
    comments: [Comment!]!
  }

  type Query {
    user(_id: ID!): User!
    users: [User!]!
  }

  type Mutation {
    createUser(user: CreateUserInput): User!
    updateUser(_id: String!, user: UpdateUserInput!): User!
    deleteUser(_id: String!): User!
  }

  input CreateUserInput {
 
    document: String!
    name: String!
    lastName: String!
    sex: String!
    email: String!
    age: String!
    rol: String!
    status: String!
  }
  
  input UpdateUserInput {
    name: String
    email: String
    age: Int
  } 
`;
