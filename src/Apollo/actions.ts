import { gql } from "@apollo/client";


export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
      id
      name
      species
      type
      status
      gender
      image
      location {
        name
        dimension
      }
      origin {
        name
      }
    }
    }
  }
`;