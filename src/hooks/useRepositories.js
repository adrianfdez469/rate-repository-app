import {useRef, useState, useEffect} from 'react'
import { useQuery } from '@apollo/client';
import { useDebounce } from 'use-debounce';
import { GET_REPOSITORIES } from '../graphql/queries';


export const sortValue = {
  latest: 'latest',
  highest: 'highest',
  lowest: 'lowest'
}

const useRepositories = () => {
  
  const variablesRef = useRef({first: 5});
  const { data, loading, refetch, fetchMore } = useQuery(GET_REPOSITORIES, { fetchPolicy: 'cache-and-network', variables: variablesRef.current } );
  const [filter, setFilter] = useState('');
  const [value] = useDebounce(filter, 500);
  
  const changeFilter = (value) => {
    setFilter(value);
  }

  const handleFetchMore = () => {
    const canFetch = !loading && data?.repositories.pageInfo.hasNextPage;
    if(!canFetch){
      return;
    }
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variablesRef.current,
      }
    })
  }

  const fetchSort = (value) => {
    switch(value){
      case sortValue.latest:
        variablesRef.current.orderBy = 'CREATED_AT';
        variablesRef.current.orderDirection = 'DESC';
        break;
      case sortValue.highest:
        variablesRef.current.orderBy = 'RATING_AVERAGE';
        variablesRef.current.orderDirection = 'DESC';
        break;
      case sortValue.lowest:
        variablesRef.current.orderBy = 'RATING_AVERAGE';
        variablesRef.current.orderDirection = 'ASC';
        break;
      default:
        variablesRef.current.orderBy = 'CREATED_AT';
        variablesRef.current.orderDirection = 'ASC';
        break;
    }
    refetch(variablesRef.current);
  }

  useEffect(() => {
    refetch({
      ...variablesRef.current,
      searchKeyword: filter
    })
  }, [value]);

  return { 
    repositories: data?.repositories, 
    loading,
    fetchSort,
    filter,
    fetchFilter: changeFilter,
    fetchMore: handleFetchMore
  };
};

export default useRepositories;