import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './graphql/schema/schema';
import { userSeeder } from './mongo/db';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World i updated');
});

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled
app.get('/user/seed', userSeeder);


app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

