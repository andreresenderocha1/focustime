import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const CountDown = ({ subject }) => {
  const [text, setText] = React.useState('');
  const [time, setTime] = React.useState(1000);
  const [isPlay, setIsPlay] = React.useState(false);
  const interval = React.useRef(null);
  React.useEffect(() => {
    setIsPlay(!isPlay);

    interval.current = setInterval(setTime(time - 1), 1000);
    return () => clearInterval(interval.current);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <Text>{time}</Text>
      </View>
      <View style={styles.subject}>
        <Text>Focusing on: </Text>
        <Text>{subject}</Text>
      </View>
      <TouchableOpacity style={styles.button} >
        {!isPlay ? <Text>Start</Text> : <Text>Pause</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  subject: {
    backgroundColor: 'pink',
    width: 100,
    display: 'flex',
  },
  button: {
    borderColor: '#fff',
    borderWidth: 3,
    width: 70,
    height: 70,
    borderRadius: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
