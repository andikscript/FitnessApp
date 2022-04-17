import React from 'react';
import { StatusBar, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/'

const WelcomeScreen1 = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.transparent} barStyle={'dark-content'} translucent />
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
      <TouchableOpacity>
        <LinearGradient
          useAngle={true}
          angle={90}
          angleCenter={{x: 0.5, y: 0.5}}
          colors={[COLORS.blueyoung, COLORS.purpleyoung]}
          style={styles.button}>
          <Text style={styles.getStarted}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeader: {
    color: COLORS.black,
    fontSize: 25,
    fontFamily: 'Poppins-Bold',
  },
  containerX: {
    justifyContent: 'flex-end', 
    alignItems: 'flex-end'
  },
  containerText: {
    flexDirection: 'row', 
    alignItems: 'flex-end'
  },
  x: {
    color: COLORS.purpleyoung,
    fontSize: 32,
    fontFamily: 'Poppins-Bold',
  },
  textSubheader: {
    color: COLORS.black,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: COLORS.blueyoung,
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
    color: COLORS.white,
    fontFamily: 'Poppins-Bold',
  },
});

export default WelcomeScreen1;