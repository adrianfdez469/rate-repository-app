import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  inputs: {
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginVertical: 5,
  },
  inputsError: {
    borderColor: theme.colors.danger
  }
});


const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.inputs, style, error && styles.inputsError];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;