import { StyleSheet, View, Image } from 'react-native';
import { theme } from '../theme';
import { SubHeadingText, Text } from '../Text';

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
  avatarTextContainer: {
    width: 45,
    height: 45,
    marginRight: 5,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 45/2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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

const CardHeader = ({avatarUrl, avatarShorttext, title, subHeader, tag, text}) => {
  return (
    <View testID='card-header'>
      <View style={headerStyles.headerSection}>
      {avatarUrl ?
        <View style={headerStyles.avatarContainer}>
           <Image 
            style={headerStyles.avatar} 
            source={{
              uri: avatarUrl
            }}
          /> 
        </View>
        : 
          <View style={headerStyles.avatarTextContainer}>
            <SubHeadingText>{avatarShorttext || title.charAt(0).toUpperCase()}
          </SubHeadingText></View>
        }

        <View style={headerStyles.mainInfoContainer}>
          <Text fontWeight="bold" fontSize="subheading" style={styles.textItem}>{title}</Text>
          <View>
            <Text color={"textSecondary"} style={styles.textItem}>{subHeader}</Text>
          </View>
          {tag && <Text style={[headerStyles.tag, styles.textItem]} >{tag}</Text>}
          {text && <Text style={styles.textItem} >{text}</Text>}
        </View>
      </View>
    </View>
  );
};

export default CardHeader;