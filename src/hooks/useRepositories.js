
import { useQuery } from '@apollo/client'
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  
  const { data, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: {
      first: 5
    }
  });

  return { repositories: data?.repositories, loading, refetch: refetch };
};

export default useRepositories;