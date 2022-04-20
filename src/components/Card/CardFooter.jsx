import { StyleSheet, View } from 'react-native';
import { Text } from '../Text'

const footerStyles = StyleSheet.create({
  footerSection: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
    paddingTop: 10,
  },
  footerTag: {
    display: 'flex',
    alignItems: 'center'
  }
});

const CardFooter = ({infos}) => {
  return (
    <View style={footerStyles.footerSection}>
      {infos.map(inf => {
        return (
          <View key={inf.label} style={footerStyles.footerTag}>
            <View><Text fontWeight="bold">{inf.value}</Text></View>
            <View><Text>{inf.label}</Text></View>
        </View>)
      })}
    </View>
  );
};

export default CardFooter;