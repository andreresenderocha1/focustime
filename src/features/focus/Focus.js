import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';

export const Focus = ({euCliquei}) => {
  const [text, setText] = React.useState('');
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.text}>What you would like to focus?</Text>
      <View style={styles.con}>
        <TextInput onChangeText={text => setText(text)} style={{flex:1, marginRight: 25}} />
        <RoundedButton clicked={()=>euCliquei(text)}/>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingTop: 150,
  },
  text: {
    fontSize: 25,
    paddingBottom: 10,
  },
  con: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
});
