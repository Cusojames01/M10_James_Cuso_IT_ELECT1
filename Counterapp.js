import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
function Counterapp() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>{count}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
      </View>

      <StatusBar style="auto" />
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
  buttonContainer: {
    marginVertical: 5, 
    width: 150,
  }
});
export default Counterapp;