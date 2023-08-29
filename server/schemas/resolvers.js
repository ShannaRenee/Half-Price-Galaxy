const { categories, gen_merch, lifeForm, payment_type, real_estate, travel } = require('../models');


// I don't really know what we are doing with these yet so we need to play around these are tentative
const resolvers = {
  Query: {
    lifeForm: async () => {
      return await lifeForm.find({});
    },
    categories: async () => {
      return await categories.find({});
    },
    gen_merch: async () => {
      return await gen_merch.find({}).populate('categories');
    },
    real_estate: async () => {
      return await real_estate.find({}).populate('categories');
    },
    travel: async () => {
      return await travel.find({}).populate('categories');
    },
    payment_type: async () => {
      return await payment_type.find({}).populate('lifeForm');
    },
  }
};

module.exports = resolvers;
