import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../constants/colors';

const Hint = ({text}) => {
  return <Text style={styles.hint}>{text}</Text>;
};

const styles = StyleSheet.create({
  hint: {
    fontSize: 10,
    fontStyle: 'italic',
    color: colors.tertiary,
  },
});

export default Hint;
