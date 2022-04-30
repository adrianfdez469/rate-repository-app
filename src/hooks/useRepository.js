import { useQuery } from '@apollo/client'
import { GET_REPOSITORY } from '../graphql/queries'

const useRepository = (id) => {

  const variables = {
    repositoryId: id,
    first: 5
  };
  const { data, loading, refetch, fetchMore } = useQuery(GET_REPOSITORY, {
    fetchPolicy: 'cache-and-network',
    variables: variables
  });

  const handleFetchMore = () => {
    
    const canFecth = !loading && data?.repository.reviews.pageInfo.hasNextPage; 
    if(!canFecth){
      return;
    }

    fetchMore({variables: {
      ...variables,
      after: data?.repository.reviews.pageInfo.endCursor
    }})


  }

  return { repository: data?.repository, loading, refetch: refetch, fetchMore: handleFetchMore };

}
export default useRepository