import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../constants/colors';

const Label = ({text}) => {
  return <Text style={styles.label}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    color: colors.secondary,
  },
});

export default Label;
