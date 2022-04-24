import { StyleSheet, View } from 'react-native';
import { Text } from '../';

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
    <View testID='card-footer' style={footerStyles.footerSection}>
      {infos.map(inf => {
        return (
          <View testID='card-footer-item'  key={inf.label} style={footerStyles.footerTag}>
            <View testID='footer-item-value'><Text fontWeight="bold">{inf.value}</Text></View>
            <View testID='footer-item-label'><Text>{inf.label}</Text></View>
        </View>)
      })}
    </View>
  );
};

export default CardFooter;