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

const AppBar = ({location, tabs}) => {
  return ( 
    <View style={AppBarStyles.container}>
      <ScrollView horizontal>
        {tabs.map(t => 
          <AppBarTab key={t.path} isActive={location.pathname === t.path} item={t}/>
        )}
      </ScrollView>
    </View>
  );
}

export default AppBar;