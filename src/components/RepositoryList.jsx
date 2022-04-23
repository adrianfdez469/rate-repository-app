import { FlatList, View, StyleSheet } from 'react-native';
import RepositiryItem from './RpositoryItem';
import useRepositories from '../hooks/useRepositories';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  const repositoryNodes = repositories 
    ? repositories.edges.map(edge => ({...edge.node, key: edge.node.fullName}))
    : []; 

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositiryItem}
    />
  );
};

export default RepositoryList;