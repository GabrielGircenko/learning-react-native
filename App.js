/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Button, TextInput, Text, View} from 'react-native';

export default class App extends Component {

  constructor() {
    super()
    this.buttonPressed = this.buttonPressed.bind(this)
  }

  buttonPressed() {
    const username = this._username._lastNativeText
    const password = this._password._lastNativeText

    console.log(username, password)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>

        <TextInput 
          underlineColorAndroid="red"
          ref={input => this._username = input}
        />

        <Text>Password</Text>

        <TextInput 
          underlineColorAndroid="red"
          ref={input => this._password = input}
        />

        <Button title={"Hello"} onPress={this.buttonPressed} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center'
  }
});
