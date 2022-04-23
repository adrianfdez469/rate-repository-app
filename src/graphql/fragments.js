import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFields on Repository {
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    ownerAvatarUrl
  }
`;

export const CORE_LIST_FIELDS = gql`
  fragment CoreListFields on RepositoryConnection {
    totalCount
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        ...RepositoryFields
      }
    }
  }
  ${REPOSITORY_FIELDS}
`;