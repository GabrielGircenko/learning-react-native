/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, TextInput, Text, View} from 'react-native';

export default class App extends Component {

  constructor() {
    super()
    this.state = {
      username: "defUsername",
      password: ""
    }
    this.handleUsernameText=this.handleUsernameText.bind(this)
    this.handlePasswordText=this.handlePasswordText.bind(this)
  }

  handleUsernameText(newText) {
    console.log("Username: " + newText)
    this.setState({
      username: newText
    })
  }

  handlePasswordText(newText) {
    console.log(`Password: ${newText}`)
    this.setState({
      password: newText
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Username</Text>
        <TextInput 
          underlineColorAndroid="red"
          defaultValue={this.state.username}
          onChangeText={this.handleUsernameText}
        />
        <Text>Password</Text>
        <TextInput 
          secureTextEntry={true}
          underlineColorAndroid="red"
          defaultValue={this.state.password}
          onChangeText={this.handlePasswordText}
        />
        <Text>This is the username: {this.state.username}</Text>
        <Text>This is the password: {this.state.password}</Text>
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
