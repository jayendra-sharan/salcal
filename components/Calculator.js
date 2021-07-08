import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {fields} from '../constants/fields';
import {labels} from '../constants/labels';
import {getNumber} from '../utils';
import GroupHeader from './form/GroupHeader';
import Input from './form/Input';

const initialState = {
  ctc: 0,
  variable: 0,
  joiningBonus: 0,
  annualBonus: 0,
};

const Calculator = () => {
  const [state, setState] = useState(initialState);

  const onChange = (text, id) => {
    setState({
      ...state,
      [id]: getNumber(text),
    });
  };

  console.log(state);
  return (
    <View style={styles.container}>
      <GroupHeader text={labels.earnings} />
      <Input field={fields.ctc} onChange={onChange} />
      <Input field={fields.variable} onChange={onChange} />
      <Input field={fields.annualBonus} onChange={onChange} />
      <Input field={fields.joiningBonus} onChange={onChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Calculator;
