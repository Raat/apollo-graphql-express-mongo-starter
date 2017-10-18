import { User } from '../../mongo';

const resolvers = {
  Query: {
    users: () =>
      // get all the users
      User.find().then(users => users).catch((err) => { console.log(err); })
    ,
  },
};


export default resolvers;
