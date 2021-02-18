import { StatusBar } from 'expo-status-bar';
import React ,{useState} from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';

export default function App() {
  const[outputText,setOutputText] = useState('Open up app.js and start coding')
  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <StatusBar style="auto" />
      <Button title="change text" onPress={() => setOutputText('the text changed!')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
