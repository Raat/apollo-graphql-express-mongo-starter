import mongoose from 'mongoose';
import casual from 'casual';

mongoose.connect('mongodb://mongo:27017', { useMongoClient: true });

const { connection } = mongoose;

connection.on('error', () => { console.log('---FAILED to connect to mongoose'); });
connection.once('open', () => {
  console.log('+++Connected to mongoose');
});

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
});

const User = mongoose.model('User', userSchema);

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

export { userSeeder };

export default User;
