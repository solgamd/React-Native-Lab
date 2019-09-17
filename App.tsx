import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface AppProps { }
interface AppState { }

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <View style={styles.container3}>
              <Text style={styles.textStyleHeader}>#crushingit</Text>
              <Text style={styles.textStyleSub}>An app to show how awesome</Text>
              <Text style={styles.textStyleSub}>I am at React Native 😎</Text>
            </View>
          </View>
        </View>
      </>
    );
  }
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'red',
    padding: 20
  },
  container2: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20
  },
  container3: {
    flex: 1,
    backgroundColor: 'lightgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyleHeader: {
    fontSize: 40,
    margin: 2,
    color: 'white',
    backgroundColor: 'red'
  },
  textStyleSub: {
    fontSize: 15,
    margin: 3,
    fontFamily: 'American Typewriter'
  }
});
