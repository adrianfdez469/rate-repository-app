import { gql } from '@apollo/client';
import { CORE_LIST_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query GerRepositories($first: Int) {
    repositories(first: $first) {
      ...CoreListFields
    }
  }
  ${CORE_LIST_FIELDS}
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;