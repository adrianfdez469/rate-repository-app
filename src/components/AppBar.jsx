import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SubHeadingText } from './Text';
import theme from '../theme';

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
    marginVertical: 20,
    marginHorizontal: 10,
  },
  active: {
    borderBottomColor: theme.colors.light,
    borderWidth: 1
  }
})

const AppBarTab = ({item, isActive}) => {
  return <View style={AppBarTabStyles.items}>
    <SubHeadingText style={AppBarTabStyles.text} >{item}</SubHeadingText>
    {isActive && <View style={AppBarTabStyles.active}></View>}
  </View>
};

const AppBar = ({tabs}) => {

  return <View style={AppBarStyles.container}>
    {tabs.map(t => <AppBarTab key={t} isActive item={t}/>)}
  </View>;
};

export default AppBar;