import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native';
import ComponentA from './components/componentA'; // Ensure the path is correct
import ComponentB from './components/componentB'; // Ensure the path is correct

export default function App() {
  const [textA, setTextA] = useState<string>("Initial Text A");
  const [textB, setTextB] = useState<string>("Initial Text B");

  return (
    <View style={styles.container}>
      <ComponentA text={textA} setText={setTextA} />
      <ComponentB text={textB} setText={setTextB} />
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <ActivityIndicator size="large" />
      <Image
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
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