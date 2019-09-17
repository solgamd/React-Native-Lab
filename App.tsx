import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

interface AppProps { }
interface AppState { }

export default class App extends React.Component<AppProps, AppState> {

  buttonOne = () => {
    Alert.alert('Awesome! Keep on rockin!')
  }

  buttonTwo = () => {
    Alert.alert('That sucks, bud. Do smething nice for yourself today!')
  }

  render() {
    return (

      <View style={styles.container1}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <Text style={styles.textStyleHeader}>How are you feeling?</Text>

            <Button
              color="#CE796B"
              accessibilityLabel="Button: 'Pretty Good!'"
              title="Pretty good!"
              onPress={this.buttonOne} />

            <Button
              color="#495867"
              accessibilityLabel="Button: 'Not so great."
              title="Not so great."
              onPress={this.buttonTwo} />
          </View>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#E7AD99',
    padding: 5,
  },
  container2: {
    flex: 1,
    backgroundColor: '#C18C5D',
    padding: 5
  },
  container3: {
    flex: 1,
    backgroundColor: '#ECC8AF',
    alignItems: 'center',
    justifyContent: 'center',

  },
  textStyleHeader: {
    fontSize: 40,
    marginHorizontal: 5,
    marginBottom: 50,
    color: 'slategray',
    fontFamily: 'American Typewriter',
    fontWeight: 'bold'
  }
});
