import { ApolloServer } from 'apollo-server';

import typeDefs from './schema';
import resolvers from './resolvers';

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
    cors: {
        origin: 'https://ecommerce-frontend-pe84.onrender.com',
    }
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});