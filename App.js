import ChatAndComment from './ChatAndComment';

import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';


export default function App() {

  return (
    <View style={styles.container}>


<ChatAndComment/>

    
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
});
