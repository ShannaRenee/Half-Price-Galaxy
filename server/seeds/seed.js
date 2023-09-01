const db = require('../config/connection');
const { lifeForm, real_estate, gen_merch, travel, categories, payment_type } = require('../models'); //Links to User model

const lifeformData = require('./lifeformData.json'); //Links to userData.json
const realestateData = require('./realestateData.json'); //Links to realestateData.json
const genMerchData = require('./genMerchData.json'); //Links to genMercData.json
const travelData = require('./travelData.json'); //Links to travelData.json
const categoriesData = require('./categoriesData.json'); //Links to categoriesData.json
const paymentData = require('./paymentData.json'); //Links to paymentData.json

db.once('open', async () => {
  await lifeForm.deleteMany({});

  const addlifeForm = await lifeForm.insertMany(lifeformData);
  const addrealEstate = await real_estate.insertMany(realestateData);
  const addgenMerch = await gen_merch.insertMany(genMerchData);
  const addTravel = await travel.insertMany(travelData);
  const addCategories = await categories.insertMany(categoriesData);
  const addPaymentType = await payment_type.insertMany(paymentData);

  console.log('Data seeded!');
  process.exit(0);
});
