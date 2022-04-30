import { gql } from '@apollo/client';
import { CORE_LIST_FIELDS, CORE_REVIEW_FIELDS, REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  query GetRepositories($first: Int, $after: String, $orderBy: AllRepositoriesOrderBy, $orderDirection: OrderDirection, $searchKeyword: String) {
    repositories(first: $first, after: $after, orderBy: $orderBy, orderDirection: $orderDirection, searchKeyword: $searchKeyword) {
      ...CoreListFields
    }
  }
  ${CORE_LIST_FIELDS}
`;

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!, $first: Int, $after: String) {
    repository(id: $repositoryId) {
      url,
      ...RepositoryFields,
      reviews(first: $first, after: $after) {
        ...CoreReviewFields
      }
    }
  }
  ${REPOSITORY_FIELDS}
  ${CORE_REVIEW_FIELDS}
`;

export const ME = gql`
  query getCurrentUser($includeReviews: Boolean = false, $first: Int, $after: String){
    me {
      id
      username
      reviews (first: $first, after: $after) @include(if: $includeReviews)  {
        ...CoreReviewFields
      }
    }
  }
  ${CORE_REVIEW_FIELDS}
`;