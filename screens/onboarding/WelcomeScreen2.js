import React from 'react';
import { StatusBar, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants'

const WelcomeScreen2= () => {
  return (
    <LinearGradient
      useAngle={true}
      angle={90}
      angleCenter={{x: 0.5, y: 0.5}}
      colors={[COLORS.blueyoung, COLORS.purpleyoung]}
      style={styles.container}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'light-content'}
        translucent
      />
      <View style={styles.welcome}>
        <View style={styles.containerText}>
          <View>
            <Text style={styles.textHeader}>Fitnest</Text>
          </View>
          <View style={styles.containerX}>
            <Text style={styles.x}>X</Text>
          </View>
        </View>
        <Text style={styles.textSubheader}>Everybody Can Train</Text>
      </View>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.getStarted}>Get Started</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcome: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textHeader: {
    color: COLORS.black,
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
  },
  containerX: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  x: {
    color: COLORS.white,
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },
  textSubheader: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: COLORS.white,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
    marginHorizontal: 50,
  },
  getStarted: {
    color: COLORS.black,
    fontSize: 16,
    color: COLORS.blueyoung,
    fontFamily: 'Poppins-Bold',
  },
});

export default WelcomeScreen2;