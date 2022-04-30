import { Pressable as NativePressable, StyleSheet } from 'react-native';
import { Text }  from '../Text';
import { theme }  from '../theme';


const styles = StyleSheet.create({
  presable: {
    //alignSelf:'center',
    marginVertical: 10,
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    alignSelf: 'auto'
  },
  presableText: {
    color: theme.colors.light,
    fontSize: 18,
    alignSelf: 'center'
  }
});

const Presable = ({onPress, text, style}) => {

  return (
    <NativePressable testID='btn-submit' onPress={onPress} style={[styles.presable, style]}>
      <Text fontWeight="bold" style={styles.presableText}>{text}</Text>
    </NativePressable>
  );
};

export default Presable;