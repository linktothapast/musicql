import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Room {
    _id: String
    name: String
    songs: [Song]
  }
  type Song {
    _id: String
    room: Room
    title: String
    performer: String
    url: String
  }
  type Query {
    rooms: [Room]
    room(name: String): Room
    songs: [Song]
  }
  type Mutation {
    addRoom(name: String): Room
    deleteRoom(_id: String): Boolean
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
