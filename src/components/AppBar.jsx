import { View, StyleSheet, ScrollView } from 'react-native';
import { Link, useLocation } from 'react-router-native';
import { useQuery } from '@apollo/client'

import Constants from 'expo-constants';
import { SubHeadingText } from './Text';
import theme from '../theme';
import { ME } from '../graphql/queries';

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

const AppBar = () => {
  const location = useLocation();
  const { data, /*loading, error*/ } = useQuery(ME);


  return <View style={AppBarStyles.container}>
    <ScrollView horizontal>
      <AppBarTab isActive={location.pathname === repositoriesTab.path} item={repositoriesTab}/>   
      {data?.me 
        ? <AppBarTab isActive={location.pathname === signOutTab.path} item={signOutTab}/>
        : <AppBarTab isActive={location.pathname === signInTab.path} item={signInTab}/>   
      }
    </ScrollView>
  </View>;
};

export default AppBar;