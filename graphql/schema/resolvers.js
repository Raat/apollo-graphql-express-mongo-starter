import User from '../../mongo/db';

const resolvers = {
  Query: {
    users: () =>
      // get all the users
      User.find({}, (err, users) => {
        if (err) throw err;
        console.log(users[0].id);

        // object of all the users
        return Promise.resolve(users);
      })
    ,
  },
};


export default resolvers;
