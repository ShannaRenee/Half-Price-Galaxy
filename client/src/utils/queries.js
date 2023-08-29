import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
  query tech {
    tech {
      _id
      name
    }
  }
`;

export const QUERY_MATCHUPS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_LIFEFORM = gql`
query lifeForm {
  lifeForm {
    _id
    email
    first_name
    home_planet
    last_name
  }
}
`;

export const QUERY_GENMERCH = gql`
query gen_merch {
  gen_merch {
    _id
    categories {
      _id
      name
    }
    description
    item_name
    price
  }
}
`;

export const QUERY_REALESTATE = gql`
query real_estate {
  real_estate {
    _id
    item_name
    item_description
    item_price
    categories {
      _id
      name
    }
  }
}
`;

export const QUERY_TRAVEL = gql`
query travel {
  travel {
    _id
    package_name
    description
    price
    categories {
      _id
      name
    }
  }
}
`;

export const QUERY_PAYMENTTYPE = gql`
query payment_type {
  payment_type {
    _id
    name
    lifeForm {
      _id
    }
  }
}
`;

export const QUERY_CATEGORIES = gql`
query categories {
  categories {
    _id
    name
  }
}
`;