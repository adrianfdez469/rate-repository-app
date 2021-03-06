import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Menu from './Menu';
import Repository from './Repository/Repository';
import ReviewForm from './ReviewForm';
import { theme } from './UI';
import SignUp from './SignUp';
import UserReview from './UserReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.bgColors.light,
  }
});

const Main = () => {

  return (
    <View style={styles.container}>
      <Menu />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/repository/:id' element={<Repository />} exact />
        <Route path='/createreview' element={<ReviewForm />} exact />
        <Route path='/myreviews' element={<UserReview />} exact />
        <Route path='/signin' element={<SignIn />} exact />
        <Route path='/signout' element={<SignOut />} exact />
        <Route path='/signup' element={<SignUp />} exact />
        <Route path='*' element={<Navigate to='/' />} replace />
      </Routes>
    </View>
  );
}

export default Main;