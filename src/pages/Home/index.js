import { LinearGradient } from 'expo-linear-gradient';
import React, { Component } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

import Card from '../../components/Card';
import api from '../../services/api';

const amountOfPoKemons = 1118;
const limit = 50;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  pokedex: {
    paddingHorizontal: 20,
  },

  loading: {
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
});

export default class Home extends Component {
  state = {
    pokemons: [],
    loading: false,
    offset: 0,
  };

  componentDidMount() {
    this.loadRepositories();
  }

  loadRepositories = async () => {
    const { offset, pokemons, loading } = this.state;

    if (pokemons.length >= amountOfPoKemons) {
      return;
    }

    if (loading) return;

    this.setState({ loading: true });

    api
      .get(`/pokemon?limit=${limit}&offset=${offset}`)
      .then(({ data: { results } }) => {
        Promise.all(
          results.map(async (data) => {
            const response = await fetch(`${data.url}`);
            const pokemon = await response.json();
            return pokemon;
          })
        ).then((pokemon) => {
          const item = [...pokemon].map(({ id, name, sprites, types }) => ({
            id,
            name,
            sprites,
            types,
          }));

          this.setState({
            pokemons: [...pokemons, ...item],
            offset: offset + limit,
            loading: false,
          });
        });
      });
  };

  renderFooter = () => {
    const { loading } = this.state;

    if (!loading) return null;

    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#3498db" />
      </View>
    );
  };

  renderItem = ({ item }) => (
    <Card
      id={item.id}
      name={item.name}
      types={item.types}
      sprites={item.sprites}
    />
  );

  render() {
    const { pokemons } = this.state;

    if (pokemons.length === 0) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <ActivityIndicator size={60} color="#3498db" />
        </View>
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <LinearGradient colors={['rgb(197, 230, 236)', 'rgb(239, 187, 230)']}>
          <FlatList
            style={styles.pokedex}
            data={pokemons}
            maxToRenderPerBatch={5}
            windowSizeprop={5}
            initialNumToRender={15}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={this.loadRepositories}
            onEndReachedThreshold={0.5}
            ListFooterComponent={this.renderFooter}
          />
        </LinearGradient>
      </SafeAreaView>
    );
  }
}
