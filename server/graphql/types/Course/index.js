export default `
  type Course {
    initial: String!
    name: String!
    type: String!
    credits: String!
    period: String!  
      
  }

  type Query {
    course(_id: ID!): Course!
    courses: [course!]!
  }

  type Mutation {
    createCourse(course: CreateCourseInput): Course!
    updateCourse(_id: String!, course: UpdateCourseInput!): Course!
    deleteCourse(_id: String!): Course!
    
  }

  input CreateCourseInput {
  
    initial: String!
    name: String!
    type: String!
    credits: String!
    period: String! 

  }
  
  input UpdateCourseInput {
    initial: String!
    name: String!
    type: String!
    credits: String!
    period: String! 
  } 
`;
