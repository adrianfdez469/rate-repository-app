import { StyleSheet } from 'react-native';
import {Picker as NativePicker} from '@react-native-picker/picker';
import { theme } from '../theme'

const styles = StyleSheet.create({
  picker: {
    height: 55,
    backgroundColor: theme.bgColors.light,
    borderColor: '#bbb',
    margin: 5,
    paddingHorizontal: 10,
    fontFamily: theme.fonts.main,
    fontSize: 16
  }
});


const Picker = ({selectedValue, onValueChange, options, ...props}) => {

  return (
    <NativePicker
      style={styles.picker}
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      {...props}
    > 
      {
        options.map(opt => {
          return (
            <NativePicker.Item key={opt.value} label={opt.label} value={opt.value}/>
            ); 
        })
      }
    </NativePicker>
  );

}

export default Picker;