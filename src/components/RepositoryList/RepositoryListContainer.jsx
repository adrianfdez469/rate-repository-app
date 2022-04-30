import { FlatList, TouchableOpacity } from 'react-native';
import RepositoryItem from './RpositoryItem';
import { Picker, TextInput } from '../UI';


const RenderItem = ({item, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <RepositoryItem item={item} />
    </TouchableOpacity>
  );
}

const RepositoryListContainer = ({repositories, handlePress, fetchFilter, filter, onPick, selectedValue, pickerOpts=[], onEndListReach}) => {

  const repositoryNodes = repositories 
    ? repositories.edges.map(edge => ({...edge.node}))
    : [];

    const renderItem = ({item}) => {

      return <RenderItem item={item} handlePress={() => handlePress(item)} />
    };

  return (
    <FlatList
      data={repositoryNodes}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      ListHeaderComponent={
        <>
          <TextInput value={filter} onChange={({target}) => fetchFilter(target.value)} style={{margin:5}} placeholder="Search..."/>
          <Picker 
            options={pickerOpts}
            selectedValue={selectedValue}
            onValueChange={onPick}
            mode="dialog"
          />
        </>
      }
      onEndReached={onEndListReach}
      onEndReachedThreshold={0.3}
    />
  );
}

export default RepositoryListContainer;