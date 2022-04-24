import { StyleSheet, View, Image } from 'react-native';
import { Text } from '../Text'
import theme from '../../theme';

const styles = StyleSheet.create({
  textItem: {
    margin: 2
  }
});


const headerStyles = StyleSheet.create({
  headerSection: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'stretch',
    margin: 0,
  },
  avatarContainer: {
    paddingRight: 10
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 5
  },
  mainInfoContainer: {
    justifyContent: "space-evenly",
    alignItems: 'flex-start',
    alignContent: 'stretch',
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 1
  },
  tag: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    backgroundColor: theme.colors.primary,
    color: '#FFF',
    borderRadius: 5,
    alignSelf: 'flex-start'
  },
});

const CardHeader = ({avatarUrl, title, subHeader, tag}) => {
  return (
    <View testID='card-header'>
      <View style={headerStyles.headerSection}>
        <View style={headerStyles.avatarContainer}>
          <Image 
            style={headerStyles.avatar} 
            source={{
              uri: avatarUrl
            }}
          />
        </View>
        <View style={headerStyles.mainInfoContainer}>
          <Text fontWeight="bold" fontSize="subheading" style={styles.textItem}>{title}</Text>
          <View>
            <Text color={"textSecondary"} style={styles.textItem}>{subHeader}</Text>

          </View>
          <Text style={[headerStyles.tag, styles.textItem]} >{tag}</Text>
          
        </View>
      </View>
    </View>
  );
};

export default CardHeader;