import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RpositoryItem';


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({repositories}) => {
  const repositoryNodes = repositories 
  ? repositories.edges.map(edge => ({...edge.node, key: edge.node.fullName}))
  : []; 

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryItem}
    />
  );
}

export default RepositoryListContainer;