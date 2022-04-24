import { Pressable as NativePressable, StyleSheet } from 'react-native';
import { Text, theme }  from '../';

const styles = StyleSheet.create({
  presable: {
    alignSelf:'center',
    marginVertical: 10,
    padding: 15,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    width: '100%'
  },
  presableText: {
    color: theme.colors.light,
    fontSize: 18,
    alignSelf: 'center'
  }
});

const Presable = ({onPress, text}) => {

  return (
    <NativePressable testID='btn-submit' onPress={onPress} style={styles.presable}>
      <Text fontWeight="bold" style={styles.presableText}>{text}</Text>
    </NativePressable>
  );
};

export default Presable;