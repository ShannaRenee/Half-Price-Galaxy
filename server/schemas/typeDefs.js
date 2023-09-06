const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type lifeForm {
    _id: ID
    first_name: String
    last_name: String
    email: String
    password: String
    home_planet: String
  }

  type categories {
    _id: ID
    name: String
  }

  type gen_merch {
    _id: ID
    item_name: String
    description: String
    price: String
    categories: [categories]
  }

  type real_estate {
    _id: ID
    item_name: String
    item_description: String
    item_price: String
    categories: [categories]
  }

  type travel {
    _id: ID
    packageName: String
    description: String
    price: String
    categories: [categories]
  }

  type payment_type {
    _id: ID
    name: String
    lifeForm: [lifeForm]
  }

  type Query {
    lifeForm: [lifeForm]
    categories: [categories]
    gen_merch: [gen_merch]
    real_estate: [real_estate]
    travel: [travel]
    payment_type: [payment_type]
  }

  type Mutation {
    addLifeForm(first_name: String!, last_name: String!, email: String!, password: String!, home_planet: String!): lifeForm
    login(email: String!, password: String!): LoginResponse!
  }
  
  
  type LoginResponse {
    success: Boolean!
    message: String
    userId: ID
  }
`;

module.exports = typeDefs;
