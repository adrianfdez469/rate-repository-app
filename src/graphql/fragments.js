import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFields on Repository {
    id
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
      endCursor
      startCursor
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

export const CORE_REVIEW_FIELDS = gql`
fragment CoreReviewFields on ReviewConnection {
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
      repository {
        fullName
        url
      }
    }
  }
  pageInfo {
    endCursor
    startCursor
    hasNextPage
  }
}
`;