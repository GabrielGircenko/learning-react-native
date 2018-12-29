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
    this.state = {}
    this.buttonPressed = this.buttonPressed.bind(this)
  }

  buttonPressed() {
    console.log(this.state.username, this.state.password)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>

        <TextInput 
          underlineColorAndroid="red"
          defaultValue={this.state.username}
          onChangeText={text => this.setState({username: text})}
        />

        <Text>Password</Text>

        <TextInput 
          underlineColorAndroid="red"
          defaultValue={this.state.password}
          onChangeText={text => this.setState({password: text})}
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
