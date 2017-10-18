import mongoose from 'mongoose';
import bluebird from 'bluebird';

mongoose.Promise = bluebird;

mongoose.connect('mongodb://mongo:27017', { useMongoClient: true });

const db = mongoose.connection;

db.on('error', () => { console.log('---FAILED to connect to mongoose'); });
db.once('open', () => {
  console.log('+++Connected to mongoose');
});

export default db;
