import { View, StyleSheet, ScrollView } from 'react-native';
import { Link } from 'react-router-native';

import Constants from 'expo-constants';
import { theme, SubHeadingText } from '../';

const AppBarStyles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.bgColors.dark,
    display:'flex',
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: 'flex-end'
  }
});

const AppBarTabStyles = StyleSheet.create({
  text: {
    color: theme.colors.light
  },
  items: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  active: {
    borderBottomColor: theme.colors.light,
    borderWidth: 1
  }
})

const AppBarTab = ({item, isActive}) => {
  return (
  <View style={AppBarTabStyles.items}>
    <Link to={item.path}>
      <SubHeadingText style={AppBarTabStyles.text} >{item.text}</SubHeadingText>
    </Link>
    {isActive && <View style={AppBarTabStyles.active}></View>}
  </View>
  )};


  const repositoriesTab = {
    text: "Repositories",
    path: "/"
  };
  const signInTab = {
    text: "Sign in",
    path: "/signin"
  };
  const signOutTab = {
    text: "Sign out",
    path: "/signout"
  };
  const createReviewTab = {
    text: 'Create a review',
    path: '/createreview'
  };

const AppBar = ({location, isLogin}) => {
  return <View style={AppBarStyles.container}>
  <ScrollView horizontal>
    <AppBarTab isActive={location.pathname === repositoriesTab.path} item={repositoriesTab}/>
    {isLogin 
      ? <>
          <AppBarTab isActive={location.pathname === createReviewTab.path} item={createReviewTab}/>
          <AppBarTab isActive={location.pathname === signOutTab.path} item={signOutTab}/>
      </>
      : <AppBarTab isActive={location.pathname === signInTab.path} item={signInTab}/>   
    }
  </ScrollView>
</View>;
}

export default AppBar;