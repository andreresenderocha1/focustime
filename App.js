import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Focus } from './src/features/focus/Focus';
import { CountDown } from './src/components/CountDown';

export default function App() {
  const [focus, setFocus] = React.useState('andre');
  return (
    <View style={styles.container}>
      {focus ? <CountDown subject={focus}/> : <Focus euCliquei={(text)=>setFocus(text)}/>}      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#bace44'
  },  
});
