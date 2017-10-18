import casual from 'casual';
import { User } from '.';

const userSeeder = (req, res) => {
  let i = 0;
  while (i < 10) {
    const newUser = new User({
      firstName: casual.first_name,
      lastName: casual.last_name,
    });
    // save the user
    newUser.save((err) => {
      if (err) throw err;
      console.log('User created!');
    });
    i += 1;
  }
  res.send('Users seeded in the database');
};

export default userSeeder;
