import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-native';
import useRepositories, { sortValue } from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {

  const { repositories, fetchSort, fetchFilter, filter, fetchMore } = useRepositories();
  const goTo = useNavigate();
  const location = useLocation();
  const [selectedValue, setSelectedValue] = useState();

  const pickerOpts = [
    {
      label: 'Latest repositories',
      value: sortValue.latest
    },
    {
      label: 'Highest rated repositories',
      value: sortValue.highest
    },
    {
      label: 'Lowest rated repositories',
      value: sortValue.lowest
    },
  ];

  const onPick = (itemValue) => {
    setSelectedValue(itemValue);
  }

  const handlePress = (item) => {
    const path = `/repository/${item.id}`;
    if(location.pathname !== path){
      goTo(`/repository/${item.id}`);
    } 
  }

  const onEndListReach = () => {
    fetchMore()
  };

  useEffect(() => {
    fetchSort(selectedValue);
  }, [selectedValue]);

  return <RepositoryListContainer 
    repositories={repositories} 
    fetchFilter={fetchFilter} 
    filter={filter}
    handlePress={handlePress}
    selectedValue={selectedValue}
    pickerOpts={pickerOpts}
    onPick={onPick}
    onEndListReach={onEndListReach}
  />
};

export default RepositoryList;