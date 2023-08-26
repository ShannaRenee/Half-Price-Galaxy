const { category, gen_merch, lifeForm, payment_type, real_estate, travel } = require('../models');


// I don't really know what we are doing with these yet so we need to play around these are tentative
const resolvers = {
  Query: {
    lifeForm: async () => {
      return lifeForm.findAll({});
    },
    category: async () => {
      return category.findAll({});
    },
    gen_merch: async () => {
      return gen_merch.findAll({});
    },
    real_estate: async () => {
      return real_estate.findAll({});
    },
    travel: async () => {
      return travel.findAll({});
    },
    payment_type: async () => {
      return payment_type.findAll({});
    },
  }
};

module.exports = resolvers;
