import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AppProps { }
interface AppState { }

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <>
        <View style={styles.container}>
          <Text style={styles.textStyleHeader}>This is a header</Text>
          <Text style={styles.textStyleSub}>This is some smaller text</Text>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a9e0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyleHeader: {
    fontSize: 30,
    margin: 2
  },
  textStyleSub: {
    fontSize: 15,
    margin: 2
  }
});
