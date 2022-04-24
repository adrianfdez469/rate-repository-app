import { FlatList, TouchableOpacity } from 'react-native';
import RepositoryItem from './RpositoryItem';
import { useNavigate, useLocation } from 'react-router-native';


const RenderItem = ({item, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );
}

const RepositoryListContainer = ({repositories}) => {

  const goTo = useNavigate();
  const location = useLocation();

  const repositoryNodes = repositories 
    ? repositories.edges.map(edge => ({...edge.node/*, key: edge.node.id*/}))
    : [];

  const renderItem = ({item}) => {
    const handlePress = () => {
      const path = `/repository/${item.id}`;
      if(location.pathname !== path){
        goTo(`/repository/${item.id}`);
      } 
    }

    return <RenderItem item={item} handlePress={handlePress} />
  };

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
}

export default RepositoryListContainer;