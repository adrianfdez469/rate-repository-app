import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.bgColors.light,
  }
});

const tabs = [
  {
    text: "Repositories",
    path: "/"
  }, 
  {
    text: "Sign in",
    path: "/signin"
  }
];

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar tabs={tabs} />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/signin' element={<SignIn />} exact />
        <Route path='*' element={<Navigate to='/' />} replace />
      </Routes>
    </View>
  );
}

export default Main;