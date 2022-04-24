import { View, StyleSheet } from 'react-native'
import { SubHeadingText } from '../Text';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  frame: {
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: "#FFF",
    alignSelf: 'center',
    margin: 50,
    maxWidth: 350,
    width: '80%',
    borderRadius: 5
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  }
});

const Modal = ({title, children}) => {

  return (
    <View style={styles.container}>

      <View style={styles.frame}>
        {title && <SubHeadingText style={styles.title}>{title}</SubHeadingText>}
        {children}
      </View>
    </View>
  );
};

export default Modal