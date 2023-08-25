const db = require('../config/connection');
const { User, Realestate } = require('../models'); //Links to User model

const userData = require('./userData.json'); //Links to userData.json
const realestateData = require('./realestateData.json'); //Links to realestateData.json

db.once('open', async () => {
  await User.deleteMany({});

  const users = await User.insertMany(userData);

  console.log('Users seeded!');
  process.exit(0);
});
