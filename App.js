/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class App extends Component {

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.half1}>
          <Text style={styles.text}>This is area #1</Text>
        </View>
        <View style={styles.half2}>
          <View style={[styles.half2x, styles.half21]}>
            <Text style={styles.text}>This is area #2</Text>
          </View>
          <View style={[styles.half2x, styles.half22]}>
            <Text style={styles.text}>This is area #3</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  half1: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  half2: {
    flex: 1,
    flexDirection: 'row'
  },
  half2x: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  half21: {
    backgroundColor: 'green'
  },
  half22: {
    backgroundColor: 'blue'
  },
  text: {
    color: 'white',
    fontSize: 30
  }
});
