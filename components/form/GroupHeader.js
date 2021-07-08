import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../constants/colors';

const GroupHeader = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.hint}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  hint: {
    fontSize: 40,
    color: colors.primary,
    paddingBottom: 5,
  },
  container: {
    borderBottomWidth: 2,
    borderBottomColor: colors.border,
    marginBottom: 10,
  },
});

export default GroupHeader;
