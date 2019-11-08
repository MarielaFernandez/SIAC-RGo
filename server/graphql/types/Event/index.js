export default `
  type Event {
    _id: String!
    title: String!
    start: String!
    end: String!
    allDay: String!  
    color: String!   
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
  
    title: String!
    start: String!
    end: String!
    allDay: String!  
    color: String!

  }
  
  input UpdateEventInput {
    _id: String!
    title: String!
    start: String!
    end: String!
    allDay: String!  
    color: String!
  } 
`;
