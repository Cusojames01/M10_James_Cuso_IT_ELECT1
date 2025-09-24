import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ColorChangeApp() {
  const [bgColor, setBgColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor: bgColor ,
      height: 500,
      width: 599,
    }]}>
      <Text style={styles.title}>Color Changer App</Text>

      
      <Button title="White" onPress={() => setBgColor('white')} />

    
      <Button title="Light Blue" onPress={() => setBgColor('lightblue')} />


      <Button title="Light Green" onPress={() => setBgColor('lightgreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
});