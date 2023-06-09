import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const fondoJuego = require('../../../assets/juego.jpg')

const JuegoScreen = () => {
  return (
    <ImageBackground source={fondoJuego} resizeMode="cover" style={styles.fondo}>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={styles.texto}>JUEGO</Text>
    </View>
    </ImageBackground>
  );
};

export default JuegoScreen;

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    justifyContent: 'center',
    width: "100%"
  },
  texto: {
    justifyContent: "center",
    color:"red",
    fontSize: 50
  }
  })