import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity onPress={props.clicked} style={styles.button}>
      <Text style={{fontSize: 30, marginTop: -3}}>+</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderColor: 'gray',
    borderWidth: 3,

    width: 50,
    height: 50,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
