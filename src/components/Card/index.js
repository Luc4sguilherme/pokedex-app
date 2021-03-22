import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import getBackGroundColor from '../../utils/getBackGroundColor';
import getPokemonImage from '../../utils/getPokemonImage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 250,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  background: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    backgroundColor: '#fff',
    opacity: 0.7,
    zIndex: 1,
  },
  image: {
    zIndex: 2,
    width: 140,
    height: 140,
  },
  title: {
    textTransform: 'capitalize',
    marginTop: 15,
    color: '#222',
    marginBottom: 0,
    fontSize: 18,
    fontWeight: 'normal',
  },
  subtitle: {
    marginTop: 5,
    color: '#666',
    fontSize: 15,
    fontWeight: '300',
  },
});

export default class Card extends PureComponent {
  render() {
    const { types, sprites, id, name } = this.props;
    const elementTypes = types.map((typesInfo) => typesInfo.type.name);

    return (
      <View
        style={[
          styles.container,
          { backgroundColor: `${getBackGroundColor(elementTypes[0])}` },
        ]}
      >
        <View style={styles.background}>
          <Image
            style={styles.image}
            source={{
              uri: `${getPokemonImage(sprites)}`,
            }}
          />
        </View>

        <Text style={styles.title}>{`${id}. ${name}`}</Text>
        <Text style={styles.subtitle}>{`${elementTypes.join(' | ')}`}</Text>
      </View>
    );
  }
}
