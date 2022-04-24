import { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native';
import RepositoryItem from './RpositoryItem';
import { useNavigate, useLocation } from 'react-router-native';
import {Picker} from '@react-native-picker/picker';

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
  const [selectedLanguage, setSelectedLanguage] = useState();

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
      ListHeaderComponent={
        <Picker
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) =>
            setSelectedLanguage(itemValue)
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      }
    />
  );
}

export default RepositoryListContainer;