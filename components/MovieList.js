import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Movie from './Movie';

export default class MovieList extends Component {

  state = { movieList: [...this.props.movieList] };

  render() {
    let { movieList } = this.state;
    let movies = movieList.map(movie => (
      <Movie key={movie.id} movieInfo={movie} />
    ));
    return (
      <View style={styles.container} className='main-app'>
        {movies}
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