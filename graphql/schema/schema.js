import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import resolvers from './resolvers';
import mocks from './mocks';

const typeDefs = `
  type User {
    id: ID!
    #first name of the user
    firstName: String
    lastName: String  
  }
  type Query {
     users: [User]
  }
`;

// let schema; // eslint-disable-line import/no-mutable-exports

// if (process.env === 'development') {
//   // mock response
// } else {
// }

// const schema = makeExecutableSchema({ typeDefs });
// addMockFunctionsToSchema({ schema, mocks });

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
