import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {colors} from '../../constants/colors';
import Hint from './Hint';
import Label from './Label';

const Input = ({field, onChange}) => {
  const {hint, label, placeholder, id} = field;
  const onChangeText = text => onChange(text, id);
  return (
    <View style={styles.container}>
      <Label text={label} />
      <TextInput
        style={styles.input}
        id={id}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      <Hint text={hint} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 26,
    height: 40,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    borderColor: colors.border,
    color: colors.primary,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 25,
  },
});

export default Input;
