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
  },

  Mutation: {
    addLifeForm: async (parent, { first_name, last_name, email, password, home_planet }) => {
      return await lifeForm.create({ first_name, last_name, email, password, home_planet });
    },
    login: async (_, { email, password }) => {
      try {
        // Find a lifeForm with the provided email
        const foundLifeForm = await lifeForm.findOne({ email });
    
        // If no lifeForm is found or the password is incorrect, return an error
        if (!foundLifeForm || !(await foundLifeForm.isCorrectPassword(password))) {
          return {
            success: false,
            message: 'Invalid email or password',
            userId: null,
          };
        }
    
        // If the email and password match, return the userId
        return {
          success: true,
          message: 'Login successful',
          userId: foundLifeForm._id,
        };
      } catch (error) {
        console.error('Error during login:', error); // Log the error for debugging
        return {
          success: false,
          message: 'An error occurred during login',
          userId: null,
        };
      }
    },
    

    // THESE ARE NICE TO HAVE BUT NOT NECESSARY FOR MVP - these will not be the focus in anyway!
    // addCategory: async (parent, { name }) => {
    //   return await categories.create({ name });
    // },
    // addGenMerch: async (parent, { item_name, description, price, categories }) => {
    //   return await gen_merch.create({ item_name, description, price, categories });
    // },
    // addRealEstate: async (parent, { item_name, item_description, item_price, categories }) => {
    //   return await real_estate.create({ item_name, item_description, item_price, categories });
    // },
    // addTravel: async (parent, { packageName, description, price, categories }) => {
    //   return await travel.create({ packageName, description, price, categories });
    // },
    // addPaymentType: async (parent, { name, lifeForm }) => {
    //   return await payment_type.create({ name, lifeForm });
    // },
  },
};

module.exports = resolvers;
