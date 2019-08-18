import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import console from 'console';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu'
});

export default class App extends Component {
  componentDidMount() {
    fetch('http://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({
        isLoading: true,
        movieList: [...responseJson.movies]
      }, () => {

        debugger;
      })
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
  }

  state = { isLoading: false, movieList: [] };

  render() {
    let { isLoading, movieList } = this.state;
    let count = movieList.length;
    return (
      <View style={styles.container} className='main-app'>
        <Text style={styles.welcome}>Welcome to React Native!!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {isLoading ? (
          <Text style={styles.welcome}>movie count: {count}</Text>
        ) : (
          <Text>No movie Here</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
