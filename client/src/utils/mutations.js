import { gql } from '@apollo/client';

export const ADD_LIFEFORM = gql`
  mutation AddLifeForm($firstName: String!, $lastName: String!, $email: String!, $password: String!, $homePlanet: String!) {
    addLifeForm(first_name: $firstName, last_name: $lastName, email: $email, password: $password, home_planet: $homePlanet) {
      _id
      email
      first_name
      home_planet
      last_name
      password
    }
  }
`;
