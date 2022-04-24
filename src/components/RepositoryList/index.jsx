import useRepositories from '../../hooks/useRepositories';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories, refetch, fetchSort, fetchFilter, filter } = useRepositories();
  return <RepositoryListContainer repositories={repositories} refetch={refetch} fetchSort={fetchSort} fetchFilter={fetchFilter} filter={filter}/>
};

export default RepositoryList;