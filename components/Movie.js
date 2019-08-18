import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

const Movie = props => {
    let { movieInfo } = props;
    return (
      <View style={styles.container} className='movie'>
        <Text style={styles.instructions}>{movieInfo.title}</Text>
        <Text style={styles.instructions}>Released: {movieInfo.releaseYear}</Text>
      </View>
    );
  
}

export default Movie

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