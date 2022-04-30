import { useQuery } from "@apollo/client"
import { ME } from "../graphql/queries"


const useMe = (includeReviews = false) => {

  const variables = {
    first: 5,
    includeReviews: includeReviews
  }
  const { data, fetchMore, loading, refetch } = useQuery(ME, {
    fetchPolicy: 'cache-and-network',
    variables
  })

  const handleRefetch = () => {
    refetch(variables);
  }

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if(!canFetchMore){
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        after: data?.me.reviews.pageInfo.endCursor,
      }
    });
  }

  return {
    data,
    loading,
    fetchMore: handleFetchMore,
    refetch: handleRefetch
  }
}

export default useMe