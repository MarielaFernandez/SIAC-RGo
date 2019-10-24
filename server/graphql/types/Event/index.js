export default `
  type Event {
    _id: String!
    name: String!
    startDate: String!
    endDate: String!    
  }

  type Query {
    event(_id: ID!): Event!
    events: [Event!]!
  }

  type Mutation {
    createEvent(event: CreateEventInput): Event!
    updateEvent(_id: String!, event: UpdateEventInput!): Event!
    deleteEvent(_id: String!): Event!
  }

  input CreateEventInput {
    name: String!
    startDate: String!
    endDate: String!
  }
  
  input UpdateEventInput {
    name: String
    startDate: String
    endDate: String
  } 
`;
