import { gql } from '@apollo/client';

export const CREATE_MATCHUP = gql`
  mutation createMatchup($tech1: String!, $tech2: String!) {
    createMatchup(tech1: $tech1, tech2: $tech2) {
      _id
      tech1
      tech2
    }
  }
`;

export const CREATE_VOTE = gql`
  mutation createVote($_id: String!, $techNum: Int!) {
    createVote(_id: $_id, techNum: $techNum) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
  `;

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
