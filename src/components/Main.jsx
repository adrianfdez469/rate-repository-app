import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.bgColors.light,
  }
});

const tabs = ["Repositories"]

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar tabs={tabs} />
      <RepositoryList />
    </View>
  );
}

export default Main;