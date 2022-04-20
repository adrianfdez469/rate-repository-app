import { View, StyleSheet, Image } from 'react-native'
import theme from '../theme';
import {Text} from './Text'

const styles = StyleSheet.create({
  textItem: {
    margin: 2
  }
});


const parseNumberToThousens = (number) => {
  if(number > 999){
    const result = number/1000;
    return `${result.toFixed(1)}k`;
  } else{
    return number
  }
}

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
    <View>
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
            <View><Text fontWeight="bold">{parseNumberToThousens(inf.value)}</Text></View>
            <View><Text>{inf.label}</Text></View>
        </View>)
      })}
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 10,
    display: "flex",
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 5,
    borderRadius: 5,
  }
});

const Card = (props) => {
  return (
    <View style={cardStyles.container}>
      {props.children}
    </View>
  );
};

const RepositiryItem = ({item}) => {

  const infos = [
    {
      value: parseNumberToThousens(item.stargazersCount),
      label: "Stars"
    },
    {
      value: parseNumberToThousens(item.forksCount),
      label: "Forks"
    },
    {
      value: parseNumberToThousens(item.reviewCount),
      label: "Reviews"
    },
    {
      value: parseNumberToThousens(item.ratingAverage),
      label: "Rating"
    },
  ];

  return (
    <Card>

      <CardHeader 
        avatarUrl={item.ownerAvatarUrl} 
        title={item.fullName}  
        subHeader={item.description}
        tag={item.language}
      />

      <CardFooter infos={infos} />
    </Card>
    

      
  )

}
export default RepositiryItem;