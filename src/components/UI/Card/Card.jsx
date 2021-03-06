import { View, StyleSheet } from 'react-native'


const cardStyles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 10,
    display: "flex",
    alignItems: 'stretch',
    justifyContent: 'center',
    borderRadius: 5,
    margin: 5 
  }
});

const Card = (props) => {
  return (
    <View testID='card' style={cardStyles.container}>
      {props.children}
    </View>
  );
};

export default Card;