const db = require('../config/connection');
const { Lifeforms, Realestate, GenMerch, Travel, Categories, Payment } = require('../models'); //Links to User model

const lifeformData = require('./lifeformData.json'); //Links to userData.json
const realestateData = require('./realestateData.json'); //Links to realestateData.json
const genMerchData = require('./genMerchData.json'); //Links to genMercData.json
const travelData = require('./travelData.json'); //Links to travelData.json
const categoriesData = require('./categoriesData.json'); //Links to categoriesData.json
const paymentData = require('./paymentData.json'); //Links to paymentData.json

db.once('open', async () => {
  await User.deleteMany({});

  const Lifeforms = await User.insertMany(userData);
  const Realestate = await User.insertMany(realestateData);
  const GenMerch = await User.insertMany(genMerchData);
  const Travel = await User.insertMany(travelData);
  const Categories = await User.insertMany(categoriesData);
  const Payment = await User.insertMany(paymentData);

  console.log('Data seeded!');
  process.exit(0);
});
