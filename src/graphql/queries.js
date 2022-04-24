import { gql } from '@apollo/client';
import { CORE_LIST_FIELDS, REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query GetRepositories($first: Int) {
    repositories(first: $first) {
      ...CoreListFields
    }
  }
  ${CORE_LIST_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryFields,
      url,
      reviews {
        edges {
          cursor
          node {
            id
            createdAt
            rating
            text
            user {
              id
              username
            }
          }
        }
      }
    }
  }
  ${REPOSITORY_FIELDS}
`;

export const ME = gql`
  query {
    me {
      id
      username
    }
  }
`;